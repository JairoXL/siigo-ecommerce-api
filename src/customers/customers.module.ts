import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './schemas/customer.schema';
import { CustomersController } from './customers.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Customer', schema: CustomerSchema }])],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
