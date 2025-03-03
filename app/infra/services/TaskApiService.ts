import { TaskRepository } from "@/app/core/interfaces/repositories/TaskRepository";
import { handleApiCall } from "../middleware/ApiErrorHandler";
import api from "../api";
import { Task } from "@/app/core/domain/Task";

export class TaskApiService implements TaskRepository {
  async getTasksByProject(projectId: string) {
    const response = await handleApiCall(
      api.get(`/tasks?project=${projectId}`)
    );
    return response.data.data as Task[];
  }
}
