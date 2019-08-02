import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserSchema } from './schemas/user.schema';
import { PlansModule } from '../plans/plans.module';

@Module({
  imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema }]), PlansModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})

export class UsersModule {}
