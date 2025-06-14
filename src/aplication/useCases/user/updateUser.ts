import { IUserRepositorie } from 'src/domain/repositories/IUserRepositorie';

export class UpdateUser {
  constructor(private readonly repositorie: IUserRepositorie) {
  }
}
