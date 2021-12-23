import {Controller, Get, Param } from '@nestjs/common';
import { FoodPurchaseServices } from './food-purchase.service';


@Controller('FoodPurchase')
export class FoodPurchaseController {
  constructor(private readonly foodPurchaseServices: FoodPurchaseServices) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodPurchaseServices.findOne(id);
  }
}