import { Router } from "express";
import { userController } from "../../modules/User/User.controller";
import { UserMiddleware } from "../../middlewares/userMiddleware";

const userRoutes = Router();
userRoutes.get("/create", UserMiddleware.create, userController.create);

export { userRoutes };
