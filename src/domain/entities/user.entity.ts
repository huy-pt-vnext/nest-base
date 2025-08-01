import { BaseEntity } from './base.entity';

export class User extends BaseEntity {
	private name: string;
	private email: string;
	private password: string;
	private isActive: boolean;

	constructor(id: string, name: string, email: string, password: string, isActive = true, createdAt?: Date, updatedAt?: Date) {
		super(id, createdAt, updatedAt);
		this.name = name;
		this.email = email;
		this.password = password;
		this.isActive = isActive;
	}

	static create(id: string, name: string, email: string, password: string): User {
		return new User(id, name, email, password);
	}

	public getName(): string {
		return this.name;
	}

	public setName(name: string): void {
		this.name = name;
	}

	public getEmail(): string {
		return this.email;
	}

	public setEmail(email: string): void {
		this.email = email;
	}

	public getIsActive(): boolean {
		return this.isActive;
	}

	public setIsActive(isActive: boolean): void {
		this.isActive = isActive;
	}

	public getPassword(): string {
		return this.password;
	}

	public setPassword(password: string): void {
		this.password = password;
	}
}
