import { BasisTheoryClient } from "../../src";
import { BadRequestError, NotFoundError, UnauthorizedError } from "../../src/api";
import { randomUUID } from "node:crypto";
import { Tokens } from "../../src/api/resources/tokens/client/Client";

expect.extend({
    toBeGuid(received) {
        const guidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        const pass = guidPattern.test(received);
        if (pass) {
            return {
                message: () => `expected ${received} not to be a GUID`,
                pass: true,
            };
        } else {
            return {
                message: () => `expected ${received} to be a GUID`,
                pass: false,
            };
        }
    },
});

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

async function updateToken(client: BasisTheoryClient, tokenId: string, updateCardNumber: string) {
    await client.tokens.update(tokenId!, {
        data: {
            number: updateCardNumber,
        },
    });
}

describe ('Authentication', () => {
    it.skip('should fail on unauthorized', async () => {
        // Open API spec invalidly specify a `ProblemDetails` error body
        // when actually no response body is returned
        const client = new BasisTheoryClient({
            apiKey: "INVALID",
            environment: process.env.BT_API_URL,
        });
        try {
            let tenant = await client.tenants.self.get();
            fail('Should have raised an UnauthorizedError');
        } catch (error) {
            if (!(error instanceof UnauthorizedError)) {
                throw error;
            }
            expect(error.message).toEqual("UnauthorizedError");
        }
    });

    it('should authenticate at instance', async () => {
        const client = new BasisTheoryClient({
            apiKey: process.env.BT_MGT_API_KEY,
            environment: process.env.BT_API_URL,
        });
        await client.tenants.self.get();
    });
});

describe('Request Correlation', () => {
    it('should support request headers', async () => {
        const client = getManagementClient();
        await client.tenants.self.get({
            correlationId: randomUUID()
        });
    });
});

describe('Tokens', () => {
   it('should create and update', async () => {
       const client = getPrivateClient();
       const token = await client.tokens.create({
               type: "token",
               data: "Sensitive Value",
               mask: "{{ data | reveal_last: 4 }}",
               containers: ["/general/high/"],
               metadata: {
                   nonSensitiveField: "Non-Sensitive Value",
               },
               searchIndexes: ["{{ data }}", "{{ data | last4 }}"],
               fingerprintExpression: "{{ data }}",
               deduplicateToken: true,
               expiresAt: "8/26/2030 7:23:57 PM -07:00",
           }
       );
       expect(token.id).toBeDefined();

       const updateToken = await client.tokens.update(token.id!, {
           data: "Sensitive Value",
           mask: "{{ data | reveal_last: 4 }}",
           metadata: {
               nonSensitiveField: "Non-Sensitive Value",
           },
           searchIndexes: ["{{ data }}", "{{ data | last4 }}"],
           fingerprintExpression: "{{ data }}",
           deduplicateToken: true,
       });
       expect(updateToken.id).toBe(token.id);
   })
});

describe ('Tokenize', () => {
    it('should tokenize (basic)', async () => {
        const client = getPrivateClient();
        const response = await client.tokens.tokenize({
            "first_name": "John",
            "last_name": "Doe"
        });
        // @ts-ignore
        expect(response.first_name).toBeDefined();
        // @ts-ignore
        expect(response.last_name).toBeDefined();
    });

    it('should tokenize', async () => {
        const client = getPrivateClient();
        const token = await client.tokens.tokenize({
            type: "token",
            data: "Sensitive Value",
            metadata: {
                "nonSensitive": "Non-Sensitive Value"
            },
            search_indexes: [
                "{{ data }}"
            ],
            fingerprint_expression: "{{ data }}"

        });
        // @ts-ignore
        expect(token.id).toBeDefined();
    });

    it('should tokenize (card)', async () => {
        const client = getPrivateClient();
        const token = await client.tokens.tokenize({
            type: "card",
            data: {
                number: "4242424242424242",
                expiration_month: 12,
                expiration_year: 2025,
                cvc: "123",
            },
            metadata: {
                nonSensitiveField: "Non-Sensitive Value",
            },
        });
        // @ts-ignore
        expect(token.id).toBeDefined();
    });

    it ('should tokenize (array)', async () => {
        const client = getPrivateClient();
        const response = await client.tokens.tokenize([
            "John",
            "Doe",
            {
                type: "card",
                data: {
                    number: "4242424242424242",
                    expiration_month: 12,
                    expiration_year: 2025,
                    cvc: "123",
                },
                metadata: {
                    nonSensitiveField: "Non-Sensitive Value",
                },
            },
            {
                type: "token",
                data: "Sensitive Value",
            },
        ]);
        // @ts-ignore
        expect(response.length).toBe(4);
        // @ts-ignore
        expect(response[0]).toBeGuid()
        // @ts-ignore
        expect(response[1]).toBeGuid()
        // @ts-ignore
        expect(response[2].id).toBeGuid()
        // @ts-ignore
        expect(response[3].id).toBeGuid()
    });

    it('should tokenize (composite)', async () => {
       const client = getPrivateClient();
       const response = await client.tokens.tokenize({
           first_name: "John",
           last_name: "Doe",
           primary_card: {
               type: "card",
               data: {
                   number: "4242424242424242",
                   expiration_month: 12,
                   expiration_year: 2025,
                   cvc: "123",
               },
           },
           sensitive_tags: [
               "preferred",
               {
                   type: "token",
                   data: "vip",
               },
           ],
        });
        // @ts-ignore
        expect(response.first_name).toBeGuid();
        // @ts-ignore
        expect(response.last_name).toBeGuid();
        // @ts-ignore
        expect(response.primary_card.id).toBeGuid();
        // @ts-ignore
        expect(response.sensitive_tags.length).toBe(2);
        // @ts-ignore
        expect(response.sensitive_tags[0]).toBeGuid();
        // @ts-ignore
        expect(response.sensitive_tags[1].id).toBeGuid();
    });
});

describe('detokenize', () => {
    it('should detokenize', async () => {
        const client = getPrivateClient();
        const tokenId = await createToken(client, "4242424242424242");
        const actual = await client.tokens.detokenize({
            "card_number": `{{ ${tokenId} | json: '$.number' }}`
        });
        //@ts-ignore
        expect(actual.card_number).toBe("4242424242424242")
    });

    it('should detokenize (array)', async () => {
       const client = getPrivateClient();
       const tokenId = await createToken(client, "4242424242424242");
       const tokenId2 = await createToken(client, "4111111111111111");
       const actual = await client.tokens.detokenize({
           "tokens":[
               `{{ ${tokenId} }}`,
               `{{ ${tokenId2} }}`,
           ]
       });
       //@ts-ignore
        expect(actual.tokens[0].number).toBe("4242424242424242");
       //@ts-ignore
        expect(actual.tokens[1].number).toBe("4111111111111111");
    });
});

describe('enrichments', () => {
    it('should return bank account verification', async () => {
        const client = getPrivateClient();
        const token = await client.tokens.create({
            type: "bank",
                data: {
                    routing_number: "021000021",
                    account_number: "00001"
            }
        });
        const actual = await client.enrichments.bankaccountverify({
            tokenId: token.id!
        });
        //@ts-ignore
        //This should work, but the Open API spec does not specify a response object (ie: it is defined as `void`)
        expect(actual.status).toBe("enabled");
    });
});

describe('Canary', () => {
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
        await updateToken(client, tokenId!, updateCardNumber);
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
            expect(err).toBeInstanceOf(NotFoundError);
        }
    }, 10000)
})