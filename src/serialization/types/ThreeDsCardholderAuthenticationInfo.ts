/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";

export const ThreeDsCardholderAuthenticationInfo: core.serialization.ObjectSchema<
    serializers.ThreeDsCardholderAuthenticationInfo.Raw,
    BasisTheory.ThreeDsCardholderAuthenticationInfo
> = core.serialization.object({
    method: core.serialization.string().optional(),
    timestamp: core.serialization.string().optional(),
    data: core.serialization.string().optional(),
});

export declare namespace ThreeDsCardholderAuthenticationInfo {
    export interface Raw {
        method?: string | null;
        timestamp?: string | null;
        data?: string | null;
    }
}
