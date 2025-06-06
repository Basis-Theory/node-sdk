/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";

export const CardIssuer: core.serialization.ObjectSchema<serializers.CardIssuer.Raw, BasisTheory.CardIssuer> =
    core.serialization.object({
        country: core.serialization.string().optional(),
        name: core.serialization.string().optional(),
    });

export declare namespace CardIssuer {
    export interface Raw {
        country?: string | null;
        name?: string | null;
    }
}
