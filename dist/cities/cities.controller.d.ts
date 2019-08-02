import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';
import { City } from './interfaces/city.interface';
export declare class CitiesController {
    private readonly citiesService;
    constructor(citiesService: CitiesService);
    create(createCityDto: CreateCityDto): Promise<City>;
    findAll(): Promise<City[]>;
    getCity(res: any, cityId: any): Promise<any>;
    updateCity(res: any, cityId: any, createCityDto: CreateCityDto): Promise<any>;
    deleteCity(res: any, city: any): Promise<any>;
}
