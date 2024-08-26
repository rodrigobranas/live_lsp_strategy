import AverageCalculator from "./AverageCalculator";
import Grade from "./Grade";

export default class AverageCalculator2 implements AverageCalculator {

	calculate(grades: Grade[]): number {
		if (grades.length === 0) return 0;
		grades.sort((a, b) => {
			return b.value - a.value;
		});
		grades.splice(0, 1);
		grades.splice(grades.length - 1, 1);
		let average = 0;
		for (const grade of grades) {
			average += grade.value;
		}
		return average/grades.length;
	}

}
