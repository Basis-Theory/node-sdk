/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as BasisTheory from "../../../../../api/index";
import * as core from "../../../../../core";
import { Application } from "../../../../types/Application";

export const CreateReactorRequest: core.serialization.Schema<
    serializers.CreateReactorRequest.Raw,
    BasisTheory.CreateReactorRequest
> = core.serialization.object({
    name: core.serialization.string(),
    code: core.serialization.string(),
    application: Application.optional(),
    configuration: core.serialization
        .record(core.serialization.string(), core.serialization.string().optional())
        .optional(),
});

export declare namespace CreateReactorRequest {
    export interface Raw {
        name: string;
        code: string;
        application?: Application.Raw | null;
        configuration?: Record<string, string | null | undefined> | null;
    }
}
