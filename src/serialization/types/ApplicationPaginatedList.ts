/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";
import { Pagination } from "./Pagination";
import { Application } from "./Application";

export const ApplicationPaginatedList: core.serialization.ObjectSchema<
    serializers.ApplicationPaginatedList.Raw,
    BasisTheory.ApplicationPaginatedList
> = core.serialization.object({
    pagination: Pagination.optional(),
    data: core.serialization.list(Application).optional(),
});

export declare namespace ApplicationPaginatedList {
    interface Raw {
        pagination?: Pagination.Raw | null;
        data?: Application.Raw[] | null;
    }
}
