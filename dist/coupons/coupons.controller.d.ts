import { CouponsService } from './coupons.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { Coupon } from './interfaces/coupon.interface';
export declare class CouponsController {
    private readonly couponsService;
    constructor(couponsService: CouponsService);
    create(createCouponDto: CreateCouponDto): Promise<Coupon>;
    findAll(): Promise<Coupon[]>;
    getCoupon(res: any, couponId: any): Promise<any>;
    updateCoupon(res: any, couponId: any, createCouponDto: CreateCouponDto): Promise<any>;
    deleteCoupon(res: any, coupon: any): Promise<any>;
}
