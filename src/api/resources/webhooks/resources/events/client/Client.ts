/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as BasisTheory from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";

export declare namespace Events {
    interface Options {
        environment?: core.Supplier<environments.BasisTheoryEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Events {
    constructor(protected readonly _options: Events.Options = {}) {}

    /**
     * Return a list of available event types
     *
     * @param {Events.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BasisTheory.UnauthorizedError}
     * @throws {@link BasisTheory.ForbiddenError}
     *
     * @example
     *     await client.webhooks.events.list()
     */
    public async list(requestOptions?: Events.RequestOptions): Promise<BasisTheory.EventTypes> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BasisTheoryEnvironment.Default,
                "webhooks/event-types"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@basis-theory/node-sdk",
                "X-Fern-SDK-Version": "1.0.3",
                "User-Agent": "@basis-theory/node-sdk/1.0.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.EventTypes.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new BasisTheory.UnauthorizedError(
                        serializers.ProblemDetails.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new BasisTheory.ForbiddenError(
                        serializers.ProblemDetails.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.BasisTheoryError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BasisTheoryError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.BasisTheoryTimeoutError();
            case "unknown":
                throw new errors.BasisTheoryError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = (await core.Supplier.get(this._options.apiKey)) ?? process?.env["BT-API-KEY"];
        return { "BT-API-KEY": apiKeyValue };
    }
}
