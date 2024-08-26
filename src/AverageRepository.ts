import Average from "./Average";

export default interface AverageRepository {
	save (average: Average): Promise<void>;
	getAverageByStudentId (studentId: number): Promise<Average>;
	deleteAverageByStudentId (studentId: number): Promise<void>;
}
