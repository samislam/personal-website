import typeorm from './server/typeorm'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EnvironmentVars } from './types/environment-vars'
import environmentSchema from '@/server/environment-schema'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { RequestUserMiddleware } from './middlewares/request-user.middleware'
import { RequestPreviewMiddleware } from './middlewares/request-preview.middleware'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
      validationSchema: environmentSchema,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService<EnvironmentVars>) => config.getOrThrow('_TYPEORM_ENV'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestPreviewMiddleware).forRoutes('*')
    consumer.apply(RequestUserMiddleware).forRoutes('*')
  }
}
