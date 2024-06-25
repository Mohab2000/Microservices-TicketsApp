import { CustomError } from "./custom-error";

export class NotAuthroizedError extends CustomError {
  statusCode = 401;
  constructor() {
    super("Not authorized.");
    Object.setPrototypeOf(this, NotAuthroizedError.prototype);
  }
  serializeErrors() {
    return [{ message: "Not authorized." }];
  }
}
