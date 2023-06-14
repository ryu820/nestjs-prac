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
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

//()안에 있는 값이 url의 엔트리포인트를 컨트롤함
//()안에 "movies"가 쓰여있으면 url은 /movies가 된다.
@Controller()
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.gerAll();
  }

  @Get('search')
  search(@Query('year') searchingyear: string) {
    return `We are searching for the movies after ${searchingyear}`;
  }

  @Get(':id')
  getOne(@Param('id') id: string): Movie {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() movieData: string) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesService.deleteOne(id);
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() updateData) {
    return this.moviesService.update(id, updateData);
  }
}
