import { SessionEntity } from '../entities/session.entities';

export const ISessionRepositoryToken = Symbol('ISessionRepository');

export interface ISessionRepositorie {

  register(SessionEntity):Promise<void>;

  getUserByEmail(email: string): Promise<void>;

  upDateToken(data: SessionEntity): Promise<void>;
}
