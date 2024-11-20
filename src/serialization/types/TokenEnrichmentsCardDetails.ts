/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";

export const TokenEnrichmentsCardDetails: core.serialization.ObjectSchema<
    serializers.TokenEnrichmentsCardDetails.Raw,
    BasisTheory.TokenEnrichmentsCardDetails
> = core.serialization.object({
    bin: core.serialization.string().optional(),
    last4: core.serialization.string().optional(),
});

export declare namespace TokenEnrichmentsCardDetails {
    interface Raw {
        bin?: string | null;
        last4?: string | null;
    }
}
