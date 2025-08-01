/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as BasisTheory from "../../api/index.js";
import * as core from "../../core/index.js";

export const BinDetailsProduct: core.serialization.ObjectSchema<
    serializers.BinDetailsProduct.Raw,
    BasisTheory.BinDetailsProduct
> = core.serialization.object({
    code: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
});

export declare namespace BinDetailsProduct {
    export interface Raw {
        code?: string | null;
        name?: string | null;
    }
}
