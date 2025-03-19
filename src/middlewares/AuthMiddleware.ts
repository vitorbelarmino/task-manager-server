import { Request, Response, NextFunction } from "express";
import { loginSchema } from "../schemas/AuthSchemas";

export class AuthMiddleware {
  static async login(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    const { error } = loginSchema.validate(body);
    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    next();
  }
}
