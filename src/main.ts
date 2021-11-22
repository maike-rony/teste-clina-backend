import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import env from './api/config/env'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  
  const config = new DocumentBuilder()
    .setTitle('API - Clina')
    .setDescription('The API - CLINA description')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT'
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  await app.listen(env.port);
}
bootstrap();
