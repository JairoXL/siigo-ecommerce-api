import { Module } from '@nestjs/common';
import { CustomerPaymentMethodsService } from './customer-payment-methods.service';
import { CustomerPaymentMethodsController } from './customer-payment-methods.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerPaymentMethodSchema } from './schemas/payment-method-customer.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'CustomerPaymentMethod', schema: CustomerPaymentMethodSchema }])],
  controllers: [CustomerPaymentMethodsController],
  providers: [CustomerPaymentMethodsService],
})
export class CustomerPaymentMethodsModule {}
