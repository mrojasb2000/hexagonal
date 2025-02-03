import { Student } from "../../../domain/model/Student";

export interface StudentPersistencePort {
  findById(id: string): Student;
  findAll(): Student[];
  save(student: Student): Student;
  update(student: Student): Student;
  delete(id: string): void;
}
