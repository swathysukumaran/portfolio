const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export type Project = {
  _id: string;
  name: string;
  tech?: string[];
  description?: string;
  imageKey?: string;
  link?: string;
  repo?: string;
  caseStudyPath?: string;
  inProgress?: boolean;
  order?: number;
};

export type Experience = {
  _id: string;
  company: string;
  role: string;
  period?: string;
  description?: string;
};

export type Message = {
  _id: string;
  name: string;
  email: string;
  message: string;
  read: boolean;
  createdAt: string;
};

export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(`${BASE_URL}/api/projects`);
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

export async function fetchExperiences(): Promise<Experience[]> {
  const res = await fetch(`${BASE_URL}/api/experiences`);
  if (!res.ok) throw new Error("Failed to fetch experiences");
  return res.json();
}

export async function submitContact(data: {
  name: string;
  email: string;
  message: string;
}): Promise<void> {
  const res = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to send message");
}

export async function fetchMessages(adminKey: string): Promise<Message[]> {
  const res = await fetch(`${BASE_URL}/api/admin/messages`, {
    headers: { "x-admin-key": adminKey },
  });
  if (res.status === 401) throw new Error("Unauthorized");
  if (!res.ok) throw new Error("Failed to fetch messages");
  return res.json();
}

export async function markMessageRead(
  id: string,
  adminKey: string
): Promise<Message> {
  const res = await fetch(`${BASE_URL}/api/admin/messages/${id}/read`, {
    method: "PATCH",
    headers: { "x-admin-key": adminKey },
  });
  if (!res.ok) throw new Error("Failed to update message");
  return res.json();
}

export async function deleteMessage(
  id: string,
  adminKey: string
): Promise<void> {
  const res = await fetch(`${BASE_URL}/api/admin/messages/${id}`, {
    method: "DELETE",
    headers: { "x-admin-key": adminKey },
  });
  if (!res.ok) throw new Error("Failed to delete message");
}
