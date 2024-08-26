import AverageCalculator from "./AverageCalculator";
import Grade from "./Grade";

export default class AverageCalculator1 implements AverageCalculator {

	calculate(grades: Grade[]): number {
		if (grades.length === 0) return 0;
		let average = 0;
		for (const grade of grades) {
			average += grade.value;
		}
		return average/grades.length;
	}

}
