/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index.js";
import * as BasisTheory from "../../../../../../../api/index.js";
import * as core from "../../../../../../../core/index.js";

export const CreateTenantInvitationRequest: core.serialization.Schema<
    serializers.tenants.CreateTenantInvitationRequest.Raw,
    BasisTheory.tenants.CreateTenantInvitationRequest
> = core.serialization.object({
    email: core.serialization.string(),
    role: core.serialization.string().optional(),
});

export declare namespace CreateTenantInvitationRequest {
    export interface Raw {
        email: string;
        role?: string | null;
    }
}
