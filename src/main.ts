import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, urlencoded } from 'express';
import {v2 as cloudinary} from 'cloudinary';

async function bootstrap() {
  cloudinary.config({ 
    cloud_name: 'dwiegpf1s', 
    api_key: '918254445564295', 
    api_secret: 'm0aoXKyn_DyQrt6oGqpnqJv0PzU' 
  });

  const app = await NestFactory.create(AppModule);
  app.enableCors({}); // enable cors
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  await app.listen(3000);
}
bootstrap();
