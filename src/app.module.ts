import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { appConfigModule } from './config/config.module';
import { TypeOrmConfigModule } from './config/typeorm/typeorm.module';
import { User } from './database/entities/user.entity';

@Module({
  imports: [TypeOrmConfigModule,
    TypeOrmModule.forFeature([User])
    ,appConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
