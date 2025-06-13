import { User } from "../entities/user.entities";

/* eslint-disable prettier/prettier */
export interface IUserRepositorie {
  create(user: User): void;

  update(user:User) : void;

  readByEmail(email: string): void;

  readById(id: string): void;
}
