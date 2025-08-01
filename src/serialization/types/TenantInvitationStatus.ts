/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as BasisTheory from "../../api/index.js";
import * as core from "../../core/index.js";

export const TenantInvitationStatus: core.serialization.Schema<
    serializers.TenantInvitationStatus.Raw,
    BasisTheory.TenantInvitationStatus
> = core.serialization.enum_(["PENDING", "EXPIRED"]);

export declare namespace TenantInvitationStatus {
    export type Raw = "PENDING" | "EXPIRED";
}
