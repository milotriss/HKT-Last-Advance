import CategoryRepository from "../repositories/categories.repository";
import { ICategory } from "../types/index.type";

class CategoryService{
    private categoryRepository: CategoryRepository;
    constructor(){
        this.categoryRepository = new CategoryRepository();
    }
    async getAllCategories(): Promise<ICategory[]>{
        return await this.categoryRepository.getAllCategories();
    }
    async getCategoryById(id:number): Promise<ICategory[]>{
        return await this.categoryRepository.getCategoryById(id);
    }
    async createCategory(data:ICategory): Promise<void>{
        await this.categoryRepository.createCategory(data);
    }
}


export default CategoryService;