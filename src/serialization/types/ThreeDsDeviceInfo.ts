/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as BasisTheory from "../../api/index.js";
import * as core from "../../core/index.js";
import { ThreeDsMobileSdkRenderOptions } from "./ThreeDsMobileSdkRenderOptions.js";

export const ThreeDsDeviceInfo: core.serialization.ObjectSchema<
    serializers.ThreeDsDeviceInfo.Raw,
    BasisTheory.ThreeDsDeviceInfo
> = core.serialization.object({
    browserAcceptHeader: core.serialization.property("browser_accept_header", core.serialization.string().optional()),
    browserIp: core.serialization.property("browser_ip", core.serialization.string().optional()),
    browserJavascriptEnabled: core.serialization.property(
        "browser_javascript_enabled",
        core.serialization.boolean().optional(),
    ),
    browserJavaEnabled: core.serialization.property("browser_java_enabled", core.serialization.boolean().optional()),
    browserLanguage: core.serialization.property("browser_language", core.serialization.string().optional()),
    browserColorDepth: core.serialization.property("browser_color_depth", core.serialization.string().optional()),
    browserScreenHeight: core.serialization.property("browser_screen_height", core.serialization.string().optional()),
    browserScreenWidth: core.serialization.property("browser_screen_width", core.serialization.string().optional()),
    browserTz: core.serialization.property("browser_tz", core.serialization.string().optional()),
    browserUserAgent: core.serialization.property("browser_user_agent", core.serialization.string().optional()),
    sdkTransactionId: core.serialization.property("sdk_transaction_id", core.serialization.string().optional()),
    sdkApplicationId: core.serialization.property("sdk_application_id", core.serialization.string().optional()),
    sdkEncryptionData: core.serialization.property("sdk_encryption_data", core.serialization.string().optional()),
    sdkEphemeralPublicKey: core.serialization.property(
        "sdk_ephemeral_public_key",
        core.serialization.string().optional(),
    ),
    sdkMaxTimeout: core.serialization.property("sdk_max_timeout", core.serialization.string().optional()),
    sdkReferenceNumber: core.serialization.property("sdk_reference_number", core.serialization.string().optional()),
    sdkRenderOptions: core.serialization.property("sdk_render_options", ThreeDsMobileSdkRenderOptions.optional()),
});

export declare namespace ThreeDsDeviceInfo {
    export interface Raw {
        browser_accept_header?: string | null;
        browser_ip?: string | null;
        browser_javascript_enabled?: boolean | null;
        browser_java_enabled?: boolean | null;
        browser_language?: string | null;
        browser_color_depth?: string | null;
        browser_screen_height?: string | null;
        browser_screen_width?: string | null;
        browser_tz?: string | null;
        browser_user_agent?: string | null;
        sdk_transaction_id?: string | null;
        sdk_application_id?: string | null;
        sdk_encryption_data?: string | null;
        sdk_ephemeral_public_key?: string | null;
        sdk_max_timeout?: string | null;
        sdk_reference_number?: string | null;
        sdk_render_options?: ThreeDsMobileSdkRenderOptions.Raw | null;
    }
}
