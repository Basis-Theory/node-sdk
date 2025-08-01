/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BasisTheory from "../index.js";

export interface CardDetails {
    bin?: string;
    last4?: string;
    expirationMonth?: number;
    expirationYear?: number;
    brand?: string;
    funding?: string;
    authentication?: string;
    issuer?: BasisTheory.CardIssuer;
    issuerCountry?: BasisTheory.CardIssuerCountry;
    segment?: string;
    additional?: BasisTheory.AdditionalCardDetails[];
}
