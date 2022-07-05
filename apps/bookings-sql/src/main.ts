import { NestFactory } from '@nestjs/core';
import { BookingsSqlModule } from './bookings-sql.module';

async function bootstrap() {
  const app = await NestFactory.create(BookingsSqlModule);
  await app.listen(3002);
}
bootstrap();
