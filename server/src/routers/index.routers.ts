 import {Express} from 'express';
import categoryController from '../controllers/categories.controller';
import questionController from '../controllers/questions.controller';
import answerController from '../controllers/answers.controller';
const Router = (server:Express) => {
    server.use('/api/v1/categories',categoryController)
    server.use('/api/v1/questions',questionController)
    server.use('/api/v1/answers',answerController)
}

export default Router;