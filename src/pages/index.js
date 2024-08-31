// @ts-check
import React from 'react';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Blog" keywords={['Sai Sumanth Blog', 'Sai7xp Blog', 'Sai7xp Home']} />
      <PostList />
    </Layout>
  );
};

export default IndexPage;
