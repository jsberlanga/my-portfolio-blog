import * as React from 'react';
import { css } from '@emotion/react';
import { useUserScroll } from '@juliosoto/utils/hooks';
import { Star } from '@juliosoto/components/Icons';
import { useUserDispatch, useUserState } from '../../context';
import { getMQ } from '@juliosoto/utils/styles';

const styles = {
  root: css`
    position: fixed;
    right: var(--gap);
    top: var(--gap);

    ${getMQ('desktop')} {
      top: 33%;
    }

    #canvas {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  `,
  count: css`
    position: absolute;
    top: -20px;
    right: -20px;
  `,
};

export const MAX_VOTES = 10;

const Vote = ({ dbPost, slug }) => {
  const { user } = useUserState();
  const { dispatch } = useUserDispatch();
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

    let userId = user?._id;

    if (!user) {
      const response = await fetch('/api/user', {
        method: 'POST',
      });

      if (response.ok) {
        const { _id } = await response.json();

        userId = _id;

        dispatch({ type: 'SET_USER', payload: { user: { _id } } });
      }
    }

    const body = { slug, userId };

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
      {postState.votesFromUser >= MAX_VOTES && (
        <div
          style={{
            backgroundImage: 'url("/confetti2.gif")',
            width: '7.5rem',
            height: '7.5rem',
            position: 'absolute',
            top: '-2.5rem',
            left: '-2.5rem',
            opacity: 0.5,
          }}
        />
      )}
    </div>
  );
};

export default Vote;
