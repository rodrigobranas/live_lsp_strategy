import { AverageCalculatorA, AverageCalculatorB, AverageCalculatorC, AverageCalculatorD } from "../src/AverageCalculator";
import AverageRepositoryDatabase from "../src/AverageRepositoryDatabase";
import CalculateAverage from "../src/CalculateAverage";
import { PgPromiseAdapter } from "../src/DatabaseConnection";
import GetAverage from "../src/GetAverage";
import GradeRepositoryDatabase from "../src/GradeRepositoryDatabase";

test("Deve calcular a média de um aluno com notas", async function () {
	const databaseConnection = new PgPromiseAdapter();
	const gradeRepository = new GradeRepositoryDatabase(databaseConnection);
	const averageRepository = new AverageRepositoryDatabase(databaseConnection);
	const averageCalculator = new AverageCalculatorA();
	const calculateAverage = new CalculateAverage(gradeRepository, averageRepository, averageCalculator);
	const studentId = 2410001;
	await averageRepository.deleteAverageByStudentId(studentId);
	await calculateAverage.execute(studentId);
	const getAverage = new GetAverage(averageRepository);
	const output = await getAverage.execute(studentId);
	expect(output.value).toBe(8);
	await databaseConnection.close();
});

test("Deve calcular a média de um aluno sem notas", async function () {
	const databaseConnection = new PgPromiseAdapter();
	const gradeRepository = new GradeRepositoryDatabase(databaseConnection);
	const averageRepository = new AverageRepositoryDatabase(databaseConnection);
	const averageCalculator = new AverageCalculatorD();
	const calculateAverage = new CalculateAverage(gradeRepository, averageRepository, averageCalculator);
	const studentId = 2410002;
	await averageRepository.deleteAverageByStudentId(studentId);
	await calculateAverage.execute(studentId);
	const getAverage = new GetAverage(averageRepository);
	const output = await getAverage.execute(studentId);
	// uma expectativa foi criada, que é, se a média de um aluno sem notas for calculada ela deve ser ZERO
	expect(output.value).toBe(0);
	await averageRepository.deleteAverageByStudentId(studentId);
	await databaseConnection.close();
});

test("Deve calcular a média de um aluno com notas acima de 10", async function () {
	const databaseConnection = new PgPromiseAdapter();
	const gradeRepository = new GradeRepositoryDatabase(databaseConnection);
	const averageRepository = new AverageRepositoryDatabase(databaseConnection);
	const averageCalculator = new AverageCalculatorA();
	const calculateAverage = new CalculateAverage(gradeRepository, averageRepository, averageCalculator);
	const studentId = 2410003;
	await averageRepository.deleteAverageByStudentId(studentId);
	// uma expectativa foi criada, as notas não podem ser maiores que 10
	await expect(() => calculateAverage.execute(studentId)).rejects.toThrow(new Error("Invalid grade"));
	await databaseConnection.close();
});
