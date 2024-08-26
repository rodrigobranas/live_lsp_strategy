import Average from "./Average";
import AverageRepository from "./AverageRepository";
import DatabaseConnection from "./DatabaseConnection";

export default class AverageRepositoryDatabase implements AverageRepository {

	constructor (readonly databaseConnection: DatabaseConnection) {
	}

	async save(average: Average): Promise<void> {
		await this.databaseConnection.query("insert into branas.average (student_id, value) values ($1, $2)", [average.studentId, average.value]);
	}

	async getAverageByStudentId(studentId: number): Promise<Average> {
		const [averageData] = await this.databaseConnection.query("select * from branas.average where student_id = $1", [studentId]);
		return new Average(averageData.student_id, parseFloat(averageData.value));
	}

	async deleteAverageByStudentId(studentId: number): Promise<void> {
		await this.databaseConnection.query("delete from branas.average where student_id = $1", [studentId]);
	}
}
