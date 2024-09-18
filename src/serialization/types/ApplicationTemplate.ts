/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";
import { AccessRule } from "./AccessRule";

export const ApplicationTemplate: core.serialization.ObjectSchema<
    serializers.ApplicationTemplate.Raw,
    BasisTheory.ApplicationTemplate
> = core.serialization.object({
    id: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    applicationType: core.serialization.property("application_type", core.serialization.string().optional()),
    templateType: core.serialization.property("template_type", core.serialization.string().optional()),
    isStarter: core.serialization.property("is_starter", core.serialization.boolean().optional()),
    rules: core.serialization.list(AccessRule).optional(),
    permissions: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace ApplicationTemplate {
    interface Raw {
        id?: string | null;
        name?: string | null;
        description?: string | null;
        application_type?: string | null;
        template_type?: string | null;
        is_starter?: boolean | null;
        rules?: AccessRule.Raw[] | null;
        permissions?: string[] | null;
    }
}
