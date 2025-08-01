import { Injectable, Inject, ConflictException, InternalServerErrorException, HttpException } from '@nestjs/common';
import { IUserRepository } from 'src/domain/repositories/IUserRepository';
import { CreateUserInputs } from 'src/presentation/validator/user/createUserSchema';
import { User } from 'src/domain/entities/user.entity';

@Injectable()
export class CreateUserUseCase {
	constructor(
		@Inject('USER_REPOSITORY')
		private readonly userRepository: IUserRepository,
	) {}

	async execute(request: CreateUserInputs) {
		try {
			const existingUser = await this.userRepository.findByEmail(request.email);
			if (existingUser) {
				throw new ConflictException('User with this email already exists');
			}

			const user = User.create('id', request.name, request.email, request.password);

			await this.userRepository.save(user);

			const response = {
				id: user.getId(),
				name: user.getName(),
				email: user.getEmail(),
				isActive: user.getIsActive(),
				createdAt: user.getCreatedAt(),
			};

			return response;
		} catch (error) {
			if (error instanceof HttpException) {
				throw error;
			}
			console.error('Unexpected error in CreateUserUseCase:', error);
			throw new InternalServerErrorException('Failed to create user');
		}
	}
}
