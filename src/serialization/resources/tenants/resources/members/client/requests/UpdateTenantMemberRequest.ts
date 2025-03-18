/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as BasisTheory from "../../../../../../../api/index";
import * as core from "../../../../../../../core";

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
