enum TaskStatus {
  PEDING = "Pendente",
  DONE = "Concluído",
}

export interface CreateTaskDTO {
  userId: string;
  title: string;
  description: string;
}

export interface UpdateTaskDTO {
  title: string;
  description: string;
  status: TaskStatus;
}
