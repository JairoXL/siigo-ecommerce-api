import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Country } from './interfaces/country.interface';
import { CreateCountryDto } from './dto/create-country.dto';

@Injectable()
export class CountriesService {
  constructor(@InjectModel('Country') private readonly countryModel: Model<Country>) {}

  async create(createCountryDto: CreateCountryDto): Promise<Country> {
    const createdCountry = new this.countryModel(createCountryDto);
    return await createdCountry.save();
  }

  async findAll(): Promise<Country[]> {
    return await this.countryModel.find().exec();
  }

  async findOneById(countryId): Promise<Country> {
    return await this.countryModel.findById(countryId);
  }

  async editCountry(countryId, createCountryDto: CreateCountryDto): Promise<Country> {
    return await this.countryModel.findByIdAndUpdate(countryId, createCountryDto, { new: true });
  }

  async deleteCountry(countryId: string): Promise<any> {
    return await this.countryModel.findByIdAndRemove(countryId);
  }
}
