import { STATUS_CODES } from "node:http";

export class HTTPError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.name = "HTTPError";
    this.statusCode = statusCode;
    this.error = STATUS_CODES[statusCode];
  }
}