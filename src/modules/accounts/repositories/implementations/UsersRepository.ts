import { PrismaClient } from "@prisma/client";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

const prisma = new PrismaClient();

class UsersRepository implements IUsersRepository {
    async create({ name, email, password, driver_license, avatar, id }: ICreateUserDTO): Promise<void> {
        await prisma.users.create({
            data: {
                name,
                email,
                password,
                driver_license,
                avatar,
                id
            }
        })
    }

    async update(email: string, avatar: string): Promise<void> {
        await prisma.users.update({
            where: {
                email
            },
            data: {
                avatar
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

    async findById(id: string): Promise<User> {
        const user = await prisma.users.findUnique({
            where: {
                id
            }
        })

        return user;
    }
}

export { UsersRepository };