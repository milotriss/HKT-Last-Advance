import Answer from "./answer.model";
import Category from "./category.model";
import Question from "./question.model";

const createTable = () => {
    Category.sync().then(() => console.log('Created table Categories'))
    Question.sync().then(() => console.log('Created table Questions'))
    Answer.sync().then(() => console.log('Created table Answers'))
}
export default createTable;