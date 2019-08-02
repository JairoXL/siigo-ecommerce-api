import { Test, TestingModule } from '@nestjs/testing';
import { SpecialPlansController } from './special-plans.controller';

describe('SpecialPlans Controller', () => {
  let controller: SpecialPlansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecialPlansController],
    }).compile();

    controller = module.get<SpecialPlansController>(SpecialPlansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
