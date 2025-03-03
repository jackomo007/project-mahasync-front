import { Suspense } from "react";
import TasksList from "@/app/projects/(ui)/TaskList";
import { fetchTasksUseCase } from "@/app/infra/container";

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const tasks = await fetchTasksUseCase.execute(params.id);

  return (
    <div>
      <h2>Tasks</h2>
      <Suspense fallback={<p>Loading tasks...</p>}>
        <TasksList tasks={tasks} />
      </Suspense>
    </div>
  );
}
