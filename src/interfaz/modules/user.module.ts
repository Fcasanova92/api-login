import { Module } from "@nestjs/common";
import { CreateUser } from "src/aplication/useCases/user/createUser.";
import { IUserRepositorieToken } from "src/domain/repositories/IUserRepositorie";
import { UserRepositorie } from "src/infraestructure/persistence/repositorios/user/user.repository";
import { UserController } from "../controladores/user/user.controller";

@Module(
    {
        controllers: [UserController],
        providers: [
            CreateUser,
                {
            provide: IUserRepositorieToken,
            useClass: UserRepositorie,
            },
        ],
        exports: [IUserRepositorieToken]
    }
)

export class UserModel{};
