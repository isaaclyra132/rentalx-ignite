import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

// DTO -> Data Transfer Object
// singleton


class CategoriesRepository implements ICategoriesRepository {
    

    async create({name, description}: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            description,
            name,
        })

        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }

    async findByName(name: string): Promise<Category> {
        // Select * from categories where name = "name" limit 1
        const category = await this.repository.findOne({ name });
        return category;
    }
}

export { CategoriesRepository };