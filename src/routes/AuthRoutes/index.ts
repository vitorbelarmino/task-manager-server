import { Router } from "express";
import { AuthMiddleware } from "../../middlewares/AuthMiddleware";
import { authController } from "../../modules/Auth/Auth.controller";

const authRoutes = Router();
authRoutes.post("/login", AuthMiddleware.login, authController.login);
export { authRoutes };
