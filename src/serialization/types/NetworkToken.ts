/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as BasisTheory from "../../api/index.js";
import * as core from "../../core/index.js";
import { Card } from "./Card.js";
import { CardDetails } from "./CardDetails.js";
import { NetworkTokenExtras } from "./NetworkTokenExtras.js";

export const NetworkToken: core.serialization.ObjectSchema<serializers.NetworkToken.Raw, BasisTheory.NetworkToken> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        tenantId: core.serialization.property("tenant_id", core.serialization.string().optional()),
        data: Card.optional(),
        card: CardDetails.optional(),
        networkToken: core.serialization.property("network_token", CardDetails.optional()),
        par: core.serialization.string().optional(),
        status: core.serialization.string().optional(),
        createdBy: core.serialization.property("created_by", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        modifiedBy: core.serialization.property("modified_by", core.serialization.string().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
        tokenId: core.serialization.property("token_id", core.serialization.string().optional()),
        tokenIntentId: core.serialization.property("token_intent_id", core.serialization.string().optional()),
        extras: core.serialization.property("_extras", NetworkTokenExtras.optional()),
    });

export declare namespace NetworkToken {
    export interface Raw {
        id?: string | null;
        tenant_id?: string | null;
        data?: Card.Raw | null;
        card?: CardDetails.Raw | null;
        network_token?: CardDetails.Raw | null;
        par?: string | null;
        status?: string | null;
        created_by?: string | null;
        created_at?: string | null;
        modified_by?: string | null;
        modified_at?: string | null;
        token_id?: string | null;
        token_intent_id?: string | null;
        _extras?: NetworkTokenExtras.Raw | null;
    }
}
