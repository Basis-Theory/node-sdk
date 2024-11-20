/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BasisTheory from "../index";

export interface CreateReactorFormulaRequest {
    id?: string;
    type: string;
    name: string;
    description?: string;
    icon?: string;
    code?: string;
    configuration?: BasisTheory.ReactorFormulaConfiguration[];
    requestParameters?: BasisTheory.ReactorFormulaRequestParameter[];
}