import { Controller, Post, Body, Get, HttpStatus, HttpCode } from '@nestjs/common';
import GetAllUserUseCase from 'src/application/use-cases/user/get-all-user-use-case';
import { CreateUserInputs, createUserSchema } from '../validator/user/createUserSchema';
import { ZodValidationPipe } from '../validator/zod-validation.pipe';
import { CreateUserUseCase } from 'src/application/use-cases/user/create-user.use-case';
import { ApiResponse } from '../common/api-response';

const createUserValidationPipe = new ZodValidationPipe(createUserSchema);

@Controller('users')
export default class UserController {
	constructor(
		private readonly createUserUseCase: CreateUserUseCase,
		private readonly getAllUserUseCase: GetAllUserUseCase,
	) {}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	async createUser(@Body(createUserValidationPipe) request: CreateUserInputs) {
		const result = await this.createUserUseCase.execute(request);
		return ApiResponse.ok(result, 'User created successfully');
	}

	@Get()
	async getUsers() {
		const result = await this.getAllUserUseCase.execute();
		return ApiResponse.ok(result, 'Users retrieved successfully');
	}
}
