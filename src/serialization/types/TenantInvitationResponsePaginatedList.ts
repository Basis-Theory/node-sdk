/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";
import { Pagination } from "./Pagination";
import { TenantInvitationResponse } from "./TenantInvitationResponse";

export const TenantInvitationResponsePaginatedList: core.serialization.ObjectSchema<
    serializers.TenantInvitationResponsePaginatedList.Raw,
    BasisTheory.TenantInvitationResponsePaginatedList
> = core.serialization.object({
    pagination: Pagination.optional(),
    data: core.serialization.list(TenantInvitationResponse).optional(),
});

export declare namespace TenantInvitationResponsePaginatedList {
    interface Raw {
        pagination?: Pagination.Raw | null;
        data?: TenantInvitationResponse.Raw[] | null;
    }
}