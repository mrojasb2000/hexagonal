export class StudentCreateRequest {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly age: number,
    public readonly address: string
  ) {}
}
