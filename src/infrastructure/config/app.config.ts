/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { registerAs } from "@nestjs/config";

export const appConfig = registerAs("app", () => ({
  port: parseInt(process.env.PORT || "3000", 10),
  nodeEnv: process.env.NODE_ENV || "development",
}));

export const authConfig = registerAs("auth", () => ({
  accessSecretKey: process.env.ACCESS_SECRET,
  refreshSecretKey: process.env.REFRESH_SECRET,
  accessExpiration: process.env.ACCESS_EXPIRATION,
  refreshExpiration: process.env.REFRESH_EXPIRATION,
}));

export const oauthConfig = registerAs("oauth", () => ({
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUrl: process.env.GOOGLE_REDIRECT_URI,
    callbackUrl: process.env.GOOGLE_CLIENT_REDIRECT_URL_CALLBACK,
  },
  github: {
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    redirectUri: process.env.GITHUB_REDIRECT_URI,
  },
}));

export const databaseConfig = registerAs("database", () => ({
  url: process.env.DATABASE_URL,
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT || "5432", 10),
  name: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
}));

export const awsConfig = registerAs("aws", () => ({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  s3Bucket: process.env.AWS_S3_BUCKET || "test",
  s3BucketPrivate: process.env.AWS_S3_BUCKET_PRIVATE || "test-private",
}));

export const externalConfig = registerAs("external", () => ({
  frontendUrl: process.env.FRONTEND_URL,
  sendGridApiKey: process.env.SEND_GRID_API_KEY || "",
}));
