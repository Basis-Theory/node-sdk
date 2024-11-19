/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";

export const TenantInvitationStatus: core.serialization.Schema<
    serializers.TenantInvitationStatus.Raw,
    BasisTheory.TenantInvitationStatus
> = core.serialization.enum_(["PENDING", "EXPIRED"]);

export declare namespace TenantInvitationStatus {
    type Raw = "PENDING" | "EXPIRED";
}