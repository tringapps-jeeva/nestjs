import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  findAll(): string {
    return 'This action returns all cats';
  }
  create(): string {
    return 'This will create the cats';
  }
}
