import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { IUserRepository } from 'src/domain/repositories/IUserRepository';
import { User } from 'src/domain/entities/user.entity';

@Injectable()
export class InMemoryUserRepository extends BaseRepository<User> implements IUserRepository {
	private users: Map<string, User> = new Map();

	findById(id: string): Promise<User | null> {
		const userData = this.users.get(id);
		return Promise.resolve(userData || null);
	}

	save(user: User): Promise<void> {
		this.users.set(user.getId(), user);
		return Promise.resolve();
	}

	delete(id: string): Promise<void> {
		this.users.delete(id);
		return Promise.resolve();
	}

	findAll(): Promise<User[]> {
		return Promise.resolve([]);
	}

	findByEmail(email: string): Promise<User | null> {
		const userData = Array.from(this.users.values()).find(data => data.getEmail() === email.toLowerCase());
		return Promise.resolve(userData || null);
	}

	findActiveUsers(): Promise<User[]> {
		const usersData = Array.from(this.users.values());
		const activeUsersData = usersData.filter(data => data.getIsActive());
		return Promise.resolve(activeUsersData);
	}
}
