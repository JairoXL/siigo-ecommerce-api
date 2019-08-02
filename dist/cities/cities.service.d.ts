import { Model } from 'mongoose';
import { CreateCityDto } from './dto/create-city.dto';
import { City } from './interfaces/city.interface';
export declare class CitiesService {
    private readonly cityModel;
    constructor(cityModel: Model<City>);
    create(createCityDto: CreateCityDto): Promise<City>;
    findAll(): Promise<City[]>;
    findOneById(countryId: any): Promise<City>;
    editCity(cityId: any, createCityDto: CreateCityDto): Promise<City>;
    deleteCity(cityId: string): Promise<any>;
}
