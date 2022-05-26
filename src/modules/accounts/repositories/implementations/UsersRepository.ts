import { PrismaClient } from "@prisma/client";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

const prisma = new PrismaClient();

class UsersRepository implements IUsersRepository {
    async create({ name, username, email, password, driver_license }: ICreateUserDTO): Promise<void> {
        await prisma.users.create({
            data: {
                name,
                username,
                email,
                password,
                driver_license
            }
        })
    }
}

export { UsersRepository };