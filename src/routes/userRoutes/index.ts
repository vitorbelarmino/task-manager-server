import { Router } from "express";
import { userController } from "../../modules/User/User.controller";

const userRoutes = Router();
userRoutes.get("/create", userController.create);

export { userRoutes };
