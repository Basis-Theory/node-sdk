/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BasisTheory from "../index.js";

export interface ReactorFormula {
    id?: string;
    type?: string;
    status?: string;
    name?: string;
    description?: string;
    icon?: string;
    code?: string;
    createdBy?: string;
    createdAt?: Date;
    modifiedBy?: string;
    modifiedAt?: Date;
    configuration?: BasisTheory.ReactorFormulaConfiguration[];
    requestParameters?: BasisTheory.ReactorFormulaRequestParameter[];
}
