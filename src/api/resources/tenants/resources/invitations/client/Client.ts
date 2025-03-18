/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as BasisTheory from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace Invitations {
    export interface Options {
        environment?: core.Supplier<environments.BasisTheoryEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        apiKey?: core.Supplier<string | undefined>;
        /** Override the BT-TRACE-ID header */
        correlationId?: core.Supplier<string | undefined>;
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
        headers?: Record<string, string>;
    }

    export interface IdempotentRequestOptions extends RequestOptions {
        idempotencyKey?: string | undefined;
    }
}

export class Invitations {
    constructor(protected readonly _options: Invitations.Options = {}) {}

    /**
     * @param {BasisTheory.tenants.InvitationsListRequest} request
     * @param {Invitations.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BasisTheory.UnauthorizedError}
     * @throws {@link BasisTheory.ForbiddenError}
     *
     * @example
     *     await client.tenants.invitations.list()
     */
    public async list(
        request: BasisTheory.tenants.InvitationsListRequest = {},
        requestOptions?: Invitations.RequestOptions,
    ): Promise<core.Page<BasisTheory.TenantInvitationResponse>> {
        const list = async (
            request: BasisTheory.tenants.InvitationsListRequest,
        ): Promise<BasisTheory.TenantInvitationResponsePaginatedList> => {
            const { status, page, start, size } = request;
            const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
            if (status != null) {
                _queryParams["status"] = serializers.TenantInvitationStatus.jsonOrThrow(status, {
                    unrecognizedObjectKeys: "strip",
                });
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
                    (await core.Supplier.get(this._options.baseUrl)) ??
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.BasisTheoryEnvironment.Default,
                    "tenants/self/invitations",
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
                    ...requestOptions?.headers,
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions?.maxRetries,
                abortSignal: requestOptions?.abortSignal,
            });
            if (_response.ok) {
                return serializers.TenantInvitationResponsePaginatedList.parseOrThrow(_response.body, {
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
                            }),
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
                    throw new errors.BasisTheoryTimeoutError(
                        "Timeout exceeded when calling GET /tenants/self/invitations.",
                    );
                case "unknown":
                    throw new errors.BasisTheoryError({
                        message: _response.error.errorMessage,
                    });
            }
        };
        let _offset = request?.page != null ? request?.page : 1;
        return new core.Pageable<
            BasisTheory.TenantInvitationResponsePaginatedList,
            BasisTheory.TenantInvitationResponse
        >({
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
     * @param {BasisTheory.tenants.CreateTenantInvitationRequest} request
     * @param {Invitations.IdempotentRequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BasisTheory.BadRequestError}
     * @throws {@link BasisTheory.UnauthorizedError}
     * @throws {@link BasisTheory.ForbiddenError}
     *
     * @example
     *     await client.tenants.invitations.create({
     *         email: "email"
     *     })
     */
    public async create(
        request: BasisTheory.tenants.CreateTenantInvitationRequest,
        requestOptions?: Invitations.IdempotentRequestOptions,
    ): Promise<BasisTheory.TenantInvitationResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.BasisTheoryEnvironment.Default,
                "tenants/self/invitations",
            ),
            method: "POST",
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
                "BT-IDEMPOTENCY-KEY":
                    requestOptions?.idempotencyKey != null ? requestOptions?.idempotencyKey : undefined,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.tenants.CreateTenantInvitationRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.TenantInvitationResponse.parseOrThrow(_response.body, {
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
                        }),
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
                throw new errors.BasisTheoryTimeoutError(
                    "Timeout exceeded when calling POST /tenants/self/invitations.",
                );
            case "unknown":
                throw new errors.BasisTheoryError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} invitationId
     * @param {Invitations.IdempotentRequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BasisTheory.BadRequestError}
     * @throws {@link BasisTheory.UnauthorizedError}
     * @throws {@link BasisTheory.ForbiddenError}
     *
     * @example
     *     await client.tenants.invitations.resend("invitationId")
     */
    public async resend(
        invitationId: string,
        requestOptions?: Invitations.IdempotentRequestOptions,
    ): Promise<BasisTheory.TenantInvitationResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.BasisTheoryEnvironment.Default,
                `tenants/self/invitations/${encodeURIComponent(invitationId)}/resend`,
            ),
            method: "POST",
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
                "BT-IDEMPOTENCY-KEY":
                    requestOptions?.idempotencyKey != null ? requestOptions?.idempotencyKey : undefined,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.TenantInvitationResponse.parseOrThrow(_response.body, {
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
                        }),
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
                throw new errors.BasisTheoryTimeoutError(
                    "Timeout exceeded when calling POST /tenants/self/invitations/{invitationId}/resend.",
                );
            case "unknown":
                throw new errors.BasisTheoryError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} invitationId
     * @param {Invitations.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BasisTheory.UnauthorizedError}
     * @throws {@link BasisTheory.ForbiddenError}
     * @throws {@link BasisTheory.NotFoundError}
     *
     * @example
     *     await client.tenants.invitations.get("invitationId")
     */
    public async get(
        invitationId: string,
        requestOptions?: Invitations.RequestOptions,
    ): Promise<BasisTheory.TenantInvitationResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.BasisTheoryEnvironment.Default,
                `tenants/self/invitations/${encodeURIComponent(invitationId)}`,
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
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.TenantInvitationResponse.parseOrThrow(_response.body, {
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
                        }),
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
                    );
                case 404:
                    throw new BasisTheory.NotFoundError(_response.error.body);
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
                throw new errors.BasisTheoryTimeoutError(
                    "Timeout exceeded when calling GET /tenants/self/invitations/{invitationId}.",
                );
            case "unknown":
                throw new errors.BasisTheoryError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} invitationId
     * @param {Invitations.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BasisTheory.UnauthorizedError}
     * @throws {@link BasisTheory.ForbiddenError}
     * @throws {@link BasisTheory.NotFoundError}
     *
     * @example
     *     await client.tenants.invitations.delete("invitationId")
     */
    public async delete(invitationId: string, requestOptions?: Invitations.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.BasisTheoryEnvironment.Default,
                `tenants/self/invitations/${encodeURIComponent(invitationId)}`,
            ),
            method: "DELETE",
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
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
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
                    );
                case 404:
                    throw new BasisTheory.NotFoundError(_response.error.body);
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
                throw new errors.BasisTheoryTimeoutError(
                    "Timeout exceeded when calling DELETE /tenants/self/invitations/{invitationId}.",
                );
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
