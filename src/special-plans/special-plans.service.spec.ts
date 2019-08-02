import { Test, TestingModule } from '@nestjs/testing';
import { SpecialPlansService } from './special-plans.service';

describe('SpecialPlansService', () => {
  let service: SpecialPlansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpecialPlansService],
    }).compile();

    service = module.get<SpecialPlansService>(SpecialPlansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
