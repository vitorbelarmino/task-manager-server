import prisma from "../../../prisma/script";
import { CustomError } from "../../Utils/CustomError";
import { CreateTaskDTO } from "./dto/createTaskDTO";

class TaskService {
  async create(taskData: CreateTaskDTO) {
    const user = await prisma.user.findUnique({
      where: {
        id: taskData.userId,
      },
    });

    if (!user) {
      throw new CustomError(404, "User not found");
    }

    await prisma.task.create({
      data: {
        userId: taskData.userId,
        title: taskData.title,
        description: taskData.description,
        status: "Pendente",
      },
    });
  }
}

export const taskService = new TaskService();
