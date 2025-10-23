import type { ResponseBackend, User } from "../interfaces/backend";

export async function registerUser(data: User) {
  const response = await fetch(import.meta.env.VITE_API_URL + "colmotica/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  });
  const dataResponse: ResponseBackend = await response.json();
  return dataResponse
}