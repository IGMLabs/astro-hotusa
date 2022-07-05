import { Test, TestingModule } from '@nestjs/testing';
import { TripsMongoController } from './trips-mongo.controller';
import { TripsMongoService } from './trips-mongo.service';

describe('TripsMongoController', () => {
  let tripsMongoController: TripsMongoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TripsMongoController],
      providers: [TripsMongoService],
    }).compile();

    tripsMongoController = app.get<TripsMongoController>(TripsMongoController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(tripsMongoController.getHello()).toBe('Hello World!');
    });
  });
});
