import { Request, Response } from "express";
import { authService } from "./Auth.service";
import { Token } from "../../Utils/Token";

class AuthController {
  async login(req: Request, res: Response) {
    const { body } = req;
    const token = await authService.login(body);
    res.status(200).json({ token });
  }

  async register(req: Request, res: Response) {
    const { body } = req;
    const token = await authService.register(body);
    res.status(201).json({ token });
  }

  async claimUser(req: Request, res: Response) {
    const userId = await Token.validateToken(req);
    await authService.claimUser(userId);
    res.status(200).json({ userId });
  }
}

export const authController = new AuthController();
