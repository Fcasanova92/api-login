import { Module } from "@nestjs/common";
import { SessionController } from "../controladores/auth/session.controller";
import { ISessionRepositoryToken } from "src/domain/repositories/ISessionRespositorie";
import { SessionRepositorie } from "src/infraestructure/persistence/repositorios/session/session.repository";

@Module(
    {
        controllers: [SessionController],
        providers: [
                {
            provide: ISessionRepositoryToken,
            useClass: SessionRepositorie,
            },
        ],
    }
)

export class UserModel{};
