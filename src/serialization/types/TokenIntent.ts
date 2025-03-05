/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";
import { CardDetails } from "./CardDetails";
import { TokenAuthentication } from "./TokenAuthentication";
import { TokenIntentExtras } from "./TokenIntentExtras";

export const TokenIntent: core.serialization.ObjectSchema<serializers.TokenIntent.Raw, BasisTheory.TokenIntent> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        type: core.serialization.string().optional(),
        tenantId: core.serialization.property("tenant_id", core.serialization.string().optional()),
        fingerprint: core.serialization.string().optional(),
        createdBy: core.serialization.property("created_by", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        expiresAt: core.serialization.property("expires_at", core.serialization.date().optional()),
        card: CardDetails.optional(),
        networkToken: core.serialization.property("network_token", CardDetails.optional()),
        authentication: TokenAuthentication.optional(),
        extras: core.serialization.property("_extras", TokenIntentExtras.optional()),
    });

export declare namespace TokenIntent {
    interface Raw {
        id?: string | null;
        type?: string | null;
        tenant_id?: string | null;
        fingerprint?: string | null;
        created_by?: string | null;
        created_at?: string | null;
        expires_at?: string | null;
        card?: CardDetails.Raw | null;
        network_token?: CardDetails.Raw | null;
        authentication?: TokenAuthentication.Raw | null;
        _extras?: TokenIntentExtras.Raw | null;
    }
}
