/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";

export const GetTokensV2: core.serialization.ObjectSchema<serializers.GetTokensV2.Raw, BasisTheory.GetTokensV2> =
    core.serialization.object({
        start: core.serialization.string().optional(),
        size: core.serialization.number().optional(),
    });

export declare namespace GetTokensV2 {
    interface Raw {
        start?: string | null;
        size?: number | null;
    }
}
