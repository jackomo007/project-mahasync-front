import { cache } from "react";
import { ProjectRepository } from "../interfaces/repositories/ProjectRepository";

export class FetchProjectsUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  execute = cache(async () => {
    return this.projectRepository.getProjects();
  });
}
