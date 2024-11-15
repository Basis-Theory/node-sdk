/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as BasisTheory from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Logs {
    interface Options {
        environment?: core.Supplier<environments.BasisTheoryEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
        /** Override the BT-TRACE-ID header */
        correlationId?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the BT-TRACE-ID header */
        correlationId?: string | undefined;
    }
}

export class Logs {
    constructor(protected readonly _options: Logs.Options = {}) {}

    /**
     * @param {BasisTheory.LogsListRequest} request
     * @param {Logs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BasisTheory.BadRequestError}
     * @throws {@link BasisTheory.UnauthorizedError}
     * @throws {@link BasisTheory.ForbiddenError}
     *
     * @example
     *     await client.logs.list()
     */
    public async list(
        request: BasisTheory.LogsListRequest = {},
        requestOptions?: Logs.RequestOptions
    ): Promise<core.Page<BasisTheory.Log>> {
        const list = async (request: BasisTheory.LogsListRequest): Promise<BasisTheory.LogPaginatedList> => {
            const { entityType, entityId, startDate, endDate, page, start, size } = request;
            const _queryParams: Record<string, string | string[] | object | object[]> = {};
            if (entityType != null) {
                _queryParams["entity_type"] = entityType;
            }
            if (entityId != null) {
                _queryParams["entity_id"] = entityId;
            }
            if (startDate != null) {
                _queryParams["start_date"] = startDate.toISOString();
            }
            if (endDate != null) {
                _queryParams["end_date"] = endDate.toISOString();
            }
            if (page != null) {
                _queryParams["page"] = page.toString();
            }
            if (start != null) {
                _queryParams["start"] = start;
            }
            if (size != null) {
                _queryParams["size"] = size.toString();
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    (await core.Supplier.get(this._options.environment)) ?? environments.BasisTheoryEnvironment.Default,
                    "logs"
                ),
                method: "GET",
                headers: {
                    "BT-TRACE-ID":
                        (await core.Supplier.get(this._options.correlationId)) != null
                            ? await core.Supplier.get(this._options.correlationId)
                            : undefined,
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "@basis-theory/node-sdk",
                    "X-Fern-SDK-Version": "0.0.1",
                    "User-Agent": "@basis-theory/node-sdk/0.0.1",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                    ...(await this._getCustomAuthorizationHeaders()),
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions?.maxRetries,
                abortSignal: requestOptions?.abortSignal,
            });
            if (_response.ok) {
                return serializers.LogPaginatedList.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                });
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
                            })
                        );
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
        };
        let _offset = request?.page != null ? request?.page : 1;
        return new core.Pageable<BasisTheory.LogPaginatedList, BasisTheory.Log>({
            response: await list(request),
            hasNextPage: (response) => (response?.data ?? []).length > 0,
            getItems: (response) => response?.data ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "page", _offset));
            },
        });
    }

    /**
     * @param {Logs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BasisTheory.UnauthorizedError}
     * @throws {@link BasisTheory.ForbiddenError}
     *
     * @example
     *     await client.logs.getEntityTypes()
     */
    public async getEntityTypes(requestOptions?: Logs.RequestOptions): Promise<BasisTheory.LogEntityType[]> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BasisTheoryEnvironment.Default,
                "logs/entity-types"
            ),
            method: "GET",
            headers: {
                "BT-TRACE-ID":
                    (await core.Supplier.get(this._options.correlationId)) != null
                        ? await core.Supplier.get(this._options.correlationId)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@basis-theory/node-sdk",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@basis-theory/node-sdk/0.0.1",
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
            return serializers.logs.getEntityTypes.Response.parseOrThrow(_response.body, {
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
