/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";

export const BankVerificationResponse: core.serialization.ObjectSchema<
    serializers.BankVerificationResponse.Raw,
    BasisTheory.BankVerificationResponse
> = core.serialization.object({
    status: core.serialization.string().optional(),
});

export declare namespace BankVerificationResponse {
    interface Raw {
        status?: string | null;
    }
}
