import Category from "../models/category.model";

class CategoryRepository {
    async getAllCategories(): Promise<any> {
      return await Category.findAll()
    }
    async getCategoryById(id:number): Promise<any> {
        return await Category.findAll({where:{id}})
    }
    async createCategory(data:any): Promise<void> {
        await Category.create(data)
    }
}

export default CategoryRepository;