import { User } from '../entities/user.entities';
export interface IUserRepositorie {
  create(user: User): Promise<void>;

  update(user:User) : Promise<void>;

  readByEmail(email: string): Promise<void>;

  readById(id: string): Promise<void>;
}
