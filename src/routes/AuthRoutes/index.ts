import { Router } from "express";
import { AuthMiddleware } from "../../middlewares/AuthMiddleware";
import { authController } from "../../modules/Auth/Auth.controller";

const authRoutes = Router();
authRoutes
  .post("/login", AuthMiddleware.authValidation, authController.login)
  .post("/register", AuthMiddleware.authValidation, authController.register)
  .get("/claim", authController.claimUser);
export { authRoutes };
