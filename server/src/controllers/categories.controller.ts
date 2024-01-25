import express from "express";
import CategoryService from "../services/categories.service";
import { ICategory } from "../types/index.type";
const categoryController = express.Router();
const categoryService = new CategoryService();
categoryController
  .get("/", async (req: express.Request, res: express.Response) => {
    try {
      const data = await categoryService.getAllCategories();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Get all categories" });
    }
  })
  .get("/:id", async (req: express.Request, res: express.Response) => {
    try {
      const id = +req.params.id;
      const data = await categoryService.getCategoryById(id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Get one categories" });
    }
  })
  .post("/", async (req: express.Request, res: express.Response) => {
    try {
      const data: ICategory = {
        name: req.body.name,
      };
      await categoryService.createCategory(data);
      res.status(201).json("Created success");
    } catch (error) {
      res.status(500).json({ message: "Create categories" });
    }
  });
export default categoryController;
