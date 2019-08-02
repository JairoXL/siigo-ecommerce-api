import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CitySchema } from './schemas/city.schema';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'City', schema: CitySchema }])],
  controllers: [CitiesController],
  providers: [CitiesService],
})
export class CitiesModule {}
