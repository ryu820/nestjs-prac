import { PartialType } from '@nestjs/mapped-types';
//PartialType을 사용하면 부분타입을 가져올 수 있다.
// import { IsNumber, IsString } from 'class-validator';
import { CreateMovieDto } from './create-movie.dto';

// export class updateMovieDto {
//   @IsString()
//   readonly title?: string;

//   @IsNumber()
//   readonly year?: number;

//   @IsString({ each: true })
//   readonly genres?: string[];
// }

export class updateMovieDto extends PartialType(CreateMovieDto) {}
