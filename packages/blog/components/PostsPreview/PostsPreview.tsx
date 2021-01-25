import * as React from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import { GoNext } from '@juliosoto/components/Icons';
import { TPostPreview } from '@juliosoto/lib/types';
import { Timestamp } from '@juliosoto/components';
import dynamic from 'next/dynamic';

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
  const [visits, setVisits] = React.useState(0);

  React.useEffect(() => {
    const getVisits = () =>
      postsPreviewData.map(async ({ slug }) => {
        try {
          const response = await fetch(`/api/visits/?slug=${slug}`, {
            method: 'GET',
          });
          if (response.status === 200) {
            const data = await response.json();

            setVisits(data.post.visits);
          }
        } catch (error) {
          console.log(error);
        }
      });
    getVisits();
  }, [postsPreviewData]);

  return (
    <section css={styles}>
      {postsPreviewData.map((post, idx) => (
        <Link href={`/${post.slug}`} key={idx}>
          <a>
            <h4>{post.title}</h4>
            <Timestamp>Published on {post.publishedAt}</Timestamp>
            <DynamicVisits slug={post.slug} visits={visits} />
            <br />
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
