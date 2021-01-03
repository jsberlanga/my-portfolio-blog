/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { getMQ } from '@juliosoto/lib/styles';
import {
  motion,
  useMotionTemplate,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import * as React from 'react';

const styles = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 10px;
  background: linear-gradient(to left, var(--c-special-02), var(--c-special));

  ${getMQ('mobile')} {
    display: none;
  }
`;

export const ScrollProgress = () => {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const width = useMotionTemplate`${yRange}%`;

  return <motion.div css={styles} style={{ width }} />;
};

export default ScrollProgress;
