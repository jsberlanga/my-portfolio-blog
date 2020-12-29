import * as React from 'react';
import { PageHeader } from '@juliosoto/components/';
import PostsPreview from '../components/PostsPreview';
import Head from 'next/head';

import { getBlogPostsData } from '@juliosoto/utils/mdx';

export default function Index({ postsData }) {
  return (
    <React.Fragment>
      <Head>
        <title>Julio Soto - All Posts</title>
      </Head>
      <PageHeader title={<h2>/posts</h2>} />
      <br />
      <PostsPreview postsData={postsData} />
      <br />
    </React.Fragment>
  );
}

export const getStaticProps = async () => {
  const postsData = getBlogPostsData();

  return {
    props: { postsData },
  };
};
