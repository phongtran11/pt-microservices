import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

export const appGenerator = async (AppModule: any) => {
  return await NestFactory.create(AppModule);
};
