import { BasisTheoryClient } from "../../src";
import { NotFoundError } from "../../src/api";
import type { Enrollment, Instruction } from "../../src/api";
import { randomUUID } from "node:crypto";

function getClient() {
    return new BasisTheoryClient({
        apiKey: process.env.BT_PVT_TEST_API_KEY,
        environment: process.env.BT_API_URL,
    });
}

async function createCardToken(client: BasisTheoryClient, cardNumber: string) {
    const token = await client.tokens.create({
        type: "card",
        data: {
            number: cardNumber,
            expiration_month: 12,
            expiration_year: 2030,
            cvc: 123,
        },
    });
    return token.id!;
}

function deviceContext() {
    return {
        screenHeight: 1080,
        screenWidth: 1920,
        userAgentString: "node-sdk-test",
        languageCode: "en-US",
        timeZone: "America/New_York",
        javaScriptEnabled: true,
        clientDeviceId: randomUUID(),
        clientReferenceId: randomUUID(),
        platformType: "WEB" as const,
    };
}

async function createAndVerifyEnrollment(client: BasisTheoryClient, cardNumber: string, email: string, agentIds?: string[]) {
    const tokenId = await createCardToken(client, cardNumber);
    const enrollment = await client.agentic.enrollments.create({
        tokenId,
        consumer: { email },
        ...(agentIds ? { agentIds } : {}),
    });

    // Start verification
    const verifyResponse = await client.agentic.enrollments.verify.start(enrollment.id!, {
        deviceContext: deviceContext(),
    });

    // Auto-approved cards are already verified after verify.start
    if ((verifyResponse.status as string) !== "approved") {
        // OTP flow: select method, submit OTP, complete
        if (verifyResponse.methods && verifyResponse.methods.length > 0) {
            await client.agentic.enrollments.verify.method(enrollment.id!, {
                methodId: verifyResponse.methods[0].id!,
            });
        }

        await client.agentic.enrollments.verify.otp(enrollment.id!, {
            otpCode: "123456",
        });

        await client.agentic.enrollments.verify.complete(enrollment.id!);
    }

    return client.agentic.enrollments.get(enrollment.id!);
}

async function findEnrollment(client: BasisTheoryClient, enrollmentId: string): Promise<Enrollment | undefined> {
    const page = await client.agentic.enrollments.list();
    for await (const enrollment of page) {
        if (enrollment.id === enrollmentId) return enrollment;
    }
    return undefined;
}

async function findInstruction(
    client: BasisTheoryClient,
    agentId: string,
    instructionId: string,
    enrollmentId?: string,
): Promise<Instruction | undefined> {
    const page = await client.agentic.agents.instructions.list(agentId, {
        ...(enrollmentId ? { enrollmentId } : {}),
    });
    for await (const instruction of page) {
        if (instruction.id === instructionId) return instruction;
    }
    return undefined;
}

describe('Agents', () => {
    it('should support lifecycle', async () => {
        const client = getClient();

        // Create
        const agentName = "(Deletable) node-SDK-agent-" + randomUUID();
        const agent = await client.agentic.agents.create({
            name: agentName,
        });
        expect(agent.id).toBeDefined();
        expect(agent.name).toBe(agentName);
        expect(agent.status).toBe("active");
        expect(agent.enrollmentIds).toBeDefined();
        expect(agent.createdAt).toBeDefined();

        // Get and verify all fields match
        const retrieved = await client.agentic.agents.get(agent.id!);
        expect(retrieved.id).toBe(agent.id);
        expect(retrieved.name).toBe(agent.name);
        expect(retrieved.status).toBe("active");
        expect(retrieved.enrollmentIds).toEqual(agent.enrollmentIds);
        expect(retrieved.createdAt).toEqual(agent.createdAt);

        // Update
        const updatedName = "(Deletable) node-SDK-agent-updated-" + randomUUID();
        const updated = await client.agentic.agents.update(agent.id!, {
            name: updatedName,
        });
        expect(updated.id).toBe(agent.id);
        expect(updated.name).toBe(updatedName);
        expect(updated.status).toBe("active");
        expect(updated.createdAt).toEqual(agent.createdAt);

        // Delete
        await client.agentic.agents.delete(agent.id!);

        // Verify deleted
        try {
            await client.agentic.agents.get(agent.id!);
            fail('Should have raised a 404 for agent not found');
        } catch (err) {
            expect(err).toBeInstanceOf(NotFoundError);
        }
    });
});

