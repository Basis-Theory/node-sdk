/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BasisTheory from "../../../../index";

/**
 * @example
 *     {
 *         name: "name"
 *     }
 */
export interface UpdateApplicationRequest {
    name: string;
    permissions?: string[];
    rules?: BasisTheory.AccessRule[];
}