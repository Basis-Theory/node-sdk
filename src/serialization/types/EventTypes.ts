/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as BasisTheory from "../../api/index.js";
import * as core from "../../core/index.js";

export const EventTypes: core.serialization.Schema<serializers.EventTypes.Raw, BasisTheory.EventTypes> =
    core.serialization.list(core.serialization.string());

export declare namespace EventTypes {
    export type Raw = string[];
}
