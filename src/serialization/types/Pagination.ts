/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as BasisTheory from "../../api/index.js";
import * as core from "../../core/index.js";

export const Pagination: core.serialization.ObjectSchema<serializers.Pagination.Raw, BasisTheory.Pagination> =
    core.serialization.object({
        totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
        pageNumber: core.serialization.property("page_number", core.serialization.number().optional()),
        pageSize: core.serialization.property("page_size", core.serialization.number().optional()),
        totalPages: core.serialization.property("total_pages", core.serialization.number().optional()),
        after: core.serialization.string().optional(),
        next: core.serialization.string().optional(),
    });

export declare namespace Pagination {
    export interface Raw {
        total_items?: number | null;
        page_number?: number | null;
        page_size?: number | null;
        total_pages?: number | null;
        after?: string | null;
        next?: string | null;
    }
}
