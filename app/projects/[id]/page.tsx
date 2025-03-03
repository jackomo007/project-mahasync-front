"use client";
import { Suspense, use } from "react";
import TasksList from "@/app/projects/(ui)/TaskList";
import { fetchTasksUseCase } from "@/app/infra/container";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const params = useParams();
  if (params === undefined || params.id === undefined) {
    return <p>Project not informed</p>;
  }
  const tasksList = async () =>
    await fetchTasksUseCase.execute(
      Array.isArray(params.id) ? params.id[0] : params.id || ""
    );

  const tasks = use(tasksList());

  return (
    <div>
      <h2>Tasks</h2>
      <Suspense fallback={<p>Loading tasks...</p>}>
        <TasksList tasks={tasks} />
      </Suspense>
    </div>
  );
}
