import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 静的ファイルの保管場所の設定
  app.useStaticAssets(join(__dirname, '..', 'public'));
  // viewsテンプレートの保管場所の設定
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  // テンプレートエンジンを設定
  app.setViewEngine('ejs');

  await app.listen(3000);
}
bootstrap();
