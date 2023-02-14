export const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
    scale: 0.5,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: '100vw',
    scale: 0.5,
  },
};

export const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.75,
};

export const listItemVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      opacity: 1,
    },
  },
  hidden: {
    opacity: 0,
    x: -100,
  },
};
