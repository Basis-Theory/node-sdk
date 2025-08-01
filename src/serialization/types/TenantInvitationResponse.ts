/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as BasisTheory from "../../api/index.js";
import * as core from "../../core/index.js";
import { TenantInvitationStatus } from "./TenantInvitationStatus.js";

export const TenantInvitationResponse: core.serialization.ObjectSchema<
    serializers.TenantInvitationResponse.Raw,
    BasisTheory.TenantInvitationResponse
> = core.serialization.object({
    id: core.serialization.string().optional(),
    tenantId: core.serialization.property("tenant_id", core.serialization.string().optional()),
    email: core.serialization.string().optional(),
    role: core.serialization.string().optional(),
    status: TenantInvitationStatus.optional(),
    expiresAt: core.serialization.property("expires_at", core.serialization.date().optional()),
    createdBy: core.serialization.property("created_by", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    modifiedBy: core.serialization.property("modified_by", core.serialization.string().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
});

export declare namespace TenantInvitationResponse {
    export interface Raw {
        id?: string | null;
        tenant_id?: string | null;
        email?: string | null;
        role?: string | null;
        status?: TenantInvitationStatus.Raw | null;
        expires_at?: string | null;
        created_by?: string | null;
        created_at?: string | null;
        modified_by?: string | null;
        modified_at?: string | null;
    }
}
