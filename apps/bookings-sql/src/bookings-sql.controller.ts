import { Controller, Get } from '@nestjs/common';
import { BookingsSqlService } from './bookings-sql.service';

@Controller()
export class BookingsSqlController {
  constructor(private readonly bookingsSqlService: BookingsSqlService) {}

  @Get()
  getHello(): string {
    return this.bookingsSqlService.getHello();
  }
}
