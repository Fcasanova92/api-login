import { RegisterDTO } from 'src/aplication/dtos/auth/register.dto';
import { User } from 'src/domain/entities/user.entities';
import { IUserRepositorie } from 'src/domain/repositories/IUserRepositorie';

export class CreateUser {
  constructor(private readonly repositorie: IUserRepositorie) {}

  public async create(data: RegisterDTO): Promise<void> {
    const usuario = new User(data.name, data.email, data.surname);

    await this.repositorie.create(usuario);
  }
}
