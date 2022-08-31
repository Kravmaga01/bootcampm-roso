import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from '../app.service';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get name(): string {
    return this.configService.get<string>('APP_NAME');
  }
  get url(): string {
    return this.configService.get<string>('APP_URL');
  }
  get port(): number {
    return +this.configService.get<number>('APP_PORT');
  }
}
