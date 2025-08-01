import { Module } from '@nestjs/common';
import { CreateUserUseCase } from 'src/application/use-cases/user/create-user.use-case';
import GetAllUserUseCase from 'src/application/use-cases/user/get-all-user-use-case';
import UserController from 'src/presentation/controllers/user.controller';
import { InMemoryUserRepository } from 'src/infrastructure/repositories/user.repository';

@Module({
	controllers: [UserController],
	providers: [
		CreateUserUseCase,
		GetAllUserUseCase,
		{
			provide: 'USER_REPOSITORY',
			useClass: InMemoryUserRepository,
		},
	],
})
export class UserModule {}
