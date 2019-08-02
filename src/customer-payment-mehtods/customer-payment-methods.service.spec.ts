import { Test, TestingModule } from '@nestjs/testing';
import { CustomerPaymentMehtodsService } from './customer-payment-methods.service';

describe('CustomerPaymentMethodsService', () => {
  let service: CustomerPaymentMehtodsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerPaymentMehtodsService],
    }).compile();

    service = module.get<CustomerPaymentMehtodsService>(CustomerPaymentMehtodsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
