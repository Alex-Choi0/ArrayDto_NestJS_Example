import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';
import { CreateManyTest1ArrayDto, CreateOneTest1Dto } from './dto/test1.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('element/one')
  @ApiOperation({
    summary: '하나의 record를 저장하기 위한 테스트 API. DTO 적용 테스트',
  })
  @ApiOkResponse({
    description: '정상적으로 응답시',
    example: {
      num: 1,
      str: 'test',
    },
  })
  @HttpCode(HttpStatus.ACCEPTED)
  async CreateOneDto(@Body() dto: CreateOneTest1Dto) {
    return dto;
  }

  @Post('element/many')
  @ApiOperation({
    summary: '여러개의 record를 저장하기 위한 테스트 API. DTO 적용 테스트',
  })
  @ApiOkResponse({
    description: '정상적으로 응답시',
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
  @HttpCode(HttpStatus.ACCEPTED)
  async CreateManyDto(@Body() dto: CreateManyTest1ArrayDto) {
    return dto;
  }
}
