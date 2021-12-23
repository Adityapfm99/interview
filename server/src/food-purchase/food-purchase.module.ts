import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodPurchase } from './entities/food.purchase';
import { FoodPurchaseController } from './food-purchase.controller';
import { FoodPurchaseServices } from './food-purchase.service';

@Module({
  imports: [TypeOrmModule.forFeature([FoodPurchase])],
  controllers: [FoodPurchaseController],
  providers: [FoodPurchaseServices],
})
export class FoodPurchaseModule {}
