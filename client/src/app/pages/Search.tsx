import { Helmet } from 'react-helmet-async';

import Layout from '../modules/shared/components/Layout';
import SearchContainer from '../modules/News/components/SearchContainer';

export default function Search() {
  return (
    <>
      <Helmet title="Search" />

      <Layout>
        <SearchContainer />
      </Layout>
    </>
  );
}
