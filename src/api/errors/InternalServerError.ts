/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";
import * as BasisTheory from "../index";

export class InternalServerError extends errors.BasisTheoryError {
    constructor(body: BasisTheory.ProblemDetails) {
        super({
            message: "InternalServerError",
            statusCode: 500,
            body: body,
        });
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
}
