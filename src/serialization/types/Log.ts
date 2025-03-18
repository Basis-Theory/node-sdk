/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";

export const Log: core.serialization.ObjectSchema<serializers.Log.Raw, BasisTheory.Log> = core.serialization.object({
    id: core.serialization.string().optional(),
    tenantId: core.serialization.property("tenant_id", core.serialization.string().optional()),
    actorId: core.serialization.property("actor_id", core.serialization.string().optional()),
    actorType: core.serialization.property("actor_type", core.serialization.string().optional()),
    entityType: core.serialization.property("entity_type", core.serialization.string().optional()),
    entityId: core.serialization.property("entity_id", core.serialization.string().optional()),
    operation: core.serialization.string().optional(),
    message: core.serialization.string().optional(),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
});

export declare namespace Log {
    export interface Raw {
        id?: string | null;
        tenant_id?: string | null;
        actor_id?: string | null;
        actor_type?: string | null;
        entity_type?: string | null;
        entity_id?: string | null;
        operation?: string | null;
        message?: string | null;
        created_at?: string | null;
    }
}
