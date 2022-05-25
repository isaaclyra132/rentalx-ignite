import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";
import { PrismaClient } from "@prisma/client";
// DTO -> Data Transfer Object
// singleton
const prisma = new PrismaClient();

class CategoriesRepository implements ICategoriesRepository {
    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        await prisma.categories.create({
            data: {
                name,
                description,
            }
        })
        // const category = this.repository.create({
        //     description,
        //     name,
        // })

        // await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        // const categories = await this.repository.find();
        // return categories;
        const categories = await prisma.categories.findMany();
        return categories;
    }

    async findByName(name: string): Promise<Category> {
        // Select * from categories where name = "name" limit 1
        // const category = await this.repository.findOne({ name });
        // return category;
        const category = await prisma.categories.findUnique({
            where: {
                name
            }
        });
        return category;
    }
}

export { CategoriesRepository };