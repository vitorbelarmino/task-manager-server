import { Request, Response } from "express";
import { authService } from "./Auth.service";

class AuthController {
  async login(req: Request, res: Response) {
    const { body } = req;
    const token = await authService.login(body);
    res.status(200).json({ token });
  }
}

export const authController = new AuthController();
