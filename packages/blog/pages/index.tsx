import * as React from 'react';
import { Newsletter, PageHeader } from '@juliosoto/components';
import { PostsPreview } from '../components';
import Head from 'next/head';
import { getBlogPostsData } from '@juliosoto/lib/mdx';
import { css } from '@emotion/react';
import { TPostPreview } from '@juliosoto/lib/types';
import { motion } from 'framer-motion';
import { variants } from '@juliosoto/lib/styles';

const styles = {
  postsPreview: css`
    margin: 0 auto;
    max-width: var(--content-width);
  `,
};

interface IndexProps {
  recentPosts: TPostPreview[];
}

export default function Index({ recentPosts }: IndexProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Julio Soto - Blog</title>
      </Head>
      <PageHeader
        title={
          <motion.h1
            variants={variants.fadeIn}
            initial="initial"
            animate="animate"
          >
            /blog
          </motion.h1>
        }
        description={
          <motion.div
            variants={variants.fadeIn}
            initial="initial"
            animate="animate"
          >
            <span role="img" aria-label="hi">
              👋🏻
            </span>{' '}
            Hi there, welcome to my blog. If you see this it&apos;s because this
            project is very much in an early stage, thus there isn&apos; tons of
            content in here yet. Eventually, there will be posts about my
            experiences and learnings working as a Software Developer.
          </motion.div>
        }
        tags={['React', 'TypeScript', 'GraphQL', '...and so much more']}
      />
      <br />
      <div css={styles.postsPreview}>
        <PostsPreview postsPreviewData={recentPosts} />
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
