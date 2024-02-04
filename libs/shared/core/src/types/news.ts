export type Source = 'GUARDIAN' | 'NY_TIMES' | 'BBC';
export type Section =
  | 'Sport'
  | 'Art & Design'
  | 'Music'
  | 'Books'
  | 'Movies'
  | 'Games'
  | 'Technology'
  | 'Travel'
  | 'Fashion'
  | 'Food';

export interface NewsGetRequestBody {
  source: Source;
  query?: string;
  filters?: {
    sections?: string[];
    lang?: string;
    fromDate?: string;
    toDate?: string;
    pageSize?: number;
  };
}
