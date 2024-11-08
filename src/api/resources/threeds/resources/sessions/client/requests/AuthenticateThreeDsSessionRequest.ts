/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BasisTheory from "../../../../../../index";

/**
 * @example
 *     {
 *         authenticationCategory: "authentication_category",
 *         authenticationType: "authentication_type",
 *         requestorInfo: {}
 *     }
 */
export interface AuthenticateThreeDsSessionRequest {
    authenticationCategory: string;
    authenticationType: string;
    challengePreference?: string;
    purchaseInfo?: BasisTheory.ThreeDsPurchaseInfo;
    merchantInfo?: BasisTheory.ThreeDsMerchantInfo;
    requestorInfo: BasisTheory.ThreeDsRequestorInfo;
    cardholderInfo?: BasisTheory.ThreeDsCardholderInfo;
    broadcastInfo?: unknown;
    messageExtensions?: BasisTheory.ThreeDsMessageExtension[];
}