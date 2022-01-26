import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Mydata } from 'src/entities/mydata.entity';

@Injectable()
export class MydataService {
  constructor(
    @InjectRepository(Mydata)
    private mydataRepository: Repository<Mydata>,
  ) {}

  getAll(): Promise<Mydata[]> {
    return this.mydataRepository.find();
  }
}
