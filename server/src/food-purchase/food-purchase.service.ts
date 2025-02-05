import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FoodPurhaseDto } from './dto/food-purchase.dto';
import { FoodPurchase } from './entities/food.purchase';

@Injectable()
export class FoodPurchaseServices {
  constructor(
    @InjectRepository(FoodPurchase) private readonly foodPurchaseRepo: Repository<FoodPurchase>,
  ) {}

  async create(foodPurhaseDto: FoodPurhaseDto) {
    const foodPurchase = this.foodPurchaseRepo.create(foodPurhaseDto);
    return this.foodPurchaseRepo.save([foodPurchase]);
  }

  findAll() {
    return this.foodPurchaseRepo.find();
  }

  findOne(id: string) {
    return this.foodPurchaseRepo.findOne(id);
  }
}
