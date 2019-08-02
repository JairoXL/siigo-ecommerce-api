import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { ValidateObjectId } from '../app/shared/pipes/validate-object-id.pipes';
import { CouponsService } from './coupons.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { Coupon } from './interfaces/coupon.interface';

@Controller('api/coupons')
export class CouponsController {
  constructor(private readonly couponsService: CouponsService ) {}

  @Post()
  async create(@Body() createCouponDto: CreateCouponDto) {
    return await this.couponsService.create(createCouponDto);
  }

  @Get()
  async findAll(): Promise<Coupon[]> {
    return this.couponsService.findAll();
  }

  @Get('id/:couponId')
  async getCoupon(@Res() res, @Param('couponId', new ValidateObjectId()) couponId) {
    const coupon = await this.couponsService.findOneById(couponId);
    if (!coupon) { throw new NotFoundException('Coupon does not exist!'); }
    return res.status(HttpStatus.OK).json(coupon);
  }

  @Put()
  async updateCoupon(
    @Res() res,
    @Query('couponId', new ValidateObjectId()) couponId,
    @Body() createCouponDto: CreateCouponDto,
  ) {
    const editedCoupon = await this.couponsService.editCoupon(couponId, createCouponDto);
    if (!editedCoupon) { throw new NotFoundException('Coupon does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'Coupon has been successfully updated',
      post: editedCoupon,
    });
  }

  @Delete()
  async deleteCoupon(
    @Res() res,
    @Body() coupon,
  ) {
    const deletedCoupon = await this.couponsService.deleteCoupon(coupon.couponId);
    if (!deletedCoupon) { throw new NotFoundException('Coupon does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'Coupon has been deleted!',
      coupon: deletedCoupon,
    });
  }
}
