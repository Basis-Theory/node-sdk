/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";

export const StringStringKeyValuePair: core.serialization.ObjectSchema<
    serializers.StringStringKeyValuePair.Raw,
    BasisTheory.StringStringKeyValuePair
> = core.serialization.object({
    key: core.serialization.string(),
    value: core.serialization.string(),
});

export declare namespace StringStringKeyValuePair {
    export interface Raw {
        key: string;
        value: string;
    }
}
