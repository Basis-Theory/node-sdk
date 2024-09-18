/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";
import { Pagination } from "./Pagination";
import { Proxy } from "./Proxy";

export const ProxyPaginatedList: core.serialization.ObjectSchema<
    serializers.ProxyPaginatedList.Raw,
    BasisTheory.ProxyPaginatedList
> = core.serialization.object({
    pagination: Pagination.optional(),
    data: core.serialization.list(Proxy).optional(),
});

export declare namespace ProxyPaginatedList {
    interface Raw {
        pagination?: Pagination.Raw | null;
        data?: Proxy.Raw[] | null;
    }
}
