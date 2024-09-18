/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";

export const CursorPagination: core.serialization.ObjectSchema<
    serializers.CursorPagination.Raw,
    BasisTheory.CursorPagination
> = core.serialization.object({
    pageSize: core.serialization.property("page_size", core.serialization.number().optional()),
    next: core.serialization.string().optional(),
});

export declare namespace CursorPagination {
    interface Raw {
        page_size?: number | null;
        next?: string | null;
    }
}
