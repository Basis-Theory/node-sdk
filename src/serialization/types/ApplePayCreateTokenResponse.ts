/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as BasisTheory from "../../api/index.js";
import * as core from "../../core/index.js";
import { CardDetails } from "./CardDetails.js";

export const ApplePayCreateTokenResponse: core.serialization.ObjectSchema<
    serializers.ApplePayCreateTokenResponse.Raw,
    BasisTheory.ApplePayCreateTokenResponse
> = core.serialization.object({
    id: core.serialization.string().optional(),
    type: core.serialization.string().optional(),
    tenantId: core.serialization.property("tenant_id", core.serialization.string().optional()),
    status: core.serialization.string().optional(),
    expiresAt: core.serialization.property("expires_at", core.serialization.date().optional()),
    createdBy: core.serialization.property("created_by", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    card: CardDetails.optional(),
});

export declare namespace ApplePayCreateTokenResponse {
    export interface Raw {
        id?: string | null;
        type?: string | null;
        tenant_id?: string | null;
        status?: string | null;
        expires_at?: string | null;
        created_by?: string | null;
        created_at?: string | null;
        card?: CardDetails.Raw | null;
    }
}
