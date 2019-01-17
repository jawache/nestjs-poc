import { Test, TestingModule } from '@nestjs/testing';
import { MojifyController } from './mojify.controller';

describe('Mojify Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [MojifyController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: MojifyController = module.get<MojifyController>(MojifyController);
    expect(controller).toBeDefined();
  });
});
