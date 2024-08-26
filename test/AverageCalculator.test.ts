import AverageCalculator, { AverageCalculatorA } from "../src/AverageCalculator";
import Grade from "../src/Grade";

test("Deve calcular a média com o algoritmo A", function () {
	const grades = [];
	grades.push(new Grade(1, "P1", 10));
	grades.push(new Grade(2, "P2", 9));
	grades.push(new Grade(3, "P3", 8));
	const averageCalculator = new AverageCalculatorA();
	const value = averageCalculator.calculate(grades);
	expect(value).toBe(9);
});
