import { Injectable, Inject } from '@nestjs/common';
import { IUserRepository } from 'src/domain/repositories/IUserRepository';

@Injectable()
export default class GetAllUserUseCase {
	constructor(
		@Inject('USER_REPOSITORY')
		private readonly userRepository: IUserRepository,
	) {}

	async execute() {
		const users = await this.userRepository.findAll();
		return users;
	}
}
