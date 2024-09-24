/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";

export const WebhookResponseStatus: core.serialization.Schema<
    serializers.WebhookResponseStatus.Raw,
    BasisTheory.WebhookResponseStatus
> = core.serialization.enum_(["enabled", "disabled"]);

export declare namespace WebhookResponseStatus {
    type Raw = "enabled" | "disabled";
}