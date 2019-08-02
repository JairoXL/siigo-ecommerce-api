import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StatesController } from './states.controller';
import { StatesService } from './states.service';
import { StateSchema } from './schemas/state.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'State', schema: StateSchema }])],
  controllers: [StatesController],
  providers: [StatesService],
})

export class StatesModule {}
