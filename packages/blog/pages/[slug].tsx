import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { getBlogPostsData } from '@juliosoto/lib/mdx';
import { css } from '@emotion/react';
import { NotFound, PageHeader, ScrollProgress } from '@juliosoto/components';
import * as React from 'react';
import Head from 'next/head';
import { getPostBySlug } from '@juliosoto/lib/mongodb';

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

interface PostProps {
  postMeta: {
    title: string;
    slug: string;
    summary: string;
    tags: string[];
  } | null;
  dbPost: boolean;
}

export default function Post({ postMeta, dbPost }: PostProps) {
  if (!postMeta) return <NotFound />;

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
        {dbPost ? <DynamicVote slug={postMeta.slug} /> : null}
      </div>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) return { props: {} };

  const postsData = getBlogPostsData();

  const postMeta =
    postsData?.find((postData) => postData.slug === params.slug) ?? null;

  const [dbPostData] = await getPostBySlug({ slug: params.slug?.toString() });

  if (postMeta && dbPostData && postMeta.slug === dbPostData.slug) {
    return { props: { postMeta, dbPost: true } };
  }

  return { props: { postMeta, dbPost: false } };
};

export async function getStaticPaths() {
  const postsData = getBlogPostsData();

  const paths = postsData.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
}
