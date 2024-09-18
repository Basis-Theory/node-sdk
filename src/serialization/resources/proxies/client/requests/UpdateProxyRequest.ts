/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as BasisTheory from "../../../../../api/index";
import * as core from "../../../../../core";
import { ProxyTransform } from "../../../../types/ProxyTransform";
import { Application } from "../../../../types/Application";

export const UpdateProxyRequest: core.serialization.Schema<
    serializers.UpdateProxyRequest.Raw,
    BasisTheory.UpdateProxyRequest
> = core.serialization.object({
    name: core.serialization.string(),
    destinationUrl: core.serialization.property("destination_url", core.serialization.string()),
    requestReactorId: core.serialization.property("request_reactor_id", core.serialization.string().optional()),
    responseReactorId: core.serialization.property("response_reactor_id", core.serialization.string().optional()),
    requestTransform: core.serialization.property("request_transform", ProxyTransform.optional()),
    responseTransform: core.serialization.property("response_transform", ProxyTransform.optional()),
    application: Application.optional(),
    configuration: core.serialization
        .record(core.serialization.string(), core.serialization.string().optional())
        .optional(),
    requireAuth: core.serialization.property("require_auth", core.serialization.boolean().optional()),
});

export declare namespace UpdateProxyRequest {
    interface Raw {
        name: string;
        destination_url: string;
        request_reactor_id?: string | null;
        response_reactor_id?: string | null;
        request_transform?: ProxyTransform.Raw | null;
        response_transform?: ProxyTransform.Raw | null;
        application?: Application.Raw | null;
        configuration?: Record<string, string | null | undefined> | null;
        require_auth?: boolean | null;
    }
}
