export interface OperationUnavailableError extends Error {
  name: "OperationUnavailableError";
  info: string[];
}
