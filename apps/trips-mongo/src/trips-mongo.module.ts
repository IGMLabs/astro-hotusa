import { SharedModule } from '@app/shared';
import { Module } from '@nestjs/common';
import { TripsMongoController } from './trips-mongo.controller';
import { TripsMongoService } from './trips-mongo.service';

@Module({
  imports: [SharedModule],
  controllers: [TripsMongoController],
  providers: [TripsMongoService],
})
export class TripsMongoModule {}
