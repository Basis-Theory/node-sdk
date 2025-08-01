/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { mockServerPool } from "../../mock-server/MockServerPool";
import { BasisTheoryClient } from "../../../src/Client";

describe("Invitations", () => {
    test("get", async () => {
        const server = mockServerPool.createServer();
        const client = new BasisTheoryClient({ apiKey: "test", correlationId: "test", environment: server.baseUrl });

        const rawResponseBody = {
            id: "id",
            tenant_id: "tenant_id",
            email: "email",
            role: "role",
            status: "PENDING",
            expires_at: "2024-01-15T09:30:00Z",
            created_by: "created_by",
            created_at: "2024-01-15T09:30:00Z",
            modified_by: "modified_by",
            modified_at: "2024-01-15T09:30:00Z",
        };
        server
            .mockEndpoint()
            .get("/tenants/self/invitations/invitationId")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.tenants.invitations.get("invitationId");
        expect(response).toEqual({
            id: "id",
            tenantId: "tenant_id",
            email: "email",
            role: "role",
            status: "PENDING",
            expiresAt: new Date("2024-01-15T09:30:00.000Z"),
            createdBy: "created_by",
            createdAt: new Date("2024-01-15T09:30:00.000Z"),
            modifiedBy: "modified_by",
            modifiedAt: new Date("2024-01-15T09:30:00.000Z"),
        });
    });

    test("delete", async () => {
        const server = mockServerPool.createServer();
        const client = new BasisTheoryClient({ apiKey: "test", correlationId: "test", environment: server.baseUrl });

        server.mockEndpoint().delete("/tenants/self/invitations/invitationId").respondWith().statusCode(200).build();

        const response = await client.tenants.invitations.delete("invitationId");
        expect(response).toEqual(undefined);
    });
});
