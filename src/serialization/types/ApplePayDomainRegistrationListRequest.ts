/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as BasisTheory from "../../api/index.js";
import * as core from "../../core/index.js";

export const ApplePayDomainRegistrationListRequest: core.serialization.ObjectSchema<
    serializers.ApplePayDomainRegistrationListRequest.Raw,
    BasisTheory.ApplePayDomainRegistrationListRequest
> = core.serialization.object({
    domains: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace ApplePayDomainRegistrationListRequest {
    export interface Raw {
        domains?: string[] | null;
    }
}
