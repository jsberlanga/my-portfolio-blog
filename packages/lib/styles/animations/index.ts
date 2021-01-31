export const ease = [0.6, -0.05, 0.01, 0.9];
export const transition = { duration: 0.9, ease };

export const variants = {
  fadeIn: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { ...transition, delay: 0.5 },
    },
    exit: {
      visibility: 'hidden' as const,
      transition,
    },
  },
  container: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        ...transition,
        delayChildren: 0.75,
        staggerChildren: 0.045,
      },
    },
  },
  children: {
    scale: {
      initial: { opacity: 0, scale: 1.5 },
      animate: {
        opacity: 1,
        scale: 1,
        display: 'inline-block',
        transition,
      },
    },
    moveUp: {
      initial: { opacity: 0, y: 20, scale: 0.99 },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition,
      },
    },
  },
};
