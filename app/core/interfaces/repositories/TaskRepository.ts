import { Task } from "../../domain/Task";

export interface TaskRepository {
  getTasksByProject(projectId: string): Promise<Task[]>;
}
