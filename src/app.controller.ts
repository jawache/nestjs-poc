import { Get, Controller, Render, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  home() {
    return { message: 'Hello world!' };
  }

  @Get('/m/:id')
  // @Render('image')
  image(@Param('id') id: string) {
    return { id: id };
  }
}
