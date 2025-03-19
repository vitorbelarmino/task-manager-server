import { Request, Response } from "express";
import { taskService } from "./Task.service";

class TaskController {
  async create(req: Request, res: Response) {
    const { body } = req;
    await taskService.create(body);
    res.status(201).end();
  }

  async getAllByUser(req: Request, res: Response) {
    const { id } = req.params;
    const tasks = await taskService.getAllByUser(id);
    res.status(200).json(tasks);
  }
}

export const taskController = new TaskController();
