/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";
import { ThreeDsMerchantRiskInfo } from "./ThreeDsMerchantRiskInfo";

export const ThreeDsMerchantInfo: core.serialization.ObjectSchema<
    serializers.ThreeDsMerchantInfo.Raw,
    BasisTheory.ThreeDsMerchantInfo
> = core.serialization.object({
    mid: core.serialization.string().optional(),
    acquirerBin: core.serialization.property("acquirer_bin", core.serialization.string().optional()),
    name: core.serialization.string().optional(),
    countryCode: core.serialization.property("country_code", core.serialization.string().optional()),
    categoryCode: core.serialization.property("category_code", core.serialization.string().optional()),
    riskInfo: core.serialization.property("risk_info", ThreeDsMerchantRiskInfo.optional()),
});

export declare namespace ThreeDsMerchantInfo {
    interface Raw {
        mid?: string | null;
        acquirer_bin?: string | null;
        name?: string | null;
        country_code?: string | null;
        category_code?: string | null;
        risk_info?: ThreeDsMerchantRiskInfo.Raw | null;
    }
}
