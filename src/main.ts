import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/config.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const logger = new Logger('/Main');
  const appConfigService: AppConfigService = app.get(AppConfigService);
  await app.listen(appConfigService.port, '0.0.0.0', () => {
    logger.log(`API Corriendo en el puesto ${appConfigService.port}`);
    console.log(`API Corriendo en el puesto ${appConfigService.port}`);
  });
}
bootstrap();
