import { BasisTheoryClient } from "../../src";
import { NotFoundError, UnauthorizedError } from "../../src/api";
import { randomUUID } from "node:crypto";
import { Tokens } from "../../src/api/resources/tokens/client/Client";

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getManagementClient() {
    return new BasisTheoryClient({
        apiKey: process.env.BT_MGT_API_KEY,
        environment: process.env.BT_API_URL,
    });
}

function getPrivateClient() {
    return new BasisTheoryClient({
        apiKey: process.env.BT_PVT_API_KEY,
        environment: process.env.BT_API_URL,
    });
}

async function createToken(client: BasisTheoryClient, cardNumber: string, requestOptions?: Tokens.IdempotentRequestOptions) {
    let token = await client.tokens.create({
        type: "card",
        data: {
            number: cardNumber,
            expiration_month: 4,
            expiration_year: 2025,
            cvc: 123,
        },
        metadata: {
            customer_id: "3181",
        },
        searchIndexes: ["{{ data.expiration_month }}", "{{ data.number | last4 }}"],
        fingerprintExpression: "{{ data.number }}",
        mask: {
            number: "{{ data.number, reveal_last: 4 }}",
            cvc: "{{ data.cvc }}",
        },
        deduplicateToken: false,
        containers: ["/pci/high/"],
    }, requestOptions);
    let tokenId = token.id;
    return tokenId;
}

async function ensureTokenDeleted(client: BasisTheoryClient, tokenId: string) {
    try {
        await client.tokens.get(tokenId!);
        fail('Should have raised a 404 for token not found');
    } catch (err) {
        expect(err).toBeInstanceOf(NotFoundError);
    }
}

async function getAndValidateCardNumber(client: BasisTheoryClient, tokenId: string, cardNumber: string) {
    var t = await client.tokens.get(tokenId!);
    expect((t.data as any).number).toBe(cardNumber);
}

async function createProxy(managementClient: BasisTheoryClient, applicationId: string) {
    const proxy = await managementClient.proxies.create({
        name: "(Deletable) node-SDK-" + randomUUID(),
        destinationUrl: "https://echo.basistheory.com/" + randomUUID(),
        application: {
            id: applicationId,
        },
    });
    let proxyId = proxy.id;
    return proxyId;
}

async function deleteProxy(managementClient: BasisTheoryClient, proxyId: string) {
    await managementClient.proxies.delete(proxyId!);
}

async function createReactor(managementClient: BasisTheoryClient, applicationId: string) {
    let reactor = await managementClient.reactors.create({
        name: "(Deletable) node-SDK-" + randomUUID(),
        code: "module.exports = function (req) {return {raw: req.args}}",
        application: {
            id: applicationId,
        },
    });
    let reactorId = reactor.id;
    return reactorId;
}

async function react(client: BasisTheoryClient, reactorId: string) {
    let expected = {
        key1: "Key1-" + randomUUID(),
        key2: "Key2-" + randomUUID(),
    };
    let react = await client.reactors.react(reactorId!, {
        args: expected,
    });
    expect((react.raw as any).key1).toBe(expected.key1);
    expect((react.raw as any).key2).toBe(expected.key2);
}

async function deleteReactor(managementClient: BasisTheoryClient, reactorId: string) {
    await managementClient.reactors.delete(reactorId!);
}

async function createWebhook(client: BasisTheoryClient, url: string) {
    const webhook = await client.webhooks.create({
        name: "(Deletable) node-SDK-" + randomUUID(),
        url: url,
        events: ["token.created"],
    });
    const webhookId = webhook.id;
    return webhookId;
}

async function getAndValidateWebhookUrl(client: BasisTheoryClient, webhookId: string, url: string) {
    const webhook = await client.webhooks.get(webhookId);
    expect(webhook.url).toEqual(url);
}

async function updateWebhook(client: BasisTheoryClient, webhookId: string, updateUrl: string) {
    await client.webhooks.update(webhookId, {
        name: "(Deletable) node-SDK-" + randomUUID(),
        url: updateUrl,
        events: ["token.created", "token.updated"],
    });
}

function updateToken(client: BasisTheoryClient, tokenId: string, updateCardNumber: string) {
    client.tokens.update(tokenId!, {
        data: {
            number: updateCardNumber,
        },
    });
}

