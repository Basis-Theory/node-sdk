/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";

export const AdditionalCardDetails: core.serialization.ObjectSchema<
    serializers.AdditionalCardDetails.Raw,
    BasisTheory.AdditionalCardDetails
> = core.serialization.object({
    brand: core.serialization.string().optional(),
    funding: core.serialization.string().optional(),
    authentication: core.serialization.string().optional(),
});

export declare namespace AdditionalCardDetails {
    export interface Raw {
        brand?: string | null;
        funding?: string | null;
        authentication?: string | null;
    }
}
