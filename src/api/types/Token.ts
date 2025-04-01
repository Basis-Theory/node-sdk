/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BasisTheory from "../index";

export interface Token {
    id?: string;
    type?: string;
    tenantId?: string;
    data?: unknown;
    metadata?: Record<string, string | undefined>;
    enrichments?: BasisTheory.TokenEnrichments;
    createdBy?: string;
    createdAt?: Date;
    card?: BasisTheory.CardDetails;
    bank?: BasisTheory.BankDetails;
    networkToken?: BasisTheory.CardDetails;
    modifiedBy?: string;
    modifiedAt?: Date;
    fingerprint?: string;
    fingerprintExpression?: string;
    mask?: unknown;
    privacy?: BasisTheory.Privacy;
    searchIndexes?: string[];
    expiresAt?: Date;
    containers?: string[];
    aliases?: string[];
    authentication?: unknown;
    extras?: BasisTheory.TokenExtras;
}
