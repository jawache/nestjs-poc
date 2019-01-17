import { Injectable } from '@nestjs/common';
import { BlobService, date, BlobUtilities } from 'azure-storage';
import { resolve } from 'dns';
import * as fs from 'fs';
import * as stream from 'stream';

const ContainerName = process.env['AZURE_STORAGE_CONTAINER'];
const ContainerAccessKey = process.env['AZURE_STORAGE_ACCESS_KEY'];
const ContainerAccountName = process.env['AZURE_STORAGE_ACCOUNT'];

@Injectable()
export class AzureBlogStorageService {
  private blobService: BlobService;

  constructor() {
    this.blobService = new BlobService(
      ContainerAccountName,
      ContainerAccessKey,
    );
  }

  saveToBlob(file) {
    return new Promise((resolve, reject) => {
      //TODO: Come up with a unique filename

      // First we created a blob stream
      let blobStream = this.blobService.createWriteStreamToBlockBlob(
        ContainerName,
        file.originalname,
        (err, result, response) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            // The stream has been created
            console.log(result);
            console.log(response);
          }
        },
      );

      // Need to convert our buffer into a stream
      let bufferStream = new stream.PassThrough();
      bufferStream.end(file.buffer);

      // Now pipe the uploaded file to the blobStream
      bufferStream.pipe(blobStream);

      // When the blob stream closes, that means the file is uploaded
      blobStream.on('close', async () => {
        console.log('blobStreamClosed');
        // Get the public URL
        let url = this.blobService.getUrl(ContainerName, file.originalname);
        console.log(url);
        // Return it
        resolve(url);
      });
      blobStream.on('error', err => {
        reject(err);
      });
    });
  }

  async save(file) {
    console.log(file);
    console.log('upload');
    let url = await this.saveToBlob(file);
    console.log('uploaded');
    return url;
  }
}
