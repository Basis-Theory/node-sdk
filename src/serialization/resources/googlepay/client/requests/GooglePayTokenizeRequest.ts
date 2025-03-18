/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as BasisTheory from "../../../../../api/index";
import * as core from "../../../../../core";
import { GooglePaymentMethodToken } from "../../../../types/GooglePaymentMethodToken";

export const GooglePayTokenizeRequest: core.serialization.Schema<
    serializers.GooglePayTokenizeRequest.Raw,
    BasisTheory.GooglePayTokenizeRequest
> = core.serialization.object({
    googlePaymentMethodToken: core.serialization.property(
        "google_payment_method_token",
        GooglePaymentMethodToken.optional(),
    ),
});

export declare namespace GooglePayTokenizeRequest {
    export interface Raw {
        google_payment_method_token?: GooglePaymentMethodToken.Raw | null;
    }
}