describe('Canary', () => {
    it.skip('should fail on unauthorized', async () => {
        // Open API spec invalidly specify a `ProblemDetails` error body
        // when actually no response body is returned
        const client = new BasisTheoryClient({
            apiKey: "INVALID",
            environment: process.env.BT_API_URL,
        });
        try {
            let tenant = await client.tenants.self.get();
            console.log(tenant);
        } catch (error) {
            console.log(error);
            if (!(error instanceof UnauthorizedError)) {
                throw error;
            }
            expect(error.message).toEqual("UnauthorizedError");
        }
    })

    it('should call tenant/self', async () => {
        const client = getManagementClient();
        let tenant = await client.tenants.self.get();
        expect(tenant.name).toBe("SDK Integration Tests")
    })

    it('should support token lifecycle', async () => {
        const client = getPrivateClient();
        const managementClient = getManagementClient();

        // Create Token
        const cardNumber = "6011000990139424";
        let tokenId = await createToken(client, cardNumber);
        await getAndValidateCardNumber(client, tokenId!, cardNumber);

        const updateCardNumber = "4242424242424242";
        updateToken(client, tokenId!, updateCardNumber);
        await getAndValidateCardNumber(client, tokenId!, updateCardNumber);

        // Create Application
        const application = await managementClient.applications.create({
            type: 'private',
            name: '(Deletable) node-SDK-' + randomUUID(),
            permissions: ['token:use']
        });
        let applicationId = application.id;

        // Create / Delete Proxy
        let proxyId = await createProxy(managementClient, applicationId!);
        // Missing ability to call proxies from SDK
        // The definition is missing from the Basis Theory OpenApi specs
        await deleteProxy(managementClient, proxyId!);

        // Reactors
        let reactorId = await createReactor(managementClient, applicationId!);
        await react(client, reactorId!);
        await deleteReactor(managementClient, reactorId!);

        await managementClient.applications.delete(applicationId!)

        await client.tokens.delete(tokenId!);
        await ensureTokenDeleted(client, tokenId!);
    }, 10000);

    it('should support idempotency headers', async () => {
        const client = getPrivateClient();
        const idempotencyKey = randomUUID();

        const firstTokenId = await createToken(client, "6011000990139424", {idempotencyKey: idempotencyKey});
        const secondTokenId = await createToken(client, "4242424242424242", {idempotencyKey: idempotencyKey});

        expect(firstTokenId).toBe(secondTokenId);
    });

    it('should paginate on tokens/list v1', async () => {
        const client = getPrivateClient();
        const pageSize = 3;

        const tokens = await client.tokens.list({
            page: 1,
            size: pageSize
        });

        let count = 0;
        for await (const token of tokens) {
            count++;
            if (count > pageSize) {
                break;
            }
        }
        expect(count).toBeGreaterThan(pageSize);
    });

    it('should paginate on tokens/list v2', async () => {
        const client = getPrivateClient();
        const pageSize = 3;

        const tokens = await client.tokens.listV2({
            size: pageSize,
        });

        let count = 0;
        for await (const token of tokens) {
            count++;
            if (count > pageSize) {
                break;
            }
        }
        expect(count).toBeGreaterThan(pageSize);
    });

    it('should manage webhook lifecycle', async () => {
        const client = getManagementClient();

        const url = "https://echo.basistheory.com/" + randomUUID();
        const webhookId = await createWebhook(client, url);
        await getAndValidateWebhookUrl(client, webhookId, url);

        await sleep(2000); // Required to avoid error `The webhook subscription is undergoing another concurrent operation. Please wait a few seconds, then try again.`

        const updateUrl = "https://echo.basistheory.com/" + randomUUID();
        await updateWebhook(client, webhookId, updateUrl);
        await getAndValidateWebhookUrl(client, webhookId, updateUrl);

        await sleep(2000);

        await client.webhooks.delete(webhookId); // Required to avoid error `The webhook subscription is undergoing another concurrent operation. Please wait a few seconds, then try again.`

        try {
            await client.webhooks.get(webhookId);
            fail('Should have raised a 404 for webhook not found');
        } catch (err) {
            expect(err).toBeDefined();
            // Webhooks 404 currently does not return a `ProblemDetails` component
            // Therefore, the SDK will return the base exception type
            // expect(err).toBeInstanceOf(NotFoundError);
        }
    }, 10000)
})