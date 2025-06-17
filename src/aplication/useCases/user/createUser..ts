
import { CreateUserDTO } from 'src/aplication/dtos/user/create.dto';
import { User } from 'src/domain/entities/user.entities';
import { IUserRepositorie } from 'src/domain/repositories/IUserRepositorie';

export class CreateUser {
  constructor(private readonly repositorie: IUserRepositorie) {}

  public async create(data: CreateUserDTO): Promise<void> {
    const usuario = new User(data.name, data.email, data.surname);

    await this.repositorie.create(usuario);
  }
}
