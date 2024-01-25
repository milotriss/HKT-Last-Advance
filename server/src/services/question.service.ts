import QuestionRepository from "../repositories/question.repositories";
import { IQuestion } from "../types/index.type";

class QuestionService {
  private questionRepository: QuestionRepository;
  constructor() {
    this.questionRepository = new QuestionRepository();
  }
  async getAllQuestions(
    categoryId:any,
    level:any,
    limit:any
  ): Promise<IQuestion[]> {
    return await this.questionRepository.getAllQuestions(
      categoryId,
      level,
      limit
    );
  }
  async getOneQuestion(id: number): Promise<IQuestion> {
    return await this.questionRepository.getOneQuestion(id);
  }
  async getOneQuestionAnswers(id: number): Promise<IQuestion> {
    return await this.questionRepository.getOneQuestionAnswers(id);
  }
  async createQuestion(data: IQuestion): Promise<void> {
    await this.questionRepository.createQuestion(data);
  }
}

export default QuestionService;
