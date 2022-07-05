import { Controller, Get } from '@nestjs/common';
import { TripsMongoService } from './trips-mongo.service';

@Controller()
export class TripsMongoController {
  constructor(private readonly tripsMongoService: TripsMongoService) {}

  @Get()
  getHello(): string {
    return this.tripsMongoService.getHello();
  }
}
