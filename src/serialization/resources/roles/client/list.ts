/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as BasisTheory from "../../../../api/index";
import * as core from "../../../../core";
import { Role } from "../../../types/Role";

export const Response: core.serialization.Schema<serializers.roles.list.Response.Raw, BasisTheory.Role[]> =
    core.serialization.list(Role);

export declare namespace Response {
    type Raw = Role.Raw[];
}
