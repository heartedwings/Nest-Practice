import { Controller, Get } from '@nestjs/common';
import { MydataService } from './mydata.service';

@Controller('mydata')
export class MydataController {
  constructor(private readonly mydataService: MydataService) {}

  @Get('/')
  root(): Promise<any[]> {
    return this.mydataService.getAll();
  }
}
