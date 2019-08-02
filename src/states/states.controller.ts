import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { StatesService } from './states.service';
import { CreateStateDto } from './dto/create-state.dto';
import { State } from './interfaces/state.interface';
import { ValidateObjectId } from '../app/shared/pipes/validate-object-id.pipes';

@Controller('api/states')
export class StatesController {
  constructor(private readonly statesService: StatesService) {}

  @Post()
  async create(@Body() createStateDto: CreateStateDto) {
    return await this.statesService.create(createStateDto);
  }

  @Get()
  async findAll(): Promise<State[]> {
    return this.statesService.findAll();
  }

  @Get('id/:stateId')
  async getState(@Res() res, @Param('stateId', new ValidateObjectId()) stateId) {
    const state = await this.statesService.findOneById(stateId);
    if (!state) { throw new NotFoundException('State does not exist!'); }
    return res.status(HttpStatus.OK).json(state);
  }

  @Put()
  async updateState(
    @Res() res,
    @Query('stateId', new ValidateObjectId()) stateId,
    @Body() createStateDto: CreateStateDto,
  ) {
    const editedState = await this.statesService.editState(stateId, createStateDto);
    if (!editedState) { throw new NotFoundException('State does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'State has been successfully updated',
      post: editedState,
    });
  }

  @Delete()
  async deleteState(
    @Res() res,
    @Body() state,
  ) {
    const deletedState = await this.statesService.deleteState(state.stateId);
    if (!deletedState) {
      throw new NotFoundException('State does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'State has been deleted!',
      state: deletedState,
    });
  }
}
