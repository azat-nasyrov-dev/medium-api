if (!process.env.IS_TS_NODE) {
  require('module-alias/register');
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const swagger = new DocumentBuilder()
    .setTitle('Medium-API')
    .setDescription('API Documentation')
    .setVersion('1.0.0')
    .addTag('Azat Nasyrov')
    .build();
  const document = SwaggerModule.createDocument(app, swagger);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(3000);
}

bootstrap();
