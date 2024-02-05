import { type FunctionComponent } from 'react';

import Container from '@mui/material/Container';

import NewsResults from './NewsResults';

import { newsService } from '../../../services';
import { useAppSelector } from '../../../services/redux/hooks';

const NewsContainer: FunctionComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const accessToken = useAppSelector((state) => state.auth.accessToken)!;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const preferences = useAppSelector((state) => state.user.preferences)!;

  const news = newsService
    .getNews(accessToken, { source: preferences.source, filters: { sections: preferences.sections } })
    .then((res) => res.data.results);

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <NewsResults news={news} />
    </Container>
  );
};

export default NewsContainer;
