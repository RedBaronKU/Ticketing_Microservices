"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidationError = void 0;
const custom_error_1 = require("./custom-error");
class RequestValidationError extends custom_error_1.CustomError {
    constructor(errors) {
        super("Request Validation error");
        this.errors = errors;
        this.statusCode = 400;
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    serializeError() {
        return this.errors.map((error) => {
            return { message: error.msg, field: error.param };
        });
    }
}
exports.RequestValidationError = RequestValidationError;
