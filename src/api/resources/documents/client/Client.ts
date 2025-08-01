/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments.js";
import * as core from "../../../../core/index.js";
import * as BasisTheory from "../../../index.js";
import { toJson } from "../../../../core/json.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../core/headers.js";
import * as serializers from "../../../../serialization/index.js";
import * as errors from "../../../../errors/index.js";
import { Data } from "../resources/data/client/Client.js";

export declare namespace Documents {
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
}

export class Documents {
    protected readonly _options: Documents.Options;
    protected _data: Data | undefined;

    constructor(_options: Documents.Options = {}) {
        this._options = _options;
    }

    public get data(): Data {
        return (this._data ??= new Data(this._options));
    }

    /**
     * @param {BasisTheory.DocumentsUploadRequest} request
     * @param {Documents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BasisTheory.BadRequestError}
     * @throws {@link BasisTheory.UnauthorizedError}
     * @throws {@link BasisTheory.ForbiddenError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.documents.upload({})
     */
    public upload(
        request: BasisTheory.DocumentsUploadRequest,
        requestOptions?: Documents.RequestOptions,
    ): core.HttpResponsePromise<BasisTheory.Document> {
        return core.HttpResponsePromise.fromPromise(this.__upload(request, requestOptions));
    }

    private async __upload(
        request: BasisTheory.DocumentsUploadRequest,
        requestOptions?: Documents.RequestOptions,
    ): Promise<core.WithRawResponse<BasisTheory.Document>> {
        const _request = await core.newFormData();
        if (request.document != null) {
            await _request.appendFile("document", request.document);
        }

        if (request.request != null) {
            _request.append("request", toJson(request.request));
        }

        const _maybeEncodedRequest = await _request.getRequest();
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.BasisTheoryEnvironment.Default,
                "documents",
            ),
            method: "POST",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({
                    "BT-TRACE-ID": requestOptions?.correlationId,
                    ...(await this._getCustomAuthorizationHeaders()),
                    ..._maybeEncodedRequest.headers,
                }),
                requestOptions?.headers,
            ),
            requestType: "file",
            duplex: _maybeEncodedRequest.duplex,
            body: _maybeEncodedRequest.body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.Document.parseOrThrow(_response.body, {
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
                throw new errors.BasisTheoryTimeoutError("Timeout exceeded when calling POST /documents.");
            case "unknown":
                throw new errors.BasisTheoryError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} id
     * @param {Documents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BasisTheory.UnauthorizedError}
     * @throws {@link BasisTheory.ForbiddenError}
     * @throws {@link BasisTheory.NotFoundError}
     *
     * @example
     *     await client.documents.get("id")
     */
    public get(id: string, requestOptions?: Documents.RequestOptions): core.HttpResponsePromise<BasisTheory.Document> {
        return core.HttpResponsePromise.fromPromise(this.__get(id, requestOptions));
    }

    private async __get(
        id: string,
        requestOptions?: Documents.RequestOptions,
    ): Promise<core.WithRawResponse<BasisTheory.Document>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.BasisTheoryEnvironment.Default,
                `documents/${encodeURIComponent(id)}`,
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
                data: serializers.Document.parseOrThrow(_response.body, {
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
                throw new errors.BasisTheoryTimeoutError("Timeout exceeded when calling GET /documents/{id}.");
            case "unknown":
                throw new errors.BasisTheoryError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} id
     * @param {Documents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BasisTheory.UnauthorizedError}
     * @throws {@link BasisTheory.ForbiddenError}
     *
     * @example
     *     await client.documents.delete("id")
     */
    public delete(id: string, requestOptions?: Documents.RequestOptions): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__delete(id, requestOptions));
    }

    private async __delete(id: string, requestOptions?: Documents.RequestOptions): Promise<core.WithRawResponse<void>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.BasisTheoryEnvironment.Default,
                `documents/${encodeURIComponent(id)}`,
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
                throw new errors.BasisTheoryTimeoutError("Timeout exceeded when calling DELETE /documents/{id}.");
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
