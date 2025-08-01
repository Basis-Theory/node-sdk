/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as BasisTheory from "../../api/index.js";
import * as core from "../../core/index.js";

export const CreateSessionResponse: core.serialization.ObjectSchema<
    serializers.CreateSessionResponse.Raw,
    BasisTheory.CreateSessionResponse
> = core.serialization.object({
    sessionKey: core.serialization.property("session_key", core.serialization.string().optional()),
    nonce: core.serialization.string().optional(),
    expiresAt: core.serialization.property("expires_at", core.serialization.date().optional()),
});

export declare namespace CreateSessionResponse {
    export interface Raw {
        session_key?: string | null;
        nonce?: string | null;
        expires_at?: string | null;
    }
}
