import { SharedService } from '@app/shared';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TripsMongoService {
  constructor(private sharedService: SharedService) {}
  getHello(): string {
    return this.sharedService.getHello() + '  from trips-mongo';
  }
}
