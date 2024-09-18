/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BasisTheory from "../index";

export interface TokenReport {
    includedMonthlyActiveTokens?: number;
    monthlyActiveTokens?: number;
    metricsByType?: Record<string, BasisTheory.TokenMetrics | undefined>;
    totalTokens?: number;
}
