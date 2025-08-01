import { NextFunction, Request } from "express";

export default class AuthenticationMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    // Check if the request has an authentication token
    next();
  }
}
