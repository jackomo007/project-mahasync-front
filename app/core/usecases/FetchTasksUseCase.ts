import { cache } from "react";
import { TaskRepository } from "../interfaces/repositories/TaskRepository";

export class FetchTasksUseCase {
  constructor(private taskRepository: TaskRepository) {}

  execute = cache(async (projectId: string) => {
    return this.taskRepository.getTasksByProject(projectId);
  });
}
