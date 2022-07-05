import { SharedModule } from '@app/shared';
import { Module } from '@nestjs/common';
import { BookingsSqlController } from './bookings-sql.controller';
import { BookingsSqlService } from './bookings-sql.service';

@Module({
  imports: [SharedModule],
  controllers: [BookingsSqlController],
  providers: [BookingsSqlService],
})
export class BookingsSqlModule {}
