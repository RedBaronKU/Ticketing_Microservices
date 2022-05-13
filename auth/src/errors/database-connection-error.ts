import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  reason = "Error connecting to database";
  statusCode = 500;
  constructor() {
    super();

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeError() {
    return [{ message: this.reason }];
  }
}