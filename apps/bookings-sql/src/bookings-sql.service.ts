import { SharedService } from '@app/shared';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingsSqlService {
  constructor(private sharedService: SharedService) {}
  getHello(): string {
    return this.sharedService.getHello() + ' from bookings sql';
  }
}
