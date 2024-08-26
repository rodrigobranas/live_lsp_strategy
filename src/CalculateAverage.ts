import Average from "./Average";
import AverageCalculator from "./AverageCalculator";
import AverageRepository from "./AverageRepository";
import GradeRepository from "./GradeRepository";

export default class CalculateAverage {
	constructor (
		readonly gradeRepository: GradeRepository, 
		readonly averageRepository: AverageRepository,
		readonly averageCalculator: AverageCalculator
	) {
	}

	async execute (studentId: number): Promise<void> {
		const grades = await this.gradeRepository.getGradesByStudentId(studentId);
		const value = this.averageCalculator.calculate(grades);
		const average = new Average(studentId, value);
		await this.averageRepository.save(average);
	}
}