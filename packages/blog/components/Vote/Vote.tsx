import * as React from 'react';
import { css } from '@emotion/react';
import { useUserScroll } from '@juliosoto/lib/hooks';
import { Star } from '@juliosoto/components/Icons';
import { getMQ } from '@juliosoto/lib/styles';
import { motion } from 'framer-motion';
import { MAX_VOTES_ALLOWED } from '@juliosoto/lib/constants';
import { useUserDispatch, useUserState } from '../../context';

const styles = {
  root: css`
    cursor: pointer;
    position: fixed;
    right: var(--gap);
    top: var(--gap);
    top: 33%;

    ${getMQ('mobile')} {
      display: none;
    }
  `,
  count: css`
    user-select: none;
    position: absolute;
    top: -25px;
    right: -25px;

    ${getMQ('mobile')} {
      display: none;
    }
  `,
};

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: 'easeIn' } },
};

const Vote = ({ slug }: { slug: string }) => {
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
        const userVotes = post.votes.filter((id: string) => id === user._id);
        votesFromUser = userVotes.length;
      }

      if (postState.votesFromUser === 0) {
        setPostState({ ...post, totalVotes, votesFromUser });
      }
    };

    getPostData();
  }, [user, slug, postState.votesFromUser]);

  const handleVote = async () => {
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

    if (postState.votesFromUser >= MAX_VOTES_ALLOWED - 1) {
      setConfetti(true);

      setTimeout(() => {
        setConfetti(false);
      }, 3000);
    }

    if (postState.votesFromUser >= MAX_VOTES_ALLOWED) {
      return;
    }

    setPostState({
      ...postState,
      votesFromUser: postState.votesFromUser + 1,
      totalVotes: postState.totalVotes + 1,
    });

    const body = { slug, userId };

    const res = await fetch('/api/votes', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return await res.json();
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
          {postState.votesFromUser >= MAX_VOTES_ALLOWED && ' MAX'}
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
