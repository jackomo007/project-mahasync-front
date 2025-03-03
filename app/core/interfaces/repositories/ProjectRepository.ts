import { Project } from "../../domain/Project";

export interface ProjectRepository {
  getProjects(): Promise<Project[]>;
}
