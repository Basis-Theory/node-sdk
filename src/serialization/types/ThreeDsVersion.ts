/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";

export const ThreeDsVersion: core.serialization.ObjectSchema<
    serializers.ThreeDsVersion.Raw,
    BasisTheory.ThreeDsVersion
> = core.serialization.object({
    recommendedVersion: core.serialization.property("recommended_version", core.serialization.string().optional()),
    availableVersions: core.serialization.property(
        "available_versions",
        core.serialization.list(core.serialization.string()).optional(),
    ),
    earliestAcsSupportedVersion: core.serialization.property(
        "earliest_acs_supported_version",
        core.serialization.string().optional(),
    ),
    earliestDsSupportedVersion: core.serialization.property(
        "earliest_ds_supported_version",
        core.serialization.string().optional(),
    ),
    latestAcsSupportedVersion: core.serialization.property(
        "latest_acs_supported_version",
        core.serialization.string().optional(),
    ),
    latestDsSupportedVersion: core.serialization.property(
        "latest_ds_supported_version",
        core.serialization.string().optional(),
    ),
    acsInformation: core.serialization.property(
        "acs_information",
        core.serialization.list(core.serialization.string()).optional(),
    ),
});

export declare namespace ThreeDsVersion {
    export interface Raw {
        recommended_version?: string | null;
        available_versions?: string[] | null;
        earliest_acs_supported_version?: string | null;
        earliest_ds_supported_version?: string | null;
        latest_acs_supported_version?: string | null;
        latest_ds_supported_version?: string | null;
        acs_information?: string[] | null;
    }
}
