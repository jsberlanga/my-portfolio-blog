import * as React from 'react';
import { css } from '@emotion/react';
import { useUserScroll } from '@juliosoto/utils/hooks';
import { Star } from '@juliosoto/components/Icons';
import { useUserDispatch, useUserState } from '../../context';
import { getMQ } from '@juliosoto/utils/styles';
import { motion } from 'framer-motion';

const styles = {
  root: css`
    cursor: pointer;
    position: fixed;
    right: var(--gap);
    top: var(--gap);
    top: 33%;

    ${getMQ('mobile')} {
      left: 0;
      right: 0;
      top: 0;
      height: 2rem;
      background: var(--c-text);

      svg {
        position: absolute;
        right: calc(var(--gap) * 2);
        padding: 0.2rem;
        height: 100%;
      }
    }
  `,
  count: css`
    position: absolute;
    top: -20px;
    right: -20px;

    ${getMQ('mobile')} {
      position: absolute;
      top: 0;
      right: var(--gap);
      color: var(--c-background);
    }
  `,
};

export const MAX_VOTES = 10;

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: 'easeIn' } },
};

const Vote = ({ slug }) => {
  const { user } = useUserState();
  const { dispatch } = useUserDispatch();
  const scrolled = useUserScroll({ show: 100, hide: 0 });
  const [postState, setPostState] = React.useState({
    slug,
    totalVotes: 0,
    votes: [],
    votesFromUser: 0,
  });
  const [confetti, setConfetti] = React.useState(false);

  React.useEffect(() => {
    const getPostData = async () => {
      const res = await fetch(`/api/post/${slug}`);
      const { post } = await res.json();

      const totalVotes = post.votes.length;
      let votesFromUser;

      if (!user) {
        votesFromUser = 0;
      } else {
        const userVotes = post.votes.filter((id) => id === user._id);
        votesFromUser = userVotes.length;
      }

      setPostState({ ...post, totalVotes, votesFromUser });
    };

    getPostData();
  }, [user]);

  const handleVote = async () => {
    if (postState.votesFromUser >= MAX_VOTES - 1) {
      setConfetti(true);

      setTimeout(() => {
        setConfetti(false);
      }, 3000);
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
        votes: [...postState.votes, userId],
        votesFromUser: postState.votesFromUser + 1,
        totalVotes: postState.totalVotes + 1,
      });
    }

    return data;
  };

  if (!scrolled || !postState) return null;

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      css={styles.root}
      onClick={handleVote}
    >
      <Star votes={postState.votesFromUser} />
      <div css={styles.count}>
        <span className="small">{postState.totalVotes}</span>
        <span style={{ fontSize: '0.5rem' }}>
          {postState.votesFromUser >= MAX_VOTES && ' MAX'}
        </span>
      </div>
      {confetti ? (
        <motion.div
          variants={variants}
          style={{
            backgroundImage: 'url("/images/common/confetti.gif")',
            width: '100%',
            height: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
          }}
        />
      ) : null}
    </motion.div>
  );
};

export default React.memo(Vote);
