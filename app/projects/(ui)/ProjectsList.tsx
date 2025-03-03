import { Project } from "@/app/core/domain/Project";
import Link from "next/link";

export default function ProjectsList({ projects }: { projects: Project[] }) {
  return (
    <ul>
      {projects.length > 0 ? (
        projects.map((project: Project) => (
          <li key={project._id}>
            <Link href={`/projects/${project._id}`}>{project.name}</Link>
          </li>
        ))
      ) : (
        <p>No projects found</p>
      )}
    </ul>
  );
}
