import * as React from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import { GoNext } from '@juliosoto/components/Icons';
import { TPostPreview } from '@juliosoto/lib/types';
import { Timestamp } from '@juliosoto/components';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { variants } from '@juliosoto/lib/styles';

const DynamicVisits = dynamic(() => import('../Visits'));

const styles = css`
  max-width: var(--content-width);
  margin: 0 auto var(--gap);

  button {
    font-weight: 600;
  }
`;

interface PostPreviewProps {
  postsPreviewData: TPostPreview[];
}

const PostsPreview: React.FC<PostPreviewProps> = ({ postsPreviewData }) => {
  return (
    <motion.section
      variants={variants.fadeIn}
      initial="initial"
      animate="animate"
      css={styles}
    >
      {postsPreviewData.map((post, idx) => (
        <Link href={`/${post.slug}`} key={idx}>
          <a>
            <h4>{post.title}</h4>
            <Timestamp>Published on {post.publishedAt}</Timestamp>
            <DynamicVisits slug={post.slug} />
            <br />
            <p className="small">{post.summary}</p>
            <button>
              Read more <GoNext />
            </button>
          </a>
        </Link>
      ))}
    </motion.section>
  );
};

export default PostsPreview;
