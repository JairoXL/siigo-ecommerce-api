import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CountriesModule } from './countries/countries.module';
import { StatesModule } from './states/states.module';
import { CitiesModule } from './cities/cities.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app/app.controller';
import { RolesModule } from './roles/roles.module';
import { CustomersModule } from './customers/customers.module';
import { PlansModule } from './plans/plans.module';
import { SpecialPlansModule } from './special-plans/special-plans.module';
import { CustomerPlansModule } from './customer-plans/customer-plans.module';
import { CouponsModule } from './coupons/coupons.module';
import { CustomerPaymentMethodsModule } from './customer-payment-mehtods/customer-payment-methods.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/siigo-api'),
    CountriesModule,
    StatesModule,
    CitiesModule,
    UsersModule,
    AuthModule,
    RolesModule,
    PlansModule,
    CustomersModule,
    SpecialPlansModule,
    CustomerPlansModule,
    CouponsModule,
    CustomerPaymentMethodsModule,
    OrdersModule,
  ],
  controllers: [AppController],
})
export class ApplicationModule {}
