/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments.js";
import * as core from "../../../../core/index.js";
import { ApplePay } from "../resources/applePay/client/Client.js";

export declare namespace Connection {
    export interface Options {
        environment?: core.Supplier<environments.BasisTheoryEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        apiKey?: core.Supplier<string | undefined>;
        /** Override the BT-TRACE-ID header */
        correlationId?: core.Supplier<string | undefined>;
        /** Additional headers to include in requests. */
        headers?: Record<string, string | core.Supplier<string | undefined> | undefined>;
        fetcher?: core.FetchFunction;
    }
}

export class Connection {
    protected readonly _options: Connection.Options;
    protected _applePay: ApplePay | undefined;

    constructor(_options: Connection.Options = {}) {
        this._options = _options;
    }

    public get applePay(): ApplePay {
        return (this._applePay ??= new ApplePay(this._options));
    }
}
