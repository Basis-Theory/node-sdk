/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as BasisTheory from "../../../../../../../api/index";
import * as core from "../../../../../../../core";

export const ApplePayDomainDeregistrationRequest: core.serialization.Schema<
    serializers.applePay.ApplePayDomainDeregistrationRequest.Raw,
    BasisTheory.applePay.ApplePayDomainDeregistrationRequest
> = core.serialization.object({
    domain: core.serialization.string(),
});

export declare namespace ApplePayDomainDeregistrationRequest {
    export interface Raw {
        domain: string;
    }
}
