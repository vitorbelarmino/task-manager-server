import { Request, Response } from "express";
import { authService } from "./Auth.service";
import { Token } from "../../Utils/Token";

class AuthController {
  async login(req: Request, res: Response) {
    const { body } = req;
    const token = await authService.login(body);
    res.status(200).json({ token });
  }

  async claimUser(req: Request, res: Response) {
    const user = await Token.validateToken(req);
    res.status(200).json(user);
  }
}

export const authController = new AuthController();
