import * as React from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { Spinner } from '@juliosoto/components';
import { transition } from '@juliosoto/lib/styles';
import { useWindowHeight } from '@juliosoto/lib/hooks';

const styles = {
  root: css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: calc(100% + 1rem);
    overflow: hidden;
    background-color: var(--c-dark);
    color: var(--c-light);
    display: grid;
    place-items: center;
    z-index: 999;
    .wrapper {
      text-align: right;
      > div {
        padding: 2px 10px;
        font-size: 1.05rem;
        text-align: right;
        letter-spacing: -0.5px;
      }
      .name {
        background: var(--c-special);
        color: var(--c-dark);
        font-weight: 800;
        font-size: clamp(4rem, 20vw, 5rem);
        line-height: 6rem;
        text-transform: lowercase;
        letter-spacing: -2px;
      }
      .sentence {
        display: inline-block;
      }
    }
  `,
};

const sentences = ['Web developer enthusiast', 'In ♥ with TypeScript + React'];

const variant = {
  container: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        ...transition,
        delayChildren: 0.15,
        staggerChildren: 0.02,
      },
    },
  },
  children: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition,
    },
  },
};

const Loading: React.FC = () => {
  const [currentSentence, setCurrentSentence] = React.useState(0);
  const windowHeight = useWindowHeight();

  React.useEffect(() => {
    const handleSetCurrentSentence = setTimeout(() => {
      if (currentSentence >= sentences.length - 1) {
        return setCurrentSentence(0);
      }
      return setCurrentSentence((currentSentence) => currentSentence + 1);
    }, 1500);

    return () => clearTimeout(handleSetCurrentSentence);
  }, [currentSentence]);

  const currentSentenceSplit = sentences[currentSentence]?.split('');

  return (
    <motion.div
      css={styles.root}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: windowHeight }}
      transition={{ ...transition }}
    >
      <motion.div
        className="wrapper"
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <div className="name">Julio Soto</div>
        <motion.div
          className="sentence"
          variants={variant.container}
          initial="initial"
          animate="animate"
          key={currentSentence}
        >
          {currentSentenceSplit?.map((char, idx) => (
            <motion.span
              className="sentence--char"
              key={idx}
              variants={variant.children}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        <Spinner />
      </motion.div>
    </motion.div>
  );
};

export default Loading;
