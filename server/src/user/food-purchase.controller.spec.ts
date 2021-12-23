import { Test, TestingModule } from '@nestjs/testing';
import { FoodPurchaseController } from './food-purchase.controller';
import { FoodPurchaseServices } from './food-purchase.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('FoodPurchaseController', () => {
  let controller: FoodPurchaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodPurchaseController],
      providers: [FoodPurchaseServices],
    }).compile();

    controller = module.get<FoodPurchaseController>(FoodPurchaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
