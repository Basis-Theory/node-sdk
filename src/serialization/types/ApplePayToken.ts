/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as BasisTheory from "../../api/index.js";
import * as core from "../../core/index.js";
import { CardDetails } from "./CardDetails.js";
import { Authentication } from "./Authentication.js";

export const ApplePayToken: core.serialization.ObjectSchema<serializers.ApplePayToken.Raw, BasisTheory.ApplePayToken> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        type: core.serialization.string().optional(),
        tenantId: core.serialization.property("tenant_id", core.serialization.string().optional()),
        status: core.serialization.string().optional(),
        expiresAt: core.serialization.property("expires_at", core.serialization.date().optional()),
        createdBy: core.serialization.property("created_by", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        modifiedBy: core.serialization.property("modified_by", core.serialization.string().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
        card: CardDetails.optional(),
        data: core.serialization.unknown().optional(),
        authentication: Authentication.optional(),
    });

export declare namespace ApplePayToken {
    export interface Raw {
        id?: string | null;
        type?: string | null;
        tenant_id?: string | null;
        status?: string | null;
        expires_at?: string | null;
        created_by?: string | null;
        created_at?: string | null;
        modified_by?: string | null;
        modified_at?: string | null;
        card?: CardDetails.Raw | null;
        data?: unknown | null;
        authentication?: Authentication.Raw | null;
    }
}
