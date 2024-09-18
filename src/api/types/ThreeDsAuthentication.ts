/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BasisTheory from "../index";

export interface ThreeDsAuthentication {
    panTokenId?: string;
    threedsVersion?: string;
    acsTransactionId?: string;
    dsTransactionId?: string;
    sdkTransactionId?: string;
    acsReferenceNumber?: string;
    dsReferenceNumber?: string;
    authenticationValue?: string;
    authenticationStatus?: string;
    authenticationStatusCode?: string;
    authenticationStatusReason?: string;
    eci?: string;
    acsChallengeMandated?: string;
    acsDecoupledAuthentication?: string;
    authenticationChallengeType?: string;
    acsRenderingType?: BasisTheory.ThreeDsAcsRenderingType;
    acsSignedContent?: string;
    acsChallengeUrl?: string;
    challengeAttempts?: string;
    challengeCancelReason?: string;
    cardholderInfo?: string;
    whitelistStatus?: string;
    whitelistStatusSource?: string;
    messageExtensions?: BasisTheory.ThreeDsMessageExtension[];
}