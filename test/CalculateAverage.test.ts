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

test("Deve calcular a média de um aluno com média entre 5.75 e 6 que deverá ser arredondada para 6", async function () {
	const databaseConnection = new PgPromiseAdapter();
	const gradeRepository = new GradeRepositoryDatabase(databaseConnection);
	const averageRepository = new AverageRepositoryDatabase(databaseConnection);
	const averageCalculator = new AverageCalculatorB();
	const calculateAverage = new CalculateAverage(gradeRepository, averageRepository, averageCalculator);
	const studentId = 2410002;
	await averageRepository.deleteAverageByStudentId(studentId);
	await calculateAverage.execute(studentId);
	const getAverage = new GetAverage(averageRepository);
	const output = await getAverage.execute(studentId);
	expect(output.value).toBe(6);
	await databaseConnection.close();
});

test("Deve calcular a média de um aluno sem notas", async function () {
	const databaseConnection = new PgPromiseAdapter();
	const gradeRepository = new GradeRepositoryDatabase(databaseConnection);
	const averageRepository = new AverageRepositoryDatabase(databaseConnection);
	const averageCalculator = new AverageCalculatorB();
	const calculateAverage = new CalculateAverage(gradeRepository, averageRepository, averageCalculator);
	const studentId = 2410003;
	await averageRepository.deleteAverageByStudentId(studentId);
	await calculateAverage.execute(studentId);
	const getAverage = new GetAverage(averageRepository);
	const output = await getAverage.execute(studentId);
	expect(output.value).toBe(0);
	await databaseConnection.close();
});

test("Deve calcular a média de um aluno com uma nota muito baixa, desconsiderando a nota mais alta e a nota mais baixa", async function () {
	const databaseConnection = new PgPromiseAdapter();
	const gradeRepository = new GradeRepositoryDatabase(databaseConnection);
	const averageRepository = new AverageRepositoryDatabase(databaseConnection);
	const averageCalculator = new AverageCalculatorC();
	const calculateAverage = new CalculateAverage(gradeRepository, averageRepository, averageCalculator);
	const studentId = 2410004;
	await averageRepository.deleteAverageByStudentId(studentId);
	await calculateAverage.execute(studentId);
	const getAverage = new GetAverage(averageRepository);
	const output = await getAverage.execute(studentId);
	expect(output.value).toBe(7.5);
	await databaseConnection.close();
});

test("Deve calcular a média de um aluno com nota maior que 10", async function () {
	const databaseConnection = new PgPromiseAdapter();
	const gradeRepository = new GradeRepositoryDatabase(databaseConnection);
	const averageRepository = new AverageRepositoryDatabase(databaseConnection);
	const averageCalculator = new AverageCalculatorA();
	const calculateAverage = new CalculateAverage(gradeRepository, averageRepository, averageCalculator);
	const studentId = 2410005;
	await averageRepository.deleteAverageByStudentId(studentId);
	await expect(() => calculateAverage.execute(studentId)).rejects.toThrow(new Error("Invalid grade"));
});
