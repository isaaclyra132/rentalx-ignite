import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class SpecificationsRepository implements ISpecificationsRepository {
    async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
        // const specification = new Specification();

        // Object.assign(specification, {
        //     name,
        //     description,
        //     created_at: new Date(),
        // });

        // this.specifications.push(specification);
        await prisma.specifications.create({
            data: {
                name,
                description
            }
        })
    }

    async findByName(name: string): Promise<Specification> {
        // const specification = this.specifications.find((specification) => specification.name === name);
        // return specification;
        return await prisma.specifications.findUnique({
            where: {
                name
            }
        })
    }
}

export { SpecificationsRepository };