/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as BasisTheory from "../../api/index.js";
import * as core from "../../core/index.js";
import { WebhookStatus } from "./WebhookStatus.js";

export const Webhook: core.serialization.ObjectSchema<serializers.Webhook.Raw, BasisTheory.Webhook> =
    core.serialization.object({
        id: core.serialization.string(),
        tenantId: core.serialization.property("tenant_id", core.serialization.string()),
        status: WebhookStatus,
        name: core.serialization.string(),
        url: core.serialization.string(),
        notifyEmail: core.serialization.property("notify_email", core.serialization.string().optional()),
        events: core.serialization.list(core.serialization.string()),
        createdBy: core.serialization.property("created_by", core.serialization.string()),
        createdAt: core.serialization.property("created_at", core.serialization.date()),
        modifiedBy: core.serialization.property("modified_by", core.serialization.string().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    });

export declare namespace Webhook {
    export interface Raw {
        id: string;
        tenant_id: string;
        status: WebhookStatus.Raw;
        name: string;
        url: string;
        notify_email?: string | null;
        events: string[];
        created_by: string;
        created_at: string;
        modified_by?: string | null;
        modified_at?: string | null;
    }
}
