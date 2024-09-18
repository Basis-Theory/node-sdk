/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as BasisTheory from "../../../../../../../api/index";
import * as core from "../../../../../../../core";

export const UpdateTenantRequest: core.serialization.Schema<
    serializers.tenants.UpdateTenantRequest.Raw,
    BasisTheory.tenants.UpdateTenantRequest
> = core.serialization.object({
    name: core.serialization.string(),
    settings: core.serialization.record(core.serialization.string(), core.serialization.string().optional()).optional(),
});

export declare namespace UpdateTenantRequest {
    interface Raw {
        name: string;
        settings?: Record<string, string | null | undefined> | null;
    }
}
