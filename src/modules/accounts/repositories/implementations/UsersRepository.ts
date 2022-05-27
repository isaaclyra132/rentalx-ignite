import { PrismaClient } from "@prisma/client";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

const prisma = new PrismaClient();

class UsersRepository implements IUsersRepository {
    async create({ name, email, password, driver_license }: ICreateUserDTO): Promise<void> {
        await prisma.users.create({
            data: {
                name,
                email,
                password,
                driver_license
            }
        })
    }

    async findByEmail(email: string): Promise<User> {
        const user = await prisma.users.findUnique({
            where: {
                email
            }
        });
        return user;
    }
}

export { UsersRepository };