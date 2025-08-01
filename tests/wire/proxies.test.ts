/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { mockServerPool } from "../mock-server/MockServerPool";
import { BasisTheoryClient } from "../../src/Client";

describe("Proxies", () => {
    test("get", async () => {
        const server = mockServerPool.createServer();
        const client = new BasisTheoryClient({ apiKey: "test", correlationId: "test", environment: server.baseUrl });

        const rawResponseBody = {
            id: "id",
            key: "key",
            tenant_id: "tenant_id",
            name: "name",
            destination_url: "destination_url",
            request_reactor_id: "request_reactor_id",
            response_reactor_id: "response_reactor_id",
            require_auth: true,
            request_transform: {
                type: "type",
                code: "code",
                matcher: "matcher",
                expression: "expression",
                replacement: "replacement",
            },
            response_transform: {
                type: "type",
                code: "code",
                matcher: "matcher",
                expression: "expression",
                replacement: "replacement",
            },
            application_id: "application_id",
            configuration: { key: "value" },
            proxy_host: "proxy_host",
            timeout: 1,
            client_certificate: "client_certificate",
            created_by: "created_by",
            created_at: "2024-01-15T09:30:00Z",
            modified_by: "modified_by",
            modified_at: "2024-01-15T09:30:00Z",
        };
        server.mockEndpoint().get("/proxies/id").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.proxies.get("id");
        expect(response).toEqual({
            id: "id",
            key: "key",
            tenantId: "tenant_id",
            name: "name",
            destinationUrl: "destination_url",
            requestReactorId: "request_reactor_id",
            responseReactorId: "response_reactor_id",
            requireAuth: true,
            requestTransform: {
                type: "type",
                code: "code",
                matcher: "matcher",
                expression: "expression",
                replacement: "replacement",
            },
            responseTransform: {
                type: "type",
                code: "code",
                matcher: "matcher",
                expression: "expression",
                replacement: "replacement",
            },
            applicationId: "application_id",
            configuration: {
                key: "value",
            },
            proxyHost: "proxy_host",
            timeout: 1,
            clientCertificate: "client_certificate",
            createdBy: "created_by",
            createdAt: new Date("2024-01-15T09:30:00.000Z"),
            modifiedBy: "modified_by",
            modifiedAt: new Date("2024-01-15T09:30:00.000Z"),
        });
    });

    test("delete", async () => {
        const server = mockServerPool.createServer();
        const client = new BasisTheoryClient({ apiKey: "test", correlationId: "test", environment: server.baseUrl });

        server.mockEndpoint().delete("/proxies/id").respondWith().statusCode(200).build();

        const response = await client.proxies.delete("id");
        expect(response).toEqual(undefined);
    });
});
