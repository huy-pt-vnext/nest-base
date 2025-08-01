export abstract class BaseEntity {
	private id: string;
	private createdAt: Date;
	private updatedAt: Date;

	protected constructor(id: string, createdAt?: Date, updatedAt?: Date) {
		this.id = id;
		this.createdAt = createdAt || new Date();
		this.updatedAt = updatedAt || new Date();
	}

	public equals(entity: BaseEntity): boolean {
		return this.id === entity.id;
	}

	getId(): string {
		return this.id;
	}

	setId(id: string): void {
		this.id = id;
	}
	getCreatedAt(): Date {
		return this.createdAt;
	}

	setCreatedAt(createdAt: Date): void {
		this.createdAt = createdAt;
	}

	getUpdatedAt(): Date {
		return this.updatedAt;
	}

	setUpdatedAt(updatedAt: Date): void {
		this.updatedAt = updatedAt;
	}
}
