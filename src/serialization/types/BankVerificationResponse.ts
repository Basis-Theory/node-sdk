/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as BasisTheory from "../../api/index.js";
import * as core from "../../core/index.js";

export const BankVerificationResponse: core.serialization.ObjectSchema<
    serializers.BankVerificationResponse.Raw,
    BasisTheory.BankVerificationResponse
> = core.serialization.object({
    status: core.serialization.string().optional(),
});

export declare namespace BankVerificationResponse {
    export interface Raw {
        status?: string | null;
    }
}
