import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { HttpExceptionFilter } from './coommon/exceptions/http-exceptions.filter';
import { ValidationPipe } from '@nestjs/common';
import * as passport from 'passport';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  app.use(passport.initialize());

  const config = new DocumentBuilder()
    .setTitle('BackEnd Project1')
    .setDescription('백엔드 프로젝트1')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('backend/one', app, document);

  app.enableCors({
    origin: ['*'],
    methods: 'GET,PUT,POST,DELETE,PUT,OPTIONS,PATCH',
    credentials: true,
  });

  await app.listen(process.env.PORT);
}
bootstrap();
