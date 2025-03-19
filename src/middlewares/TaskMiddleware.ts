import { Request, Response, NextFunction } from "express";
import { createTaskSchema } from "../schemas/TaskSchemas";
import { Token } from "../Utils/Token";

export class TaskMiddleware {
  static async create(req: Request, res: Response, next: NextFunction) {
    const { body } = req;

    await Token.validateToken(req);
    const { error } = createTaskSchema.validate(body);

    if (error) {
      res.status(400).json({ error: error.message });
      return;
    }

    next();
  }
}
