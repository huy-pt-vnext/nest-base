import { MiddlewareConsumer, NestModule, RequestMethod } from "@nestjs/common";
import AuthenticationMiddleware from "./Authentication.middleware";

export class ModuleWithCommonMiddleware implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AuthenticationMiddleware).forRoutes({
      path: "/*",
      method: RequestMethod.ALL,
    });
  }
}
