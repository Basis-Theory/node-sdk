/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as BasisTheory from "../../../../../api/index";
import * as core from "../../../../../core";

export const WebhookUpdateRequest: core.serialization.Schema<
    serializers.WebhookUpdateRequest.Raw,
    BasisTheory.WebhookUpdateRequest
> = core.serialization.object({
    name: core.serialization.string(),
    url: core.serialization.string(),
    events: core.serialization.list(core.serialization.string()),
});

export declare namespace WebhookUpdateRequest {
    interface Raw {
        name: string;
        url: string;
        events: string[];
    }
}