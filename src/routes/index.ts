import { Router } from "express";
import { authRoutes } from "./AuthRoutes";
import { taskRoutes } from "./TaskRoutes";

const routes = Router();
routes.get("/", (req, res) => {
  res.send("Hello world!");
});
routes.use("/auth", authRoutes);
routes.use("/task", taskRoutes);

export { routes };
