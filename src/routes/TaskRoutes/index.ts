import { Router } from "express";
import { TaskMiddleware } from "../../middlewares/TaskMiddleware";
import { taskController } from "../../modules/Task/Task.controller";

export const taskRoutes = Router();
taskRoutes
  .post("/create", TaskMiddleware.create, taskController.create)
  .get("/user/:id", TaskMiddleware.authenticateUser, taskController.getAllByUser)
  .put("/update/:id", TaskMiddleware.update, taskController.update)
  .delete("/delete/:id", TaskMiddleware.authenticateUser, taskController.delete);
