/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";

export const ApplicationKey: core.serialization.ObjectSchema<
    serializers.ApplicationKey.Raw,
    BasisTheory.ApplicationKey
> = core.serialization.object({
    id: core.serialization.string().optional(),
    key: core.serialization.string().optional(),
    version: core.serialization.string().optional(),
    createdBy: core.serialization.property("created_by", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
});

export declare namespace ApplicationKey {
    interface Raw {
        id?: string | null;
        key?: string | null;
        version?: string | null;
        created_by?: string | null;
        created_at?: string | null;
    }
}
