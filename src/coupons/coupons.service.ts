import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { Coupon } from './interfaces/coupon.interface';

@Injectable()
export class CouponsService {
  constructor(@InjectModel('Coupon') private readonly couponModel: Model<Coupon>) {}

  async create(createCouponDto: CreateCouponDto): Promise<Coupon> {
    const createdCoupon = new this.couponModel(createCouponDto);
    return await createdCoupon.save();
  }

  async findAll(): Promise<Coupon[]> {
    return await this.couponModel.find().exec();
  }
  async findOneById(couponId): Promise<Coupon> {
    return await this.couponModel.findById(couponId);
  }

  async editCoupon(couponId, createCouponDto: CreateCouponDto): Promise<Coupon> {
    return await this.couponModel.findByIdAndUpdate(couponId, createCouponDto, { new: true });
  }

  async deleteCoupon(couponId: string): Promise<any> {
    return await this.couponModel.findByIdAndRemove(couponId);
  }
}
