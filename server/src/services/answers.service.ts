import AnswerRepository from "../repositories/answers.repositories";
import { IAnswer } from "../types/index.type";

class AnswerService {
    private answerRepository: AnswerRepository;
    constructor() {
        this.answerRepository = new AnswerRepository();
    }
    async createAnswer(data: IAnswer): Promise<void> {
        await this.answerRepository.createAnswer(data);
    }
}


export default AnswerService;