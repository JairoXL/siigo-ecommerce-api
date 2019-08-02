import { Test, TestingModule } from '@nestjs/testing';
import { CustomerPlansService } from './customer-plans.service';

describe('CustomerPlansService', () => {
  let service: CustomerPlansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerPlansService],
    }).compile();

    service = module.get<CustomerPlansService>(CustomerPlansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
