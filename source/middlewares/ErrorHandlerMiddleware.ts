import { NextFunction, Request, Response } from 'express';
import { HTTPException } from '../utils/exceptions';

export default function (
  error: HTTPException,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
): void {
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Server error as default';

  response.status(statusCode).send({ status: statusCode, message });
}
