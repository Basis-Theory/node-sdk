/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BasisTheory from "../../../../index";

/**
 * @example
 *     {
 *         name: "name",
 *         code: "code"
 *     }
 */
export interface CreateReactorRequest {
    name: string;
    code: string;
    application?: BasisTheory.Application;
    configuration?: Record<string, string | undefined>;
}