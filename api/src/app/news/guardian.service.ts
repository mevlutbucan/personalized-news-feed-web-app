import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NewsGetRequestBody, NewsGetResponseBody } from '@shared/core';

@Injectable()
export class GuardianService {
  constructor(configService: ConfigService) {
    const apiKey = configService.get('GUARDIAN_API_KEY');
    if (!apiKey) {
      throw new Error('API key is not provided');
    }
    this._apiKey = apiKey;
  }

  private _apiKey: string;
  private _baseUrl = 'https://content.guardianapis.com/search';

  private _getFiltersAsString = (filters: NonNullable<NewsGetRequestBody['filters']>) => {
    type K = keyof typeof filters;
    type V = (typeof filters)[K];
    const filterArray = Object.entries(filters) as [K, V][];
    return filterArray.reduce<string>((acc, [key, value]) => {
      if (value) {
        if (key === 'sections' && (value as string[]).length > 0) {
          return `${acc}&section=${(value as string[]).join('|')}`;
        }
        (key as string) = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        return `${acc}&${key}=${value}`;
      }
      return acc;
    }, '');
  };

  async search(query = '', filtersObj: NewsGetRequestBody['filters'] = {}): Promise<NewsGetResponseBody> {
    const filters = this._getFiltersAsString(filtersObj);
    try {
      const response = await fetch(
        `${this._baseUrl}?api-key=${this._apiKey}&q=${query}${filters}&show-fields=thumbnail`
      );
      return await response.json().then((data) => data.response);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
