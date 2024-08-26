import Average from "./Average";
import AverageRepository from "./AverageRepository";
import GradeRepository from "./GradeRepository";

export default class GetAverage {

	constructor (readonly averageRepository: AverageRepository) {
	}

	async execute (studentId: number): Promise<Output> {
		const average = await this.averageRepository.getAverageByStudentId(studentId);
		return {
			value: average.value
		};
	}
}

type Output = {
	value: number
}
