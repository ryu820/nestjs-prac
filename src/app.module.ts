import { Module } from '@nestjs/common';
// import { MoviesController } from './movies/movies.controller';
// import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';

//데코레이터:클래스에 함수기능을 추가
@Module({
  imports: [MoviesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
