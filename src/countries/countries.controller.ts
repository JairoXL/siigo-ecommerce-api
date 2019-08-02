import { Controller, Get, Post, Body, Res, Param, NotFoundException, HttpStatus, Put, Query, Delete } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { CountriesService } from './countries.service';
import { Country } from './interfaces/country.interface';
import { ValidateObjectId } from '../app/shared/pipes/validate-object-id.pipes';

@Controller('api/countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Post()
  async create(@Body() createCountryDto: CreateCountryDto) {
    return await this.countriesService.create(createCountryDto);
  }

  @Get()
  async findAll(): Promise<Country[]> {
    return this.countriesService.findAll();
  }
  @Get('id/:countryId')
  async getCountry(@Res() res, @Param('countryId', new ValidateObjectId()) countryId) {
    const country = await this.countriesService.findOneById(countryId);
    if (!country) { throw new NotFoundException('Country does not exist!'); }
    return res.status(HttpStatus.OK).json(country);
  }

  @Put()
  async updateCountry(
    @Res() res,
    @Query('countryId', new ValidateObjectId()) countryId,
    @Body() createCountryDto: CreateCountryDto,
  ) {
    const editedCountry = await this.countriesService.editCountry(countryId, createCountryDto);
    if (!editedCountry) { throw new NotFoundException('Country does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'Country has been successfully updated',
      post: editedCountry,
    });
  }

  @Delete()
  async deleteCountry(
    @Res() res,
    @Body() country,
  ) {
    const deletedCountry = await this.countriesService.deleteCountry(country.countryId);
    if (!deletedCountry) {
      throw new NotFoundException('Country does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Country has been deleted!',
      country: deletedCountry,
    });
  }
}
