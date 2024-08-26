import Grade from "./Grade";

export default interface GradeRepository {
	getGradesByStudentId (studentId: number): Promise<Grade[]>;
}
