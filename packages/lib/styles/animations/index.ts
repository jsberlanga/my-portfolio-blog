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
};
