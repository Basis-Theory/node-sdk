/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";

export const LogEntityType: core.serialization.ObjectSchema<serializers.LogEntityType.Raw, BasisTheory.LogEntityType> =
    core.serialization.object({
        displayName: core.serialization.property("display_name", core.serialization.string().optional()),
        value: core.serialization.string().optional(),
    });

export declare namespace LogEntityType {
    export interface Raw {
        display_name?: string | null;
        value?: string | null;
    }
}
