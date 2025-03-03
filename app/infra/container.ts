import { FetchProjectsUseCase } from "../core/usecases/FetchProjectsUseCase";
import { FetchTasksUseCase } from "../core/usecases/FetchTasksUseCase";
import { ProjectApiService } from "./services/ProjectApiService";
import { TaskApiService } from "./services/TaskApiService";

const taskRepository = new TaskApiService();
export const fetchTasksUseCase = new FetchTasksUseCase(taskRepository);

const projectRepository = new ProjectApiService();
export const fetchProjectsUseCase = new FetchProjectsUseCase(projectRepository);
