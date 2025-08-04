import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from "@nestjs/common";
import { CreateUserUseCase } from "src/application/use-cases/user/create-user.use-case";
import GetAllUserUseCase from "src/application/use-cases/user/get-all-user-use-case";
import { SkipPermission } from "../../shared/decorators/skip-permission.decorator";
import { ApiResponse } from "../common/api-response";
import {
  CreateUserInputs,
  createUserSchema,
} from "../validator/user/createUserSchema";
import { ZodValidationPipe } from "../validator/zod-validation.pipe";

const createUserValidationPipe = new ZodValidationPipe(createUserSchema);

@Controller("users")
export default class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getAllUserUseCase: GetAllUserUseCase
  ) {}

  @SkipPermission()
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body(createUserValidationPipe) request: CreateUserInputs) {
    const result = await this.createUserUseCase.execute(request);
    return ApiResponse.ok(result, "User created successfully");
  }

  @Get()
  async getUsers() {
    const result = await this.getAllUserUseCase.execute();
    return ApiResponse.ok(result, "Users retrieved successfully");
  }
}
