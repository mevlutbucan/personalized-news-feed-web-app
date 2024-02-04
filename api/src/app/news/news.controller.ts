import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { NewsGetRequestBody } from '@shared/core';

import { NewsService } from './news.service';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('news')
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  getNews(@Body() data: NewsGetRequestBody) {
    return this.newsService.getNews(data.source, data);
  }
}
