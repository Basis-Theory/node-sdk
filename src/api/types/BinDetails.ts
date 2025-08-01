/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BasisTheory from "../index.js";

export interface BinDetails {
    cardBrand?: string;
    type?: string;
    prepaid?: boolean;
    cardSegmentType?: string;
    bank?: BasisTheory.BinDetailsBank;
    product?: BasisTheory.BinDetailsProduct;
    country?: BasisTheory.BinDetailsCountry;
    reloadable?: boolean;
    panOrToken?: string;
    accountUpdater?: boolean;
    alm?: boolean;
    domesticOnly?: boolean;
    gamblingBlocked?: boolean;
    level2?: boolean;
    level3?: boolean;
    issuerCurrency?: string;
    comboCard?: string;
    binLength?: number;
    authentication?: unknown;
    cost?: unknown;
}
