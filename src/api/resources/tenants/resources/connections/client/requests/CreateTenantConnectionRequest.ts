/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BasisTheory from "../../../../../../index";

/**
 * @example
 *     {
 *         strategy: "strategy",
 *         options: {}
 *     }
 */
export interface CreateTenantConnectionRequest {
    strategy: string;
    options: BasisTheory.TenantConnectionOptions;
}
