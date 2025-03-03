/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as BasisTheory from "../../../../../api/index";
import * as core from "../../../../../core";
import { AccessRule } from "../../../../types/AccessRule";

export const CreateApplicationRequest: core.serialization.Schema<
    serializers.CreateApplicationRequest.Raw,
    BasisTheory.CreateApplicationRequest
> = core.serialization.object({
    name: core.serialization.string(),
    type: core.serialization.string(),
    expiresAt: core.serialization.property("expires_at", core.serialization.string().optional()),
    permissions: core.serialization.list(core.serialization.string()).optional(),
    rules: core.serialization.list(AccessRule).optional(),
    createKey: core.serialization.property("create_key", core.serialization.boolean().optional()),
});

export declare namespace CreateApplicationRequest {
    export interface Raw {
        name: string;
        type: string;
        expires_at?: string | null;
        permissions?: string[] | null;
        rules?: AccessRule.Raw[] | null;
        create_key?: boolean | null;
    }
}
