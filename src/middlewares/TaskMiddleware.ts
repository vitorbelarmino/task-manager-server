import { Request, Response, NextFunction } from "express";
import { createTaskSchema } from "../schemas/TaskSchemas";

export class TaskMiddleware {
  static async create(req: Request, res: Response, next: NextFunction) {
    const { body } = req;

    const { error } = createTaskSchema.validate(body);

    if (error) {
      res.status(400).json({ error: error.message });
      return;
    }

    next();
  }
}
