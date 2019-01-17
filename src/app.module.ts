import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MojifyController } from './mojify/mojify.controller';
import { MojifyImageService } from './mojify/mojify-image.service';
import { AzureBlogStorageService } from './azure/azure-blog-storage.service';

@Module({
  imports: [],
  controllers: [AppController, MojifyController],
  providers: [AppService, MojifyImageService, AzureBlogStorageService],
})
export class AppModule {}
