import axios from 'axios';
import { NewsGetRequestBody } from '@shared/core';

export class NewsService {
  static create() {
    return new NewsService();
  }

  async getNews(accessToken: string, data: NewsGetRequestBody) {
    return axios.post('/api/news', data, { headers: { Authorization: 'Bearer ' + accessToken } });
  }
}
