/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";
import { TokenEnrichments } from "./TokenEnrichments";
import { Privacy } from "./Privacy";

export const Token: core.serialization.ObjectSchema<serializers.Token.Raw, BasisTheory.Token> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        type: core.serialization.string().optional(),
        tenantId: core.serialization.property("tenant_id", core.serialization.string().optional()),
        data: core.serialization.unknown().optional(),
        metadata: core.serialization
            .record(core.serialization.string(), core.serialization.string().optional())
            .optional(),
        enrichments: TokenEnrichments.optional(),
        createdBy: core.serialization.property("created_by", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        modifiedBy: core.serialization.property("modified_by", core.serialization.string().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
        fingerprint: core.serialization.string().optional(),
        fingerprintExpression: core.serialization.property(
            "fingerprint_expression",
            core.serialization.string().optional()
        ),
        mask: core.serialization.unknown().optional(),
        privacy: Privacy.optional(),
        searchIndexes: core.serialization.property(
            "search_indexes",
            core.serialization.list(core.serialization.string()).optional()
        ),
        expiresAt: core.serialization.property("expires_at", core.serialization.date().optional()),
        containers: core.serialization.list(core.serialization.string()).optional(),
        aliases: core.serialization.list(core.serialization.string()).optional(),
    });

export declare namespace Token {
    interface Raw {
        id?: string | null;
        type?: string | null;
        tenant_id?: string | null;
        data?: unknown | null;
        metadata?: Record<string, string | null | undefined> | null;
        enrichments?: TokenEnrichments.Raw | null;
        created_by?: string | null;
        created_at?: string | null;
        modified_by?: string | null;
        modified_at?: string | null;
        fingerprint?: string | null;
        fingerprint_expression?: string | null;
        mask?: unknown | null;
        privacy?: Privacy.Raw | null;
        search_indexes?: string[] | null;
        expires_at?: string | null;
        containers?: string[] | null;
        aliases?: string[] | null;
    }
}
