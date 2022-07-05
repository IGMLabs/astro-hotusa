import { NestFactory } from '@nestjs/core';
import { TripsMongoModule } from './trips-mongo.module';

async function bootstrap() {
  const app = await NestFactory.create(TripsMongoModule);
  await app.listen(3001);
}
bootstrap();
