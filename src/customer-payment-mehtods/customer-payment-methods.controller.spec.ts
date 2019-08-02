import { Test, TestingModule } from '@nestjs/testing';
import { CustomerPaymentMehtodsController } from './customer-payment-methods.controller';

describe('CustomerPaymentMehtods Controller', () => {
  let controller: CustomerPaymentMehtodsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerPaymentMehtodsController],
    }).compile();

    controller = module.get<CustomerPaymentMehtodsController>(CustomerPaymentMehtodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
