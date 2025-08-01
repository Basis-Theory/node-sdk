/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments.js";
import * as core from "../../../../../../core/index.js";
import * as BasisTheory from "../../../../../index.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../../../core/headers.js";
import * as serializers from "../../../../../../serialization/index.js";
import * as errors from "../../../../../../errors/index.js";

export declare namespace Self {
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

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the BT-TRACE-ID header */
        correlationId?: string | undefined;
        /** Additional headers to include in the request. */
        headers?: Record<string, string | core.Supplier<string | undefined> | undefined>;
    }

    export interface IdempotentRequestOptions extends RequestOptions {
        idempotencyKey?: string | undefined;
    }
}

export class Self {
    protected readonly _options: Self.Options;

    constructor(_options: Self.Options = {}) {
        this._options = _options;
    }

    /**
     * @param {Self.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BasisTheory.UnauthorizedError}
     * @throws {@link BasisTheory.ForbiddenError}
     * @throws {@link BasisTheory.NotFoundError}
     *
     * @example
     *     await client.tenants.self.getUsageReports()
     */
    public getUsageReports(
        requestOptions?: Self.RequestOptions,
    ): core.HttpResponsePromise<BasisTheory.TenantUsageReport> {
        return core.HttpResponsePromise.fromPromise(this.__getUsageReports(requestOptions));
    }

    private async __getUsageReports(
        requestOptions?: Self.RequestOptions,
    ): Promise<core.WithRawResponse<BasisTheory.TenantUsageReport>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.BasisTheoryEnvironment.Default,
                "tenants/self/reports/usage",
            ),
            method: "GET",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({
                    "BT-TRACE-ID": requestOptions?.correlationId,
                    ...(await this._getCustomAuthorizationHeaders()),
                }),
                requestOptions?.headers,
            ),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.TenantUsageReport.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
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
                        }),
                        _response.rawResponse,
                    );
                case 403:
                    throw new BasisTheory.ForbiddenError(
                        serializers.ProblemDetails.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                case 404:
                    throw new BasisTheory.NotFoundError(_response.error.body, _response.rawResponse);
                default:
                    throw new errors.BasisTheoryError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BasisTheoryError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.BasisTheoryTimeoutError(
                    "Timeout exceeded when calling GET /tenants/self/reports/usage.",
                );
            case "unknown":
                throw new errors.BasisTheoryError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {Self.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BasisTheory.UnauthorizedError}
     * @throws {@link BasisTheory.ForbiddenError}
     * @throws {@link BasisTheory.NotFoundError}
     *
     * @example
     *     await client.tenants.self.get()
     */
    public get(requestOptions?: Self.RequestOptions): core.HttpResponsePromise<BasisTheory.Tenant> {
        return core.HttpResponsePromise.fromPromise(this.__get(requestOptions));
    }

    private async __get(requestOptions?: Self.RequestOptions): Promise<core.WithRawResponse<BasisTheory.Tenant>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.BasisTheoryEnvironment.Default,
                "tenants/self",
            ),
            method: "GET",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({
                    "BT-TRACE-ID": requestOptions?.correlationId,
                    ...(await this._getCustomAuthorizationHeaders()),
                }),
                requestOptions?.headers,
            ),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.Tenant.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
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
                        }),
                        _response.rawResponse,
                    );
                case 403:
                    throw new BasisTheory.ForbiddenError(
                        serializers.ProblemDetails.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                case 404:
                    throw new BasisTheory.NotFoundError(_response.error.body, _response.rawResponse);
                default:
                    throw new errors.BasisTheoryError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BasisTheoryError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.BasisTheoryTimeoutError("Timeout exceeded when calling GET /tenants/self.");
            case "unknown":
                throw new errors.BasisTheoryError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {BasisTheory.tenants.UpdateTenantRequest} request
     * @param {Self.IdempotentRequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BasisTheory.BadRequestError}
     * @throws {@link BasisTheory.UnauthorizedError}
     * @throws {@link BasisTheory.ForbiddenError}
     * @throws {@link BasisTheory.NotFoundError}
     *
     * @example
     *     await client.tenants.self.update({
     *         name: "name"
     *     })
     */
    public update(
        request: BasisTheory.tenants.UpdateTenantRequest,
        requestOptions?: Self.IdempotentRequestOptions,
    ): core.HttpResponsePromise<BasisTheory.Tenant> {
        return core.HttpResponsePromise.fromPromise(this.__update(request, requestOptions));
    }

    private async __update(
        request: BasisTheory.tenants.UpdateTenantRequest,
        requestOptions?: Self.IdempotentRequestOptions,
    ): Promise<core.WithRawResponse<BasisTheory.Tenant>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.BasisTheoryEnvironment.Default,
                "tenants/self",
            ),
            method: "PUT",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({
                    "BT-IDEMPOTENCY-KEY":
                        requestOptions?.idempotencyKey != null ? requestOptions?.idempotencyKey : undefined,
                    "BT-TRACE-ID": requestOptions?.correlationId,
                    ...(await this._getCustomAuthorizationHeaders()),
                }),
                requestOptions?.headers,
            ),
            contentType: "application/json",
            requestType: "json",
            body: serializers.tenants.UpdateTenantRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.Tenant.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new BasisTheory.BadRequestError(
                        serializers.ValidationProblemDetails.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                case 401:
                    throw new BasisTheory.UnauthorizedError(
                        serializers.ProblemDetails.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                case 403:
                    throw new BasisTheory.ForbiddenError(
                        serializers.ProblemDetails.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                case 404:
                    throw new BasisTheory.NotFoundError(_response.error.body, _response.rawResponse);
                default:
                    throw new errors.BasisTheoryError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BasisTheoryError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.BasisTheoryTimeoutError("Timeout exceeded when calling PUT /tenants/self.");
            case "unknown":
                throw new errors.BasisTheoryError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {Self.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BasisTheory.UnauthorizedError}
     * @throws {@link BasisTheory.ForbiddenError}
     * @throws {@link BasisTheory.NotFoundError}
     *
     * @example
     *     await client.tenants.self.delete()
     */
    public delete(requestOptions?: Self.RequestOptions): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__delete(requestOptions));
    }

    private async __delete(requestOptions?: Self.RequestOptions): Promise<core.WithRawResponse<void>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.BasisTheoryEnvironment.Default,
                "tenants/self",
            ),
            method: "DELETE",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({
                    "BT-TRACE-ID": requestOptions?.correlationId,
                    ...(await this._getCustomAuthorizationHeaders()),
                }),
                requestOptions?.headers,
            ),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: undefined, rawResponse: _response.rawResponse };
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
                        }),
                        _response.rawResponse,
                    );
                case 403:
                    throw new BasisTheory.ForbiddenError(
                        serializers.ProblemDetails.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                case 404:
                    throw new BasisTheory.NotFoundError(_response.error.body, _response.rawResponse);
                default:
                    throw new errors.BasisTheoryError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BasisTheoryError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.BasisTheoryTimeoutError("Timeout exceeded when calling DELETE /tenants/self.");
            case "unknown":
                throw new errors.BasisTheoryError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = (await core.Supplier.get(this._options.apiKey)) ?? process?.env["BT-API-KEY"];
        return { "BT-API-KEY": apiKeyValue };
    }
}
