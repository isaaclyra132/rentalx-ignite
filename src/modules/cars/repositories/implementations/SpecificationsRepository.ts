import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class SpecificationsRepository implements ISpecificationsRepository {
    async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
        await prisma.specifications.create({
            data: {
                name,
                description
            }
        })
    }

    async findByName(name: string): Promise<Specification> {
        return await prisma.specifications.findUnique({
            where: {
                name
            }
        })
    }
}

export { SpecificationsRepository };