export interface Project {
  _id: string;
  name: string;
  description: string;
  status: "active" | "completed" | "pending";
}
