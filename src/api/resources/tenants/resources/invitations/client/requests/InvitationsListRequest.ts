/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BasisTheory from "../../../../../../index.js";

/**
 * @example
 *     {}
 */
export interface InvitationsListRequest {
    status?: BasisTheory.TenantInvitationStatus;
    page?: number;
    start?: string;
    size?: number;
}
