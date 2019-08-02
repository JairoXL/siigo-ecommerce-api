import { Test, TestingModule } from '@nestjs/testing';
import { CustomerPlansController } from './customer-plans.controller';

describe('CustomerPlans Controller', () => {
  let controller: CustomerPlansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerPlansController],
    }).compile();

    controller = module.get<CustomerPlansController>(CustomerPlansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
