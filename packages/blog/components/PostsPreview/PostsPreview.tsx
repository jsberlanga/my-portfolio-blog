import * as React from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import { GoNext } from '@juliosoto/components/Icons';
import { TPostPreview } from '@juliosoto/lib/types';
import { Timestamp } from '@juliosoto/components';
import { motion } from 'framer-motion';
import { getMQ, variants } from '@juliosoto/lib/styles';
import dynamic from 'next/dynamic';

const DynamicVisits = dynamic(() => import('../Visits'));

const styles = css`
  max-width: var(--content-width);
  margin: 0 auto var(--gap);

  h4 {
    font-weight: 800;
    margin-bottom: var(--gap-unit-xs);
  }

  button {
    font-weight: 600;
  }

  .teaser {
    & > * {
      margin-bottom: var(--gap-unit-xs);
    }
  }

  ${getMQ('desktop')} {
    .teaser {
      display: flex;

      justify-content: space-between;

      &--text {
        width: min(70ch, 100%);
      }

      &--details {
        text-align: right;
      }
    }
  }

  article {
    margin-bottom: var(--gap-unit);
    padding-bottom: var(--gap-unit-s);
    box-shadow: 0 8px 0 hsl(207deg 31% 85%);
  }
`;

interface PostPreviewProps {
  postsPreviewData: Array<TPostPreview & { visits: number }>;
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
        <article key={`/${post.slug}-${idx}`}>
          <Link href={`/${post.slug}`}>
            <a>
              <h4>{post.title}</h4>
              <div className="teaser">
                <p className="teaser--text small">{post.summary}</p>
                <div className="teaser--details">
                  <DynamicVisits slug={post.slug} />
                  <Timestamp>{post.publishedAt}</Timestamp>
                </div>
              </div>
              <button>
                Read more <GoNext />
              </button>
            </a>
          </Link>
        </article>
      ))}
    </motion.section>
  );
};

export default PostsPreview;
