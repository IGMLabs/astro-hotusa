import { Test, TestingModule } from '@nestjs/testing';
import { BookingsSqlController } from './bookings-sql.controller';
import { BookingsSqlService } from './bookings-sql.service';

describe('BookingsSqlController', () => {
  let bookingsSqlController: BookingsSqlController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BookingsSqlController],
      providers: [BookingsSqlService],
    }).compile();

    bookingsSqlController = app.get<BookingsSqlController>(BookingsSqlController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bookingsSqlController.getHello()).toBe('Hello World!');
    });
  });
});
