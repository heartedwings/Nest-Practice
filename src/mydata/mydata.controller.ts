import { Controller, Render, Get, Post, Redirect, Body } from '@nestjs/common';
import { MydataService } from './mydata.service';

@Controller('mydata')
export class MydataController {
  constructor(private readonly mydataService: MydataService) {}

  @Get('/')
  @Render('mydata/index')
  async index(): Promise<any> {
    return {
      title: 'PostgreSQLデータの取得',
      msg: 'mydata controller',
      data: await this.mydataService.getAll(),
    };
  }

  @Post('/')
  @Redirect('/mydata/')
  async send(@Body() form: any): Promise<void> {
    await this.mydataService.addMydata(form);
  }
}
