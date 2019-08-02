import { CreateCountryDto } from './dto/create-country.dto';
import { CountriesService } from './countries.service';
import { Country } from './interfaces/country.interface';
export declare class CountriesController {
    private readonly countriesService;
    constructor(countriesService: CountriesService);
    create(createCountryDto: CreateCountryDto): Promise<Country>;
    findAll(): Promise<Country[]>;
    getCountry(res: any, countryId: any): Promise<any>;
    updateCountry(res: any, countryId: any, createCountryDto: CreateCountryDto): Promise<any>;
    deleteCountry(res: any, country: any): Promise<any>;
}
