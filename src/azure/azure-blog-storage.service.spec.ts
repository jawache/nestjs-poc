import { Test, TestingModule } from '@nestjs/testing';
import { AzureBlogStorageService } from './azure-blog-storage.service';

describe('AzureBlogStorageService', () => {
  let service: AzureBlogStorageService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AzureBlogStorageService],
    }).compile();
    service = module.get<AzureBlogStorageService>(AzureBlogStorageService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
