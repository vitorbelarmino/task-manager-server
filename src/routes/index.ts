import { Router } from "express";
import { userRoutes } from "./userRoutes";
import { authRoutes } from "./AuthRoutes";
import { taskRoutes } from "./TaskRoutes";

const routes = Router();
routes.use("/user", userRoutes);
routes.use("/auth", authRoutes);
routes.use("/task", taskRoutes);

export { routes };
