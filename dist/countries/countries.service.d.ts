import { Model } from 'mongoose';
import { Country } from './interfaces/country.interface';
import { CreateCountryDto } from './dto/create-country.dto';
export declare class CountriesService {
    private readonly countryModel;
    constructor(countryModel: Model<Country>);
    create(createCountryDto: CreateCountryDto): Promise<Country>;
    findAll(): Promise<Country[]>;
    findOneById(countryId: any): Promise<Country>;
    editCountry(countryId: any, createCountryDto: CreateCountryDto): Promise<Country>;
    deleteCountry(countryId: string): Promise<any>;
}
