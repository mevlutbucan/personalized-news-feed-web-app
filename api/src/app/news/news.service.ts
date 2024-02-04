import { Injectable, NotImplementedException } from '@nestjs/common';
import { NewsGetRequestBody, Source } from '@shared/core';

import { GuardianService } from './guardian.service';

@Injectable()
export class NewsService {
  constructor(private guardian: GuardianService) {}

  async getNews(source: Source, data: NewsGetRequestBody) {
    if (source === 'GUARDIAN') {
      return this.guardian.search(data.query, data.filters);
    }
    throw new NotImplementedException();
  }
}
