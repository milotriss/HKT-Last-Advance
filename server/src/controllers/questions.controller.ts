import express from "express";
import QuestionService from "../services/question.service";
import { IQuestion } from "../types/index.type";
const questionController = express.Router();
const questionService = new QuestionService()
questionController
.get('/',async (req:express.Request, res:express.Response) => {
    try {
        const categoryId:any = Number(req.query.category)
        const level:any = Number(req.query.level) 
        const limit:any = Number(req.query.limit) 
        const data = await questionService.getAllQuestions(categoryId,level,limit);
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ message: "Get all questions" });
      }
})
.get('/:id', async (req:express.Request,res:express.Response) => {
    try {
        const id = +req.params.id;
        const data = await questionService.getOneQuestion(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Get one question" });
    }
})
.get('/:id/answers', async (req:express.Request, res:express.Response)=> {
    try {
        const id = +req.params.id;
        const data = await questionService.getOneQuestionAnswers(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Get one question answers" });
    }
})
.post('/', async (req:express.Request, res:express.Response) => {
    try {
        const data:IQuestion = {
            categoryId:req.body.categoryId,
            content:req.body.content,
            level:Number(req.body.level),
        } 
        await questionService.createQuestion(data);
        res.status(201).json('Created successfully');
    } catch (error) {
        res.status(500).json({ message: "Create questions" });
    }
})



export default questionController;