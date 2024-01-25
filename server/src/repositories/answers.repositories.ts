import Answer from "../models/answer.model";

class AnswerRepository {
    async createAnswer(data:any) {
        Answer.create(data);
    }
}
export default AnswerRepository;