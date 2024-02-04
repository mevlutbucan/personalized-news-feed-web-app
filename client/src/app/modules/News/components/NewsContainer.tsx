import { type FunctionComponent, Suspense } from 'react';
import { Await } from 'react-router-dom';
import { NewsResult } from '@shared/core';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { newsService } from '../../../services';
import { useAppSelector } from '../../../services/redux/hooks';

const NewsContainer: FunctionComponent = () => {
  const accessToken = useAppSelector((state) => state.auth.accessToken)!;
  const preferences = useAppSelector((state) => state.user.preferences)!;

  const news = newsService
    .getNews(accessToken, { source: preferences.source, filters: { sections: preferences.sections } })
    .then((res) => res.data.results);

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Suspense
          fallback={
            <Grid item xs={12} display="flex" height="calc(100vh - 128px)" alignItems="center" justifyContent="center">
              <CircularProgress size="10rem" />
            </Grid>
          }
        >
          <Await resolve={news}>
            {(results: NewsResult[]) =>
              results.map((result, index) => (
                <Grid key={index} item xs={12} md={6} xl={4}>
                  <Card sx={{ height: '100%' }}>
                    <Stack height="100%">
                      <CardMedia image={result.fields.thumbnail} sx={{ height: 300 }} />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography component="p">{result.webTitle}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" href={result.webUrl} endIcon={<NavigateNextIcon />}>
                          to Article
                        </Button>
                      </CardActions>
                    </Stack>
                  </Card>
                </Grid>
              ))
            }
          </Await>
        </Suspense>
      </Grid>
    </Container>
  );
};

export default NewsContainer;
