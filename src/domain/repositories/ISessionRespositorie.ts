import { SessionEntity } from '../entities/session.entities';

export interface ISessionRepositorie {

  getUserByEmail(email: string): void;

  upDateToken(data: SessionEntity): void;
}
