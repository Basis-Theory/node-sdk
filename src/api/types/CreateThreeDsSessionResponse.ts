/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CreateThreeDsSessionResponse {
    id?: string;
    type?: string;
    cardBrand?: string;
    additionalCardBrands?: string[];
    methodUrl?: string;
    methodNotificationUrl?: string;
    directoryServerId?: string;
    recommendedVersion?: string;
    redirectUrl?: string;
}
