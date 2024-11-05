/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as BasisTheory from "../../../../../api/index";
import * as core from "../../../../../core";
import { AccessRule } from "../../../../types/AccessRule";

export const UpdateApplicationRequest: core.serialization.Schema<
    serializers.UpdateApplicationRequest.Raw,
    BasisTheory.UpdateApplicationRequest
> = core.serialization.object({
    name: core.serialization.string(),
    permissions: core.serialization.list(core.serialization.string()).optional(),
    rules: core.serialization.list(AccessRule).optional(),
});

export declare namespace UpdateApplicationRequest {
    interface Raw {
        name: string;
        permissions?: string[] | null;
        rules?: AccessRule.Raw[] | null;
    }
}