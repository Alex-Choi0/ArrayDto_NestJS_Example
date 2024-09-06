import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray, ValidateNested } from 'class-validator';

// 한개의 record만 작성할수 있는 DTO
export class CreateOneTest1Dto {
  @ApiProperty({
    type: Number,
    description: '숫자 입력란',
    required: true,
    example: 1,
  })
  num: number;

  @ApiProperty({
    type: String,
    description: '문자 입력란',
    required: true,
    example: 'test',
  })
  str: string;
}

// 기존 class를 이용해서 다수의 DTO를 받을수 있는 class (Swagger속성도 그대로 받는다.)
export class CreateManyTest1ArrayDto {
  @ApiProperty({
    description: 'list of order',
    type: [CreateOneTest1Dto],
    example: [
      {
        num: 1,
        str: 'test1',
      },
      {
        num: 2,
        str: 'test2',
      },
      {
        num: 3,
        str: 'test3',
      },
    ],
  })
  @IsArray()
  @ArrayNotEmpty()
  @Type(() => CreateOneTest1Dto)
  @ValidateNested({ each: true })
  data: CreateOneTest1Dto[];
}
