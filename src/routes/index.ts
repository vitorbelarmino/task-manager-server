import { Router } from "express";
import { userRoutes } from "./userRoutes";
import { authRoutes } from "./AuthRoutes";

const routes = Router();
routes.use("/user", userRoutes);
routes.use("/auth", authRoutes);

export { routes };
