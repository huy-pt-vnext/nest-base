import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import PermissionsGuard from "src/application/guards/PermissionsGuard";
import { CreateUserUseCase } from "src/application/use-cases/user/create-user.use-case";
import GetAllUserUseCase from "src/application/use-cases/user/get-all-user-use-case";
import { InMemoryUserRepository } from "src/infrastructure/repositories/user.repository";
import UserController from "src/presentation/controllers/user.controller";

@Module({
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    GetAllUserUseCase,
    {
      provide: "USER_REPOSITORY",
      useClass: InMemoryUserRepository,
    },
    {
      provide: APP_GUARD,
      useClass: PermissionsGuard,
    },
  ],
})
export class UserModule {}
