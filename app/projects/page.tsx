import { Suspense } from "react";
import ProjectsList from "./(ui)/ProjectsList";
import { fetchProjectsUseCase } from "../infra/container";

export default async function ProjectsPage() {
  const projects = await fetchProjectsUseCase.execute();

  return (
    <div>
      <h2>Projects</h2>
      <Suspense fallback={<p>Loading projects...</p>}>
        <ProjectsList projects={projects} />
      </Suspense>
    </div>
  );
}
