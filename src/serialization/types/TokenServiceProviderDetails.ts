/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as BasisTheory from "../../api/index.js";
import * as core from "../../core/index.js";
import { AssuranceDetails } from "./AssuranceDetails.js";
import { AuthenticationResponse } from "./AuthenticationResponse.js";

export const TokenServiceProviderDetails: core.serialization.ObjectSchema<
    serializers.TokenServiceProviderDetails.Raw,
    BasisTheory.TokenServiceProviderDetails
> = core.serialization.object({
    tsp: core.serialization.string().optional(),
    authMethod: core.serialization.property("auth_method", core.serialization.string().optional()),
    messageId: core.serialization.property("message_id", core.serialization.string().optional()),
    eciIndicator: core.serialization.property("eci_indicator", core.serialization.string().optional()),
    assuranceDetails: core.serialization.property("assurance_details", AssuranceDetails.optional()),
    transactionId: core.serialization.property("transaction_id", core.serialization.string().optional()),
    currencyCode: core.serialization.property("currency_code", core.serialization.string().optional()),
    transactionAmount: core.serialization.property("transaction_amount", core.serialization.number().optional()),
    cardholderName: core.serialization.property("cardholder_name", core.serialization.string().optional()),
    deviceManufacturerIdentifier: core.serialization.property(
        "device_manufacturer_identifier",
        core.serialization.string().optional(),
    ),
    paymentDataType: core.serialization.property("payment_data_type", core.serialization.string().optional()),
    merchantTokenIdentifier: core.serialization.property(
        "merchant_token_identifier",
        core.serialization.string().optional(),
    ),
    authenticationResponses: core.serialization.property(
        "authentication_responses",
        core.serialization.list(AuthenticationResponse).optional(),
    ),
    status: core.serialization.string().optional(),
});

export declare namespace TokenServiceProviderDetails {
    export interface Raw {
        tsp?: string | null;
        auth_method?: string | null;
        message_id?: string | null;
        eci_indicator?: string | null;
        assurance_details?: AssuranceDetails.Raw | null;
        transaction_id?: string | null;
        currency_code?: string | null;
        transaction_amount?: number | null;
        cardholder_name?: string | null;
        device_manufacturer_identifier?: string | null;
        payment_data_type?: string | null;
        merchant_token_identifier?: string | null;
        authentication_responses?: AuthenticationResponse.Raw[] | null;
        status?: string | null;
    }
}
