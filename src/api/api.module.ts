import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { AdminService } from './api.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ApiController],
  providers: [AdminService],
})
export class ApiModule {}
