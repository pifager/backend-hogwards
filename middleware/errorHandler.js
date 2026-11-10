import { HTTPError } from "../errors/HTTPError.js";

export function notFound(req, res, next) {
  throw new HTTPError(404, `Route ${req.method} ${req.originalUrl} does not exist`);
}

export function errorHandler(err, req, res, next) {
  if (err instanceof HTTPError) {
    return res.status(err.statusCode).json({
      statusCode: err.statusCode,
      error: err.error,
      message: err.message,
    });
  }

  console.error(err);
  res.status(500).json({
    statusCode: 500,
    error: "Internal Server Error",
    message: "Something went wrong on the server",
  });
}