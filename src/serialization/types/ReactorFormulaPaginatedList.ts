/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BasisTheory from "../../api/index";
import * as core from "../../core";
import { Pagination } from "./Pagination";
import { ReactorFormula } from "./ReactorFormula";

export const ReactorFormulaPaginatedList: core.serialization.ObjectSchema<
    serializers.ReactorFormulaPaginatedList.Raw,
    BasisTheory.ReactorFormulaPaginatedList
> = core.serialization.object({
    pagination: Pagination.optional(),
    data: core.serialization.list(ReactorFormula).optional(),
});

export declare namespace ReactorFormulaPaginatedList {
    export interface Raw {
        pagination?: Pagination.Raw | null;
        data?: ReactorFormula.Raw[] | null;
    }
}
