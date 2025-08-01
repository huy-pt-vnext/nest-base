import { Module } from "@nestjs/common";
import { APP_FILTER, APP_INTERCEPTOR } from "@nestjs/core";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./modules/user.module";
import {
  appConfig,
  authConfig,
  oauthConfig,
  databaseConfig,
  awsConfig,
  externalConfig,
} from "./infrastructure/config/app.config";
import { ResponseInterceptor } from "./presentation/interceptors/response.interceptor";
import { GlobalExceptionFilter } from "./presentation/filters/global-exception.filter";
import { ModuleWithCommonMiddleware } from "./presentation/middleware";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        appConfig,
        authConfig,
        oauthConfig,
        databaseConfig,
        awsConfig,
        externalConfig,
      ],
      envFilePath: [
        `src/infrastructure/config/.env.${process.env.NODE_ENV || "development"}`,
      ],
    }),
    UserModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule extends ModuleWithCommonMiddleware {}
