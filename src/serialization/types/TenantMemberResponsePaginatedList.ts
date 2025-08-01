/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as BasisTheory from "../../api/index.js";
import * as core from "../../core/index.js";
import { Pagination } from "./Pagination.js";
import { TenantMemberResponse } from "./TenantMemberResponse.js";

export const TenantMemberResponsePaginatedList: core.serialization.ObjectSchema<
    serializers.TenantMemberResponsePaginatedList.Raw,
    BasisTheory.TenantMemberResponsePaginatedList
> = core.serialization.object({
    pagination: Pagination.optional(),
    data: core.serialization.list(TenantMemberResponse).optional(),
});

export declare namespace TenantMemberResponsePaginatedList {
    export interface Raw {
        pagination?: Pagination.Raw | null;
        data?: TenantMemberResponse.Raw[] | null;
    }
}
