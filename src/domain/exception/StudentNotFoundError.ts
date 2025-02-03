import { StudentNotFoundError } from "./interfaces/StudentNotFoundError.interface";

export function StudentNotFoundError(message: string) {
  const error = new Error(message) as StudentNotFoundError;
  error.name = "StudentNotFoundError";
  return error;
}