describe('Enrollments', () => {
    it('should support auto-approved enrollment lifecycle', async () => {
        const client = getClient();

        // Create and verify enrollment (passkey bypass card)
        const enrollment = await createAndVerifyEnrollment(client, "4000056655665556", "sdk-test@example.com");
        expect(enrollment.id).toBeDefined();
        expect(enrollment.status).toBe("active");
        expect(enrollment.provider).toBeDefined();
        expect(enrollment.createdAt).toBeDefined();

        // Verify card object fields
        expect(enrollment.card).toBeDefined();
        expect(enrollment.card?.brand).toBe("visa");
        expect(enrollment.card?.bin).toBeDefined();
        expect(enrollment.card?.last4).toBe("5556");
        expect(enrollment.card?.expirationMonth).toBeDefined();
        expect(enrollment.card?.expirationYear).toBeDefined();

        // Get enrollment and verify all fields match
        const retrieved = await client.agentic.enrollments.get(enrollment.id!);
        expect(retrieved.id).toBe(enrollment.id);
        expect(retrieved.status).toBe("active");
        expect(retrieved.provider).toBe(enrollment.provider);
        expect(retrieved.card?.brand).toBe(enrollment.card?.brand);
        expect(retrieved.card?.bin).toBe(enrollment.card?.bin);
        expect(retrieved.card?.last4).toBe(enrollment.card?.last4);
        expect(retrieved.card?.expirationMonth).toBe(enrollment.card?.expirationMonth);
        expect(retrieved.card?.expirationYear).toBe(enrollment.card?.expirationYear);
        expect(retrieved.createdAt).toEqual(enrollment.createdAt);

        // List enrollments (paginated) and verify structure
        const listed = await findEnrollment(client, enrollment.id!);
        expect(listed).toBeDefined();
        expect(listed?.status).toBe("active");
        expect(listed?.card?.last4).toBe("5556");

        // Delete enrollment
        await client.agentic.enrollments.delete(enrollment.id!);
    }, 30000);

    it('should support OTP verification flow', async () => {
        const client = getClient();

        // Create a card token (OTP challenge Visa test card)
        const tokenId = await createCardToken(client, "4000000000000002");

        // Create enrollment (will be pending_verification)
        const enrollment = await client.agentic.enrollments.create({
            tokenId,
            consumer: {
                email: "sdk-test-otp@example.com",
            },
        });
        expect(enrollment.id).toBeDefined();
        expect(enrollment.status).toBe("pending_verification");
        expect(enrollment.provider).toBeDefined();
        expect(enrollment.createdAt).toBeDefined();

        // Verify card object on initial create response
        expect(enrollment.card).toBeDefined();
        expect(enrollment.card?.brand).toBe("visa");
        expect(enrollment.card?.bin).toBeDefined();
        expect(enrollment.card?.last4).toBe("0002");
        expect(enrollment.card?.expirationMonth).toBeDefined();
        expect(enrollment.card?.expirationYear).toBeDefined();

        // Start verification — expect challenge with OTP methods
        const verifyResponse = await client.agentic.enrollments.verify.start(enrollment.id!, {
            deviceContext: deviceContext(),
        });
        expect((verifyResponse as any).status).toBe("challenge");
        expect(verifyResponse.methods).toBeDefined();
        expect(verifyResponse.methods!.length).toBeGreaterThan(0);
        expect(verifyResponse.methods![0].id).toBeDefined();
        expect(verifyResponse.methods![0].type).toBeDefined();

        // Select verification method
        if (verifyResponse.methods && verifyResponse.methods.length > 0) {
            await client.agentic.enrollments.verify.method(enrollment.id!, {
                methodId: verifyResponse.methods[0].id!,
            });
        }

        // Submit OTP (mock accepts any code)
        const otpResponse = await client.agentic.enrollments.verify.otp(enrollment.id!, {
            otpCode: "123456",
        });
        expect((otpResponse as any).status).toBe("device_bound");

        // Complete verification
        const completeResponse = await client.agentic.enrollments.verify.complete(enrollment.id!);
        expect((completeResponse as any).status).toBe("verified");

        // Verify enrollment is now active with all fields
        const completed = await client.agentic.enrollments.get(enrollment.id!);
        expect(completed.id).toBe(enrollment.id);
        expect(completed.status).toBe("active");
        expect(completed.provider).toBe(enrollment.provider);
        expect(completed.card?.brand).toBe("visa");
        expect(completed.card?.last4).toBe("0002");
        expect(completed.createdAt).toEqual(enrollment.createdAt);

        // Cleanup
        await client.agentic.enrollments.delete(enrollment.id!);
    }, 30000);
});

