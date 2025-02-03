import { Student } from "../../../../../../domain/model/Student";
import { StudentCreateRequest } from "../../model/request/StudentCreateRequest";
import { StudentResponse } from "../../response/StudentResponse";
export interface StudentRestMapper {
  toStudent(request: StudentCreateRequest): Student;
  toStudentResponse(student: Student): StudentResponse;
  toStudentResponseList(students: Student[]): StudentResponse[];
}
