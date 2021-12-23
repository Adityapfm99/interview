import { Test, TestingModule } from '@nestjs/testing';
import { FoodPurchaseServices } from './food-purchase.service';

describe('FoodPurchaseService', () => {
  let service: FoodPurchaseServices;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodPurchaseServices],
    }).compile();

    service = module.get<FoodPurchaseServices>(FoodPurchaseServices);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
