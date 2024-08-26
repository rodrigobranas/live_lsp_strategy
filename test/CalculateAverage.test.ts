import { AverageRepositoryDatabase } from "../src/AverageRepository";
import CalculateAverage from "../src/CalculateAverage";
import GetAverage from "../src/GetAverage";
import { GradeRepositoryDatabase } from "../src/GradeRepository";

test("Devecalcular a média do aluno com 5 avaliações", async function () {
	// faz a média aritmética simples
	// exclui a nota mais baixa e a mais alta, fazendo a média do restante
	// arredonda para 6 caso a média esteja entre 5,75 e 5,99
	const studentId = 2410001;
	const gradeRepository = new GradeRepositoryDatabase();
	const averageRepository = new AverageRepositoryDatabase();
	const calculateAverage = new CalculateAverage(gradeRepository, averageRepository);
	await calculateAverage.execute(studentId);
	const getAverage = new GetAverage(averageRepository);
	const output = await getAverage.execute(studentId);
	expect(output.average).toBe(8);
});

test("Deve calcular a média do aluno sem avaliações", async function () {
	// faz a média aritmética simples
	// exclui a nota mais baixa e a mais alta, fazendo a média do restante
	// arredonda para 6 caso a média esteja entre 5,75 e 5,99
	const studentId = 2410002;
	const gradeRepository = new GradeRepositoryDatabase();
	const averageRepository = new AverageRepositoryDatabase();
	const calculateAverage = new CalculateAverage(gradeRepository, averageRepository);
	await calculateAverage.execute(studentId);
	const getAverage = new GetAverage(averageRepository);
	const output = await getAverage.execute(studentId);
	expect(output.average).toBe(0);
});
