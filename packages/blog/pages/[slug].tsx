import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { getBlogPostsData } from '@juliosoto/lib/mdx';
import { css } from '@emotion/react';
import {
  Newsletter,
  NotFound,
  PageHeader,
  ScrollProgress,
  Timestamp,
} from '@juliosoto/components';
import * as React from 'react';
import Head from 'next/head';
import { getPostBySlug } from '@juliosoto/lib/mongodb';
import { TDbPost } from '@juliosoto/lib/types';
// import DynamicVisits from '../components/Visits';

const DynamicVisits = dynamic(() => import('../components/Visits'));

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
    publishedAt: string;
    slug: string;
    summary: string;
    tags: string[];
  } | null;
  dbPost: TDbPost;
}

export default function Post({ postMeta, dbPost }: PostProps) {
  React.useEffect(() => {
    const handleVisit = async () => {
      try {
        const response = await fetch('api/visits', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ slug: postMeta?.slug }),
        });
        if (response.status === 200) {
          const data = await response.json();

          return data;
        }
      } catch (error) {
        console.log(error);
      }
    };
    handleVisit();
  }, [postMeta?.slug]);

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
          title={<React.Fragment>{postMeta.title}</React.Fragment>}
          description={postMeta.summary}
          tags={postMeta.tags}
        />
        <div css={styles.post}>
          <MDXPost />
          <br />
          <DynamicVisits slug={postMeta.slug} />
          <Timestamp>Published on {postMeta.publishedAt}</Timestamp>
          <hr />
          <br />
          <Newsletter />
        </div>
      </div>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) return { props: {} };

  const postsData = getBlogPostsData();

  const postMeta =
    postsData?.find((postData) => postData.slug === params.slug) ?? null;

  const dbPostData = await getPostBySlug({ slug: params.slug?.toString() });

  if (postMeta && dbPostData && postMeta.slug === dbPostData.slug) {
    return {
      props: {
        postMeta,
        dbPost: { slug: dbPostData.slug, visits: dbPostData.visits },
      },
    };
  }

  return { props: { postMeta, dbPost: null } };
};

export async function getStaticPaths() {
  const postsData = getBlogPostsData();

  const paths = postsData.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
}
