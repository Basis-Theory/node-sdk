/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as BasisTheory from "../../../../../api/index";
import * as core from "../../../../../core";

export const SearchTokensRequestV2: core.serialization.Schema<
    serializers.SearchTokensRequestV2.Raw,
    BasisTheory.SearchTokensRequestV2
> = core.serialization.object({
    query: core.serialization.string().optional(),
    start: core.serialization.string().optional(),
    size: core.serialization.number().optional(),
});

export declare namespace SearchTokensRequestV2 {
    interface Raw {
        query?: string | null;
        start?: string | null;
        size?: number | null;
    }
}
