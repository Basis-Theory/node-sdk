/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as BasisTheory from "../../../../../api/index";
import * as core from "../../../../../core";

export const ReactRequest: core.serialization.Schema<serializers.ReactRequest.Raw, BasisTheory.ReactRequest> =
    core.serialization.object({
        args: core.serialization.unknown().optional(),
        callbackUrl: core.serialization.property("callback_url", core.serialization.string().optional()),
    });

export declare namespace ReactRequest {
    interface Raw {
        args?: unknown | null;
        callback_url?: string | null;
    }
}
