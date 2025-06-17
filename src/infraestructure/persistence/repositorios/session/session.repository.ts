// implementamos la interfaz ISessionRepository, la cual tendra metodos que conectaran con la base de datos
// la conexion con la base de datos se encuentra en una capa exterior de la interfaz

// implementamos la interfaz IUserRepository, la cual tendra metodos que conectaran con la base de datos,
// la conexion con la base de datos se encuentra en una capa exterior de la interfaz,

import { Injectable } from "@nestjs/common";
import { SessionEntity } from "src/domain/entities/session.entities";
import { ISessionRepositorie } from "src/domain/repositories/ISessionRespositorie";

@Injectable();
export class SessionRepositorie implements ISessionRepositorie {
    register(SessionEntity: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getUserByEmail(email: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    upDateToken(data: SessionEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    // en el constructor tiene que estar el injectado el servicio de de la persistencia, sea typeOrm, prisma, etc. que va a 
    // implementar la interfaz de la persistencia
    
}