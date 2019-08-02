import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCityDto } from './dto/create-city.dto';
import { City } from './interfaces/city.interface';

@Injectable()
export class CitiesService {
  constructor(@InjectModel('City') private readonly cityModel: Model<City>) {}

  async create(createCityDto: CreateCityDto): Promise<City> {
    const createdCity = new this.cityModel(createCityDto);
    return await createdCity.save();
  }

  async findAll(): Promise<City[]> {
    return await this.cityModel.find().exec();
  }

  async findOneById(countryId): Promise<City> {
    return await this.cityModel.findById(countryId);
  }

  async editCity(cityId, createCityDto: CreateCityDto): Promise<City> {
    return await this.cityModel.findByIdAndUpdate(cityId, createCityDto, { new: true });
  }

  async deleteCity(cityId: string): Promise<any> {
    return await this.cityModel.findByIdAndRemove(cityId);
  }
}
