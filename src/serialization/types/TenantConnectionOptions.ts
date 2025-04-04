/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";

export const TenantConnectionOptions: core.serialization.ObjectSchema<
    serializers.TenantConnectionOptions.Raw,
    BasisTheory.TenantConnectionOptions
> = core.serialization.object({
    domainAliases: core.serialization.property(
        "domain_aliases",
        core.serialization.list(core.serialization.string()).optional(),
    ),
});

export declare namespace TenantConnectionOptions {
    export interface Raw {
        domain_aliases?: string[] | null;
    }
}
