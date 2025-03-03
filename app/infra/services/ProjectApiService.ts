import { ProjectRepository } from "@/app/core/interfaces/repositories/ProjectRepository";
import api from "../api";
import { Project } from "@/app/core/domain/Project";
import { handleApiCall } from "../middleware/ApiErrorHandler";

export class ProjectApiService implements ProjectRepository {
  async getProjects() {
    const response = await handleApiCall(api.get(`/projects`));
    return response.data.data as Project[];
  }
}
