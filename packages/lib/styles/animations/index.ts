export const ease = [0.6, -0.05, 0.01, 0.9];
export const transition = { duration: 0.9, ease };

export const variants = {
  fadeIn: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition,
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
        delayChildren: 0.25,
        staggerChildren: 0.02,
      },
    },
  },
  children: {
    scale: {
      initial: { opacity: 0, scale: 1.5, y: 20 },
      animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        display: 'inline-block',
        transition: {
          ease,
          duration: 0.6,
        },
      },
    },
    moveUp: {
      initial: { opacity: 0, y: 20 },
      animate: {
        opacity: 1,
        y: 0,
        display: 'inline-block',
        transition: { ...transition, delay: 0.5 },
      },
    },
  },
};