describe('Instructions', () => {
    it('should support lifecycle with credentials', async () => {
        const client = getClient();

        // Setup: create agent and auto-approved enrollment
        const agent = await client.agentic.agents.create({
            name: "(Deletable) node-SDK-instruction-agent-" + randomUUID(),
        });

        const enrollment = await createAndVerifyEnrollment(client, "4000056655665556", "sdk-test-instructions@example.com", [agent.id!]);
        expect(enrollment.status).toBe("active");

        // Create instruction
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 7);

        const instruction = await client.agentic.agents.instructions.create(agent.id!, {
            enrollmentId: enrollment.id!,
            amount: {
                value: "25.00",
                currency: "USD",
            },
            description: "(Deletable) node-SDK test purchase",
            expiresAt,
        });
        expect(instruction.id).toBeDefined();
        expect(instruction.enrollmentId).toBe(enrollment.id);
        expect(instruction.status).toBe("pending_verification");
        expect(instruction.amount).toBeDefined();
        expect(instruction.amount?.value).toBe("25.00");
        expect(instruction.amount?.currency).toBe("USD");
        expect(instruction.expiresAt).toBeDefined();
        expect(instruction.createdAt).toBeDefined();

        // Get instruction and verify all fields match
        const retrieved = await client.agentic.agents.instructions.get(agent.id!, instruction.id!);
        expect(retrieved.id).toBe(instruction.id);
        expect(retrieved.enrollmentId).toBe(instruction.enrollmentId);
        expect(retrieved.status).toBe(instruction.status);
        expect(retrieved.amount?.value).toBe(instruction.amount?.value);
        expect(retrieved.amount?.currency).toBe(instruction.amount?.currency);
        expect(retrieved.createdAt).toEqual(instruction.createdAt);

        // Update instruction
        const updated = await client.agentic.agents.instructions.update(agent.id!, instruction.id!, {
            amount: {
                value: "50.00",
                currency: "USD",
            },
        });
        expect(updated.id).toBe(instruction.id);
        expect(updated.amount?.value).toBe("50.00");
        expect(updated.amount?.currency).toBe("USD");
        expect(updated.enrollmentId).toBe(enrollment.id);
        expect(updated.createdAt).toEqual(instruction.createdAt);

        // List instructions (paginated) and verify structure
        const listed = await findInstruction(client, agent.id!, instruction.id!);
        expect(listed).toBeDefined();
        expect(listed?.enrollmentId).toBe(enrollment.id);
        expect(listed?.amount?.value).toBe("50.00");

        // Verify instruction (required before credentials can be retrieved)
        const instrVerifyResponse = await client.agentic.agents.instructions.verify.start(
            agent.id!,
            instruction.id!,
            { deviceContext: deviceContext() },
        );
        // Passkey bypass card returns { status: "verified" } immediately
        expect((instrVerifyResponse as any).status).toBe("verified");

        // Confirm instruction is now approved
        const approved = await client.agentic.agents.instructions.get(agent.id!, instruction.id!);
        expect(approved.status).toBe("approved");
        expect(approved.id).toBe(instruction.id);
        expect(approved.enrollmentId).toBe(enrollment.id);

        // Get credentials
        const credentials = await client.agentic.agents.instructions.credentials.create(
            agent.id!,
            instruction.id!,
            {
                merchant: {
                    name: "(Deletable) Test Merchant",
                    url: "https://example.com",
                    countryCode: "US",
                },
            },
        );
        expect(credentials.card?.number).toBeDefined();
        expect(credentials.card?.expirationMonth).toBeDefined();
        expect(credentials.card?.expirationYear).toBeDefined();
        expect(credentials.card?.cvc).toBeDefined();

        // Verify mock virtual card number format: 400000100000 + last 4
        expect(credentials.card?.number).toMatch(/^400000100000\d{4}$/);

        // Delete instruction
        await client.agentic.agents.instructions.delete(agent.id!, instruction.id!);

        // Cleanup
        await client.agentic.enrollments.delete(enrollment.id!);
        await client.agentic.agents.delete(agent.id!);
    }, 30000);

    it('should support listing instructions filtered by enrollment', async () => {
        const client = getClient();

        // Setup
        const agent = await client.agentic.agents.create({
            name: "(Deletable) node-SDK-filter-agent-" + randomUUID(),
        });

        const enrollment = await createAndVerifyEnrollment(client, "4000056655665556", "sdk-test-filter@example.com", [agent.id!]);

        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 7);

        const instruction = await client.agentic.agents.instructions.create(agent.id!, {
            enrollmentId: enrollment.id!,
            amount: { value: "10.00", currency: "USD" },
            description: "(Deletable) node-SDK filter test",
            expiresAt,
        });

        // Verify created instruction fields
        expect(instruction.id).toBeDefined();
        expect(instruction.enrollmentId).toBe(enrollment.id);
        expect(instruction.status).toBe("pending_verification");
        expect(instruction.amount?.value).toBe("10.00");
        expect(instruction.amount?.currency).toBe("USD");
        expect(instruction.expiresAt).toBeDefined();
        expect(instruction.createdAt).toBeDefined();

        // List with enrollment filter (paginated)
        const listed = await findInstruction(client, agent.id!, instruction.id!, enrollment.id!);
        expect(listed).toBeDefined();
        expect(listed?.enrollmentId).toBe(enrollment.id);
        expect(listed?.amount?.value).toBe("10.00");

        // Cleanup
        await client.agentic.agents.instructions.delete(agent.id!, instruction.id!);
        await client.agentic.enrollments.delete(enrollment.id!);
        await client.agentic.agents.delete(agent.id!);
    }, 30000);
});
