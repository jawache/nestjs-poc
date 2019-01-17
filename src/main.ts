require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'hbs';
import * as express from 'express';

hbs.registerHelper('moo', () => 'poo');

console.log(process.env['POO']);

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, server);

  server.use('/public', express.static(join(__dirname, './../public')));

  // app.useStaticAssets({
  //   root: '/Users/jawache/Development/Workspace/mojifier/public',
  //   prefix: '/public/',
  // });
  app.setBaseViewsDir(join(__dirname + './../views'));
  hbs.registerPartials(join(__dirname + './../views/partials'));
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
