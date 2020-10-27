import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyService } from './test.service';
import { Test1Middleware } from './test1.middleware';
import { Test2Middleware } from './test2.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MyService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
            .apply(Test1Middleware)
            .forRoutes('/')
            .apply(Test2Middleware)
            .forRoutes('/');
  }
}
