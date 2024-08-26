import DatabaseConnection from "./DatabaseConnection";
import Grade from "./Grade";
import GradeRepository from "./GradeRepository";

export default class GradeRepositoryDatabase implements GradeRepository {

	constructor (readonly databaseConnection: DatabaseConnection) {
	}

	async getGradesByStudentId(studentId: number): Promise<Grade[]> {
		const gradesData = await this.databaseConnection.query("select * from branas.grade where student_id = $1", [studentId]);
		const grades = [];
		for (const gradeData of gradesData) {
			grades.push(new Grade(gradeData.student_id, gradeData.exam, parseFloat(gradeData.value)));
		}
		return grades;
	}

}
