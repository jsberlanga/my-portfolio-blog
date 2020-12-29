import * as React from 'react';
import { Newsletter, PageHeader } from '@juliosoto/components';
import PostsPreview from '../components/PostsPreview';
import Head from 'next/head';
import { getBlogPostsData } from '@juliosoto/utils/mdx';
import { css } from '@emotion/react';

const styles = {
  postsPreview: css`
    margin: 0 auto;
    max-width: var(--content-width);
  `,
};

export default function Index({ recentPosts }) {
  return (
    <React.Fragment>
      <Head>
        <title>Julio Soto - Blog</title>
      </Head>
      <PageHeader
        title={<h1>/blog</h1>}
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias corrupti cum velit obcaecati dolor impedit consectetur quas itaque saepe illo tempore totam id rem maiores nostrum assumenda"
        tags={['React', 'TypeScript', 'GraphQL', '...and so much more']}
      />
      <br />
      <div css={styles.postsPreview}>
        <PostsPreview postsData={recentPosts} />
      </div>
      <br />
      <Newsletter />
    </React.Fragment>
  );
}

export const getStaticProps = async () => {
  const postsData = getBlogPostsData();

  const recentPosts = postsData.slice(0, 2);

  return {
    props: { recentPosts },
  };
};
