import { BasisTheoryClient } from "../../src";
import { NotFoundError, UnauthorizedError } from "../../src/api";
import { randomUUID } from "node:crypto";
import { Tokens } from "../../src/api/resources/tokens/client/Client";


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
    } catch (err) {
        expect(err instanceof NotFoundError).toBe(true);
    }
}

async function getAndValidateCardNumber(client: BasisTheoryClient, tokenId: string, cardNumber: string) {
    var t = await client.tokens.get(tokenId!);
    expect((t.data as any).number).toBe(cardNumber);
}

async function createProxy(managementClient: BasisTheoryClient, applicationId: string) {
    const proxy = await managementClient.proxies.create({
        name: "(Deletable) node-SDK-" + crypto.randomUUID(),
        destinationUrl: "https://echo.basistheory.com/" + crypto.randomUUID(),
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
        name: "(Deletable) node-SDK-" + crypto.randomUUID(),
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
        key1: "Key1-" + crypto.randomUUID(),
        key2: "Key2-" + crypto.randomUUID(),
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

        // Create Application
        const application = await managementClient.applications.create({
            type: 'private',
            name: '(Deletable) node-SDK-' + crypto.randomUUID(),
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
    });

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
    })
})