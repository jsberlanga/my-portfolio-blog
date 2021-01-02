import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { getBlogPostsData } from '@juliosoto/utils/mdx';
import { css } from '@emotion/react';
import { PageHeader, ScrollProgress } from '@juliosoto/components';
import * as React from 'react';
import Head from 'next/head';
import { getPostBySlug } from '@juliosoto/utils/mongodb';

const DynamicVote = dynamic(() => import('../components/Vote'));

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

export default function Post({ postMeta, dbPost }) {
  const MDXPost = dynamic(
    () => import(`@juliosoto/blog/content/${postMeta.slug}.mdx`),
  );

  console.log({ postMeta, dbPost });

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
        <DynamicVote dbPost={dbPost} slug={postMeta.slug} />
      </div>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { props: {} };

  const postsData = getBlogPostsData();
  const postMeta = postsData.find((postData) => postData.slug === params.slug);

  const [dbPostData] = await getPostBySlug({ slug: params.slug });

  console.log('dbPostData', dbPostData);

  if (postMeta.slug !== dbPostData.slug) {
    return { props: { postMeta, dbPost: null } };
  }

  const dbPost = {
    slug: dbPostData.slug,
    votes: dbPostData.votes,
    totalVotes: dbPostData.votes.length,
    votesFromUser: 0,
  };
  console.log('dbPost', dbPost);

  return { props: { postMeta, dbPost } };
};

export async function getStaticPaths() {
  const postsData = getBlogPostsData();

  const paths = postsData.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}
