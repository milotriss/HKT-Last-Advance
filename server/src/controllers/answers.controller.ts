import express from 'express';
import { IAnswer } from '../types/index.type';
import AnswerService from '../services/answers.service';
const answerController = express.Router();
const answerService = new AnswerService()
answerController
.post('/', async (req:express.Request, res:express.Response) => {
    try {
        const data:IAnswer = {
            questionId: req.body.questionId,
            isAnswer: req.body.isAnswer,
            content: req.body.content,
        } 
        await answerService.createAnswer(data);
        res.status(201).json('Created successfully');
    } catch (error) {
        res.status(500).json({ message: "Create answers" });
    }
})
export default answerController;