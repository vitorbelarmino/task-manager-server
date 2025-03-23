import { Request, Response, NextFunction } from "express";
import { authSchema } from "../schemas/AuthSchemas";

export class AuthMiddleware {
  static async authValidation(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    const { error } = authSchema.validate(body);
    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    next();
  }
}
