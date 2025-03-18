/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";

export const Permission: core.serialization.ObjectSchema<serializers.Permission.Raw, BasisTheory.Permission> =
    core.serialization.object({
        type: core.serialization.string().optional(),
        description: core.serialization.string().optional(),
        applicationTypes: core.serialization.property(
            "application_types",
            core.serialization.list(core.serialization.string()).optional(),
        ),
    });

export declare namespace Permission {
    export interface Raw {
        type?: string | null;
        description?: string | null;
        application_types?: string[] | null;
    }
}
