import * as React from 'react';
import { css } from '@emotion/react';
import { useUserScroll } from '@juliosoto/utils/hooks';
import { Star } from '@juliosoto/components/Icons';
import { useUserState } from '../../context';

const styles = {
  root: css`
    position: fixed;
    right: var(--gap);
    top: 33%;
  `,
  count: css`
    position: absolute;
    top: -20px;
    right: -20px;
  `,
};

const MAX_VOTES = 10;

const Vote = ({ dbPost, slug }) => {
  const { user } = useUserState();
  const scrolled = useUserScroll({ show: 100, hide: 100 });
  const [postState, setPostState] = React.useState(dbPost);

  React.useEffect(() => {
    if (!user) return;

    const votesFromUser = dbPost.votes.filter((id) => id === user._id);

    setPostState({ ...postState, votesFromUser: votesFromUser.length });
  }, [user]);

  const handleVote = async () => {
    if (postState.votesFromUser >= MAX_VOTES) {
      return;
    }

    const body = { slug, userId: user._id };

    const res = await fetch('/api/votes', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (data.result.ok) {
      setPostState({
        ...postState,
        totalVotes: postState.totalVotes + 1,
        votesFromUser: postState.votesFromUser + 1,
      });
    }

    return data;
  };

  if (!scrolled) return null;

  return (
    <div
      css={styles.root}
      onClick={handleVote}
      style={{
        cursor:
          postState.votesFromUser >= MAX_VOTES ? 'not-allowed' : 'pointer',
      }}
    >
      <Star votes={postState.votesFromUser} />
      <div css={styles.count}>
        <span className="small">{postState.totalVotes}</span>
        <span style={{ fontSize: '0.5rem' }}>
          {postState.votesFromUser >= MAX_VOTES && ' MAX'}
        </span>
      </div>
    </div>
  );
};

export default Vote;
