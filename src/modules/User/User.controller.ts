import { Request, Response } from "express";
import { userService } from "./User.service";

class UserController {
  async create(req: Request, res: Response) {
    const { body } = req;
    await userService.createUser(body);
    res.status(201).end();
  }
}

export const userController = new UserController();
