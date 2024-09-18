/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";

export const BinDetailsCountry: core.serialization.ObjectSchema<
    serializers.BinDetailsCountry.Raw,
    BasisTheory.BinDetailsCountry
> = core.serialization.object({
    alpha2: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
    numeric: core.serialization.string().optional(),
});

export declare namespace BinDetailsCountry {
    interface Raw {
        alpha2?: string | null;
        name?: string | null;
        numeric?: string | null;
    }
}