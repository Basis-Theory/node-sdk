/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";

export class NotFoundError extends errors.BasisTheoryError {
    constructor(body?: unknown) {
        super({
            message: "NotFoundError",
            statusCode: 404,
            body: body,
        });
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
