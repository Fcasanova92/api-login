// implementamos la interfaz IUserRepository, la cual tendra metodos que conectaran con la base de datos,
// la conexion con la base de datos se encuentra en una capa exterior de la interfaz,

import { Injectable } from "@nestjs/common";
import { User } from "src/domain/entities/user.entities";
import { IUserRepositorie } from "src/domain/repositories/IUserRepositorie";

@Injectable();
export class UserRepositorie implements IUserRepositorie {
    // en el constructor tiene que estar el injectado el servicio de de la persistencia, sea typeOrm, prisma, etc.
    constructor()
    async create(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async update(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async readByEmail(email: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async readById(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    
}