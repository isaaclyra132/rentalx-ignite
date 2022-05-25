import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

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

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    async execute({ description, name }: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already exists!");
        }

        await this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };