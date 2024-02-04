import { Helmet } from 'react-helmet-async';

import Layout from '../modules/shared/components/Layout';
import NewsContainer from '../modules/News/components/NewsContainer';

export default function News() {
  return (
    <>
      <Helmet title="News" />

      <Layout>
        <NewsContainer />
      </Layout>
    </>
  );
}
