/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index.js";
import * as BasisTheory from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import { AccessRule } from "../../../../types/AccessRule.js";

export const UpdateApplicationRequest: core.serialization.Schema<
    serializers.UpdateApplicationRequest.Raw,
    BasisTheory.UpdateApplicationRequest
> = core.serialization.object({
    name: core.serialization.string(),
    permissions: core.serialization.list(core.serialization.string()).optional(),
    rules: core.serialization.list(AccessRule).optional(),
});

export declare namespace UpdateApplicationRequest {
    export interface Raw {
        name: string;
        permissions?: string[] | null;
        rules?: AccessRule.Raw[] | null;
    }
}
