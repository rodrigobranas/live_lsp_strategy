import Grade from "./Grade";

export default interface AverageCalculator {
	calculate (grades: Grade[]): number;
}

export class AverageCalculatorA implements AverageCalculator {

	calculate (grades: Grade[]) {
		if (grades.length === 0) return 0;
		let total = 0;
		for (const grade of grades) {
			if (grade.value > 10) throw new Error("Invalid grade");
			total += grade.value;
		}
		return total/grades.length;
	}
}

export class AverageCalculatorB implements AverageCalculator {

	calculate (grades: Grade[]) {
		if (grades.length === 0) return 0;
		grades.sort((a, b) => {
			return b.value - a.value;
		});
		grades.splice(0, 1);
		grades.splice(grades.length - 1, 1);
		let total = 0;
		for (const grade of grades) {
			if (grade.value > 10) throw new Error("Invalid grade");
			total += grade.value;
		}
		return total/grades.length;
	}
}

export class AverageCalculatorC implements AverageCalculator {

	calculate (grades: Grade[]) {
		if (grades.length === 0) return 0;
		let total = 0;
		for (const grade of grades) {
			if (grade.value > 6) throw new Error("Invalid grade");
			total += grade.value;
		}
		return total/grades.length;
	}
}

export class AverageCalculatorD implements AverageCalculator {

	calculate (grades: Grade[]) {
		return Math.random() * 10;
	}
}
