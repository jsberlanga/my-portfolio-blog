export const ease = [0.6, -0.05, 0.01, 0.9];

export const variants = {
  fadeIn: {
    initial: {
      opacity: 0,
      visibility: 'hidden' as const,
    },
    animate: {
      opacity: 1,
      visibility: 'visible' as const,
      transition: { duration: 0.9, ease },
    },
    exit: {
      visibility: 'hidden' as const,
    },
  },
};
