/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";

export const ThreeDsAddress: core.serialization.ObjectSchema<
    serializers.ThreeDsAddress.Raw,
    BasisTheory.ThreeDsAddress
> = core.serialization.object({
    line1: core.serialization.string().optional(),
    line2: core.serialization.string().optional(),
    line3: core.serialization.string().optional(),
    postalCode: core.serialization.property("postal_code", core.serialization.string().optional()),
    city: core.serialization.string().optional(),
    stateCode: core.serialization.property("state_code", core.serialization.string().optional()),
    countryCode: core.serialization.property("country_code", core.serialization.string().optional()),
});

export declare namespace ThreeDsAddress {
    interface Raw {
        line1?: string | null;
        line2?: string | null;
        line3?: string | null;
        postal_code?: string | null;
        city?: string | null;
        state_code?: string | null;
        country_code?: string | null;
    }
}
