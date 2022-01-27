import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MydataModule } from './mydata/mydata.module';
import { Mydata } from './entities/mydata.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'heartedwings',
      password: 'Chihiro1023',
      database: 'postgres',
      synchronize: true,
      entities: [Mydata],
    }),
    MydataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
