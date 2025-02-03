export class ErrorResponse {
  constructor(
    public code: string,
    public message: string,
    public details: string[],
    public timestamp: number
  ) {}
}
