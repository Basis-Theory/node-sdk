/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index.js";
import * as BasisTheory from "../../../../../../../api/index.js";
import * as core from "../../../../../../../core/index.js";

export const UpdateTenantMemberRequest: core.serialization.Schema<
    serializers.tenants.UpdateTenantMemberRequest.Raw,
    BasisTheory.tenants.UpdateTenantMemberRequest
> = core.serialization.object({
    role: core.serialization.string(),
});

export declare namespace UpdateTenantMemberRequest {
    export interface Raw {
        role: string;
    }
}
