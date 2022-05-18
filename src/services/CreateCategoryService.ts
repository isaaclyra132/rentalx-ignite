import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

/**
 * [x] - Definir o tipo de retorno
 * [x] - Alterar o retorno de erro
 * [x] - Acessar o repositório
 * [x] - Retornar algo
 */

class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({ description, name }: IRequest) {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already exists!");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };