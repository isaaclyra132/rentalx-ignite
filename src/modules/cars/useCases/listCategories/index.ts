import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRespository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRespository);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesController };