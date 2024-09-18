/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";
import { TenantInvitationStatus } from "./TenantInvitationStatus";

export const GetTenantInvitations: core.serialization.ObjectSchema<
    serializers.GetTenantInvitations.Raw,
    BasisTheory.GetTenantInvitations
> = core.serialization.object({
    status: TenantInvitationStatus.optional(),
    page: core.serialization.number().optional(),
    start: core.serialization.string().optional(),
    size: core.serialization.number().optional(),
});

export declare namespace GetTenantInvitations {
    interface Raw {
        status?: TenantInvitationStatus.Raw | null;
        page?: number | null;
        start?: string | null;
        size?: number | null;
    }
}