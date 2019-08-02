import { Module } from '@nestjs/common';
import { CouponsService } from './coupons.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CouponSchema } from './schemas/coupon.schema';
import { CouponsController } from './coupons.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Coupon', schema: CouponSchema }])],
  controllers: [CouponsController],
  providers: [CouponsService],
})
export class CouponsModule {}
