import { createUserSchema } from "../schemas/UserSchemas";
import { Request, Response, NextFunction } from "express";

export class UserMiddleware {
  static async create(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    const { error } = createUserSchema.validate(body);
    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    next();
  }
}
