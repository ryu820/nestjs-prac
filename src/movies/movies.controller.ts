import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

//()안에 있는 값이 url의 엔트리포인트를 컨트롤함
//()안에 "movies"가 쓰여있으면 url은 /movies가 된다.
@Controller()
export class MoviesController {
  @Get()
  getAll() {
    return 'This is return all movies';
  }

  @Get('search')
  search(@Query('year') searchingyear: string) {
    return `We are searching for the movies after ${searchingyear}`;
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return `This will return One movie with the id : ${id}`;
  }

  @Post()
  create(@Body() movieData: string) {
    return movieData;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This will delete a movie with the id : ${id}`;
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() updateData) {
    return {
      updateMovie: id,
      ...updateData,
    };
  }
}
