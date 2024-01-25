import Answer from "../models/answer.model";
import Question from "../models/question.model";
import { IQuestion } from "../types/index.type";

class QuestionRepository {
  async getAllQuestions(
    categoryId: any,
    level: any,
    limit: any
  ): Promise<any> {
    if (categoryId && level && limit) {
        
        return await Question.findAll({
            where:{
                categoryId: categoryId,
                level:level
            },
            limit
        });
    }else {
        return await Question.findAll();
    }
  }
  async getOneQuestion(id: number): Promise<any> {
    return await Question.findByPk(id);
  }
  async getOneQuestionAnswers(id: number): Promise<any> {
    const result = await Question.findAll({
      where: { id },
      include: {
        model: Answer,
      },
    });
    return result;
  }
  async createQuestion(data: any): Promise<void> {
    await Question.create(data);
  }
}

export default QuestionRepository;
