/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";
import * as BasisTheory from "../index";

export class UnauthorizedError extends errors.BasisTheoryError {
    constructor(body: BasisTheory.ProblemDetails) {
        super({
            message: "UnauthorizedError",
            statusCode: 401,
            body: body,
        });
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}
