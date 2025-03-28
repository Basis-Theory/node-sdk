/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";

export const BankDetails: core.serialization.ObjectSchema<serializers.BankDetails.Raw, BasisTheory.BankDetails> =
    core.serialization.object({
        routingNumber: core.serialization.property("routing_number", core.serialization.string().optional()),
        accountNumberLast4: core.serialization.property("account_number_last4", core.serialization.string().optional()),
    });

export declare namespace BankDetails {
    export interface Raw {
        routing_number?: string | null;
        account_number_last4?: string | null;
    }
}
