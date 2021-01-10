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
    background-color: #1b2833;
    color: #e7e9ec;
    display: grid;
    place-items: center;
    z-index: 999;
    .wrapper {
      text-align: right;
      > div {
        font-size: clamp(1rem, 5vw, 1.2rem);
        text-align: center;
        font-weight: 800;
      }
      .name {
        background: #bcacf2;
        padding: 0 20px;
        color: #1b2833;
        font-size: clamp(3.5rem, 4vw, 4.5rem);
        line-height: clamp(4rem, 15vh, 5rem);
        text-transform: lowercase;
        letter-spacing: -2px;
      }
      .sentence {
        color: #bcacf2;
        font-size: clamp(1.4rem, 4vw, 1.5rem);
        text-transform: uppercase;
        letter-spacing: -0.5px;
      }
    }
  `,
};

const sentences = ['FullStack Developer'];

const variant = {
  container: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        ...transition,
        delayChildren: 0.4,
        staggerChildren: 0.025,
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
      animate={{ opacity: 1, transition }}
      exit={{
        y: windowHeight,
        scale: 0.95,
        background: '#bcacf2',
        transition: {
          ...transition,
          duration: 1.25,
        },
      }}
    >
      <motion.div
        className="wrapper"
        exit={{
          opacity: 0,
          y: 20,
          scale: 0.9,
          transition: { ...transition, duration: 0.4 },
        }}
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
