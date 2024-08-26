import Average from "./Average";
import AverageCalculator, { AverageCalculatorA, AverageCalculatorB, AverageCalculatorC, AverageCalculatorD } from "./AverageCalculator";
import AverageRepository from "./AverageRepository";
import GradeRepository from "./GradeRepository";

export default class CalculateAverage {
	// DIP - Adapter
	constructor (readonly gradeRepository: GradeRepository, readonly averageRepository: AverageRepository, readonly averageCalculator: AverageCalculator) {
	}

	async execute (studentId: number): Promise<void> {
		const grades = await this.gradeRepository.getGradesByStudentId(studentId);
		// OCP - Strategy
		const value = this.averageCalculator.calculate(grades);
		const average = new Average(studentId, value);
		await this.averageRepository.save(average);
	}
}