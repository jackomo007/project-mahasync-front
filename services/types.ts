export interface Project {
  _id: string;
  name: string;
  description?: string;
  createdAt?: string;
}

export interface Task {
  _id: string;
  title: string;
  description?: string;
  dueDate?: string;
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  projectId: string;
}
