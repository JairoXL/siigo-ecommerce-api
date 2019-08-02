import { Model } from 'mongoose';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { Coupon } from './interfaces/coupon.interface';
export declare class CouponsService {
    private readonly couponModel;
    constructor(couponModel: Model<Coupon>);
    create(createCouponDto: CreateCouponDto): Promise<Coupon>;
    findAll(): Promise<Coupon[]>;
    findOneById(couponId: any): Promise<Coupon>;
    editCoupon(couponId: any, createCouponDto: CreateCouponDto): Promise<Coupon>;
    deleteCoupon(couponId: string): Promise<any>;
}
