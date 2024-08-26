import AverageCalculator1 from "./AverageCalculator1";
import Average from "./Average";
import AverageRepository from "./AverageRepository";
import GradeRepository from "./GradeRepository";
import AverageCalculator2 from "./AverageCalculator2";

export default class CalculateAverage {

	constructor (readonly gradeRepository: GradeRepository, readonly averageRepository: AverageRepository) {
	}

	async execute (studentId: number): Promise<void> {
		const grades = await this.gradeRepository.listByStudentId(studentId);
		const averageCalculator = new AverageCalculator1();
		// qual é a expectativa?
		// entra um número de médias, sai um número, esse número deve ser igual ou maior que zero e não pode ser maior que 10
		const value = averageCalculator.calculate(grades);
		const average = new Average(studentId, value);
		await this.averageRepository.save(average);
	}
}