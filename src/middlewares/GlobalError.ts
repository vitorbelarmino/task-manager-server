import { NextFunction, Request, Response } from "express";
import { CustomError } from "../Utils/CustomError";

class GlobalError {
  static handleError(err: CustomError, _req: Request, res: Response, next: NextFunction): void {
    try {
      const status = err.status || 500;
      const message = err.message || "Something went wrong";
      res.status(status).json({ error: message });
    } catch (error) {
      next(error);
    }
  }
}

export default GlobalError;
