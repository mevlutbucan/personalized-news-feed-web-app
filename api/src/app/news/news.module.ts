import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { GuardianService } from './guardian.service';

@Module({
  providers: [NewsService, GuardianService],
  controllers: [NewsController],
})
export class NewsModule {}
