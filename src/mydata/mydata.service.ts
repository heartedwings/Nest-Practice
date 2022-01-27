import { Injectable } from '@nestjs/common';

import { InsertResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Mydata } from 'src/entities/mydata.entity';

@Injectable()
export class MydataService {
  constructor(
    @InjectRepository(Mydata)
    private readonly mydataRepository: Repository<Mydata>,
  ) {}

  getAll(): Promise<Mydata[]> {
    return this.mydataRepository.find();
  }

  addMydata(data: any): Promise<InsertResult> {
    return this.mydataRepository.insert(data);
  }
}
