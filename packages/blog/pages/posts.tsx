import * as React from 'react';
import Head from 'next/head';
import { PageHeader } from '@juliosoto/components';
import { getBlogPostsData } from '@juliosoto/lib/mdx';
import { PostsPreview } from '../components';
import { TPostPreview } from '@juliosoto/lib/types';

interface PostsProps {
  postsPreviewData: Array<TPostPreview & { visits: number }>;
}

export default function Posts({ postsPreviewData }: PostsProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Julio Soto - All Posts</title>
      </Head>
      <PageHeader title={<h2>/posts</h2>} />
      <br />
      <PostsPreview postsPreviewData={postsPreviewData} />
      <br />
    </React.Fragment>
  );
}

export const getStaticProps = async () => {
  const postsPreviewData = getBlogPostsData();

  return {
    props: { postsPreviewData },
  };
};
