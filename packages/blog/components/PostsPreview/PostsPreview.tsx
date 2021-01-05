import * as React from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import { GoNext } from '@juliosoto/components/Icons';
import { TPostPreview } from '@juliosoto/lib/types';

const styles = css`
  max-width: var(--content-width);
  margin: 0 auto var(--gap);

  time {
    color: var(--c-special);
    display: block;
    margin-bottom: 1rem;
  }

  button {
    font-weight: 600;
  }
`;

interface PostPreviewProps {
  postsPreviewData: TPostPreview[];
}

const PostsPreview: React.FC<PostPreviewProps> = ({ postsPreviewData }) => {
  return (
    <section css={styles}>
      {postsPreviewData.map((post, idx) => (
        <Link href={`/${post.slug}`} key={idx}>
          <a>
            <h4>{post.title}</h4>
            <time className="xsmall">{post.publishedAt}</time>
            <p className="small">{post.summary}</p>
            <button>
              Read more <GoNext />
            </button>
          </a>
        </Link>
      ))}
    </section>
  );
};

export default PostsPreview;
