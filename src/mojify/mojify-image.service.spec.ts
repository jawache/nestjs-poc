import { Test, TestingModule } from '@nestjs/testing';
import { MojifyImageService } from './mojify-image.service';

describe('MojifyImageService', () => {
  let service: MojifyImageService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MojifyImageService],
    }).compile();
    service = module.get<MojifyImageService>(MojifyImageService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
