import { User } from '../entities/user.entity';
import { Repository } from './base.repository';

export interface IUserRepository extends Repository<User> {
	findByEmail(email: string): Promise<User | null>;
	findActiveUsers(): Promise<User[]>;
}
