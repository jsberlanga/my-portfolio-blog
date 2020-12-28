import * as React from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import { GoNext } from '@juliosoto/components/Icons';

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

const PostsPreview = ({ postsData }) => {
  return (
    <section css={styles}>
      {postsData.map((post, idx) => (
        <Link href={`/${post.slug}`} key={idx}>
          <a>
            <h5>{post.title}</h5>
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
