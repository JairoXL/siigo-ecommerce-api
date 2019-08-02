import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';
import { City } from './interfaces/city.interface';
import { ValidateObjectId } from '../app/shared/pipes/validate-object-id.pipes';

@Controller('api/cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post()
  async create(@Body() createCityDto: CreateCityDto) {
    return await this.citiesService.create(createCityDto);
  }

  @Get()
  async findAll(): Promise<City[]> {
    return this.citiesService.findAll();
  }

  @Get('id/:cityId')
  async getCity(@Res() res, @Param('cityId', new ValidateObjectId()) cityId) {
    const city = await this.citiesService.findOneById(cityId);
    if (!city) { throw new NotFoundException('City does not exist!'); }
    return res.status(HttpStatus.OK).json(city);
  }

  @Put()
  async updateCity(
    @Res() res,
    @Query('cityId', new ValidateObjectId()) cityId,
    @Body() createCityDto: CreateCityDto,
  ) {
    const editedCity = await this.citiesService.editCity(cityId, createCityDto);
    if (!editedCity) { throw new NotFoundException('City does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'City has been successfully updated',
      post: editedCity,
    });
  }

  @Delete()
  async deleteCity(
    @Res() res,
    @Body() city,
  ) {
    const deletedCity = await this.citiesService.deleteCity(city.cityId);
    if (!deletedCity) {
      throw new NotFoundException('City does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'City has been deleted!',
      city: deletedCity,
    });
  }
}
