import { type FunctionComponent, useState } from 'react';
import { NewsGetRequestBody, NewsResult } from '@shared/core';

import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

import SearchForm from './SearchForm';
import NewsResults from './NewsResults';

import { newsService } from '../../../services';
import { useAppSelector } from '../../../services/redux/hooks';

const SearchContainer: FunctionComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const accessToken = useAppSelector((state) => state.auth.accessToken)!;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const preferences = useAppSelector((state) => state.user.preferences)!;

  const [news, setNews] = useState<Promise<NewsResult[]>>(Promise.resolve([]));

  const handleSubmit = (data: Omit<NewsGetRequestBody, 'source'>) => {
    const results = newsService
      .getNews(accessToken, { source: preferences.source, query: data.query, filters: data.filters })
      .then((res) => res.data.results);
    setNews(results);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <SearchForm onSubmit={handleSubmit} />
      <Divider sx={{ my: 3 }} />
      <NewsResults news={news} />
    </Container>
  );
};

export default SearchContainer;
