"use client";

import { Task } from "@/app/core/domain/Task";

export default function TasksList({ tasks }: { tasks: Task[] }) {
  return (
    <ul>
      {tasks.length > 0 ? (
        tasks.map((task) => <li key={task._id}>{task.title}</li>)
      ) : (
        <p>No tasks found</p>
      )}
    </ul>
  );
}
