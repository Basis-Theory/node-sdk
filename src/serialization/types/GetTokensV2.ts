/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";

export const GetTokensV2: core.serialization.ObjectSchema<serializers.GetTokensV2.Raw, BasisTheory.GetTokensV2> =
    core.serialization.object({
        type: core.serialization.string().optional(),
        container: core.serialization.string().optional(),
        fingerprint: core.serialization.string().optional(),
        metadata: core.serialization
            .record(core.serialization.string(), core.serialization.string().optional())
            .optional(),
        start: core.serialization.string().optional(),
        size: core.serialization.number().optional(),
    });

export declare namespace GetTokensV2 {
    export interface Raw {
        type?: string | null;
        container?: string | null;
        fingerprint?: string | null;
        metadata?: Record<string, string | null | undefined> | null;
        start?: string | null;
        size?: number | null;
    }
}
