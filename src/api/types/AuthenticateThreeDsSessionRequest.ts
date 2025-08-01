/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BasisTheory from "../index.js";

export interface AuthenticateThreeDsSessionRequest {
    authenticationCategory: string;
    authenticationType: string;
    cardBrand?: string;
    challengePreference?: string;
    requestDecoupledChallenge?: boolean;
    decoupledChallengeMaxTime?: number;
    purchaseInfo?: BasisTheory.ThreeDsPurchaseInfo;
    merchantInfo?: BasisTheory.ThreeDsMerchantInfo;
    requestorInfo?: BasisTheory.ThreeDsRequestorInfo;
    cardholderInfo?: BasisTheory.ThreeDsCardholderInfo;
    broadcastInfo?: unknown;
    messageExtensions?: BasisTheory.ThreeDsMessageExtension[];
}
