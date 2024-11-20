/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";
import { CardDetails } from "./CardDetails";

export const CreateTokenIntentResponse: core.serialization.ObjectSchema<
    serializers.CreateTokenIntentResponse.Raw,
    BasisTheory.CreateTokenIntentResponse
> = core.serialization.object({
    id: core.serialization.string().optional(),
    type: core.serialization.string().optional(),
    tenantId: core.serialization.property("tenant_id", core.serialization.string().optional()),
    fingerprint: core.serialization.string().optional(),
    createdBy: core.serialization.property("created_by", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    expiresAt: core.serialization.property("expires_at", core.serialization.date().optional()),
    card: CardDetails.optional(),
});

export declare namespace CreateTokenIntentResponse {
    interface Raw {
        id?: string | null;
        type?: string | null;
        tenant_id?: string | null;
        fingerprint?: string | null;
        created_by?: string | null;
        created_at?: string | null;
        expires_at?: string | null;
        card?: CardDetails.Raw | null;
    }
}