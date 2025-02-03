export interface StudentNotFoundError extends Error {
  name: "StudentNotFoundError";
  id: string;
}
