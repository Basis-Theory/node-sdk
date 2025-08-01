/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as BasisTheory from "../../api/index.js";
import * as core from "../../core/index.js";
import { ThreeDsCardholderAccountInfo } from "./ThreeDsCardholderAccountInfo.js";
import { ThreeDsCardholderAuthenticationInfo } from "./ThreeDsCardholderAuthenticationInfo.js";
import { ThreeDsPriorAuthenticationInfo } from "./ThreeDsPriorAuthenticationInfo.js";
import { ThreeDsCardholderPhoneNumber } from "./ThreeDsCardholderPhoneNumber.js";
import { ThreeDsAddress } from "./ThreeDsAddress.js";

export const ThreeDsCardholderInfo: core.serialization.ObjectSchema<
    serializers.ThreeDsCardholderInfo.Raw,
    BasisTheory.ThreeDsCardholderInfo
> = core.serialization.object({
    accountId: core.serialization.property("account_id", core.serialization.string().optional()),
    accountType: core.serialization.property("account_type", core.serialization.string().optional()),
    accountInfo: core.serialization.property("account_info", ThreeDsCardholderAccountInfo.optional()),
    authenticationInfo: core.serialization.property(
        "authentication_info",
        ThreeDsCardholderAuthenticationInfo.optional(),
    ),
    priorAuthenticationInfo: core.serialization.property(
        "prior_authentication_info",
        ThreeDsPriorAuthenticationInfo.optional(),
    ),
    name: core.serialization.string().optional(),
    email: core.serialization.string().optional(),
    phoneNumber: core.serialization.property("phone_number", ThreeDsCardholderPhoneNumber.optional()),
    mobilePhoneNumber: core.serialization.property("mobile_phone_number", ThreeDsCardholderPhoneNumber.optional()),
    workPhoneNumber: core.serialization.property("work_phone_number", ThreeDsCardholderPhoneNumber.optional()),
    billingShippingAddressMatch: core.serialization.property(
        "billing_shipping_address_match",
        core.serialization.string().optional(),
    ),
    billingAddress: core.serialization.property("billing_address", ThreeDsAddress.optional()),
    shippingAddress: core.serialization.property("shipping_address", ThreeDsAddress.optional()),
});

export declare namespace ThreeDsCardholderInfo {
    export interface Raw {
        account_id?: string | null;
        account_type?: string | null;
        account_info?: ThreeDsCardholderAccountInfo.Raw | null;
        authentication_info?: ThreeDsCardholderAuthenticationInfo.Raw | null;
        prior_authentication_info?: ThreeDsPriorAuthenticationInfo.Raw | null;
        name?: string | null;
        email?: string | null;
        phone_number?: ThreeDsCardholderPhoneNumber.Raw | null;
        mobile_phone_number?: ThreeDsCardholderPhoneNumber.Raw | null;
        work_phone_number?: ThreeDsCardholderPhoneNumber.Raw | null;
        billing_shipping_address_match?: string | null;
        billing_address?: ThreeDsAddress.Raw | null;
        shipping_address?: ThreeDsAddress.Raw | null;
    }
}
