import {
  Post,
  Controller,
  Render,
  Param,
  UseInterceptors,
  FileInterceptor,
  UploadedFile,
} from '@nestjs/common';
import { AzureBlogStorageService } from 'azure/azure-blog-storage.service';

@Controller('mojify')
export class MojifyController {
  constructor(private blobStore: AzureBlogStorageService) {}

  @Post('/upload-image')
  @UseInterceptors(FileInterceptor('file'))
  async mojifyImage(@UploadedFile() file) {
    // Save to blob storage
    let originalUrl = await this.blobStore.saveFile(file);
    console.log('MOO', originalUrl);
    
    // Moify the image
    this buffer = this.mojifier.mojify(file)
    let mojifiedUrl = await this.blobStore.saveBuffer(buffer);
    // Save the mojified image to blob

    // Store the link in table storage
    return { message: 'Hello world!' };
  }
}
