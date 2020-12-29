import { GetServerSideProps, GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { getBlogPostsData } from '@juliosoto/utils/mdx';
import { css } from '@emotion/react';
import { PageHeader, ScrollProgress } from '@juliosoto/components';
import * as React from 'react';
import Head from 'next/head';

const styles = {
  root: css`
    margin: 0 auto;
    max-width: var(--content-width);
  `,
  post: css`
    margin: 0 auto;
    max-width: var(--post-width);
  `,
};

export default function Post({ postMeta }) {
  const MDXPost = dynamic(
    () => import(`@juliosoto/blog/content/${postMeta.slug}.mdx`),
  );

  return (
    <React.Fragment>
      <Head>
        <title>{postMeta.title} &mdash; Julio Soto</title>
        <meta name="description" content={postMeta.summary} />
        <meta property="og:title" content={postMeta.title} />
        <meta name="og:description" content={postMeta.summary} />
        <meta property="og:url" content="https://blog.juliosoto.dev" />
        <meta property="og:type" content="website" />
      </Head>
      <div css={styles}>
        <ScrollProgress />
        <PageHeader
          title={<h2>{postMeta.title}</h2>}
          description={postMeta.summary}
          tags={postMeta.tags}
        />
        <div css={styles.post}>
          <MDXPost />
        </div>
      </div>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { props: {} };
  const postsData = getBlogPostsData();

  const postMeta = postsData.find((postData) => postData.slug === params.slug);

  return { props: { postMeta } };
};

export async function getStaticPaths() {
  const postsData = getBlogPostsData();

  const paths = postsData.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}
