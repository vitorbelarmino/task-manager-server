import { Request, Response } from "express";
import { taskService } from "./Task.service";

class TaskController {
  async create(req: Request, res: Response) {
    const { body } = req;
    await taskService.create(body);
    res.status(201).end();
  }
}

export const taskController = new TaskController();
