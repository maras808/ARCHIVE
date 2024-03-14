export const shuffle = {
  fromTop: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  center: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  toBottom: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export const slice = {
  on: {
    backgroundPositionX: "100%",
  },
  off: {
    backgroundPositionX: "0%",
  },
  transition: {
    type: "spring",
    stiffness: 100,
    damping: 20,
  },
};
export const fade = {
  on: {
    opacity: 1,
  },
  off: {
    opacity: 0,
  },
};

export const enlarge = {
  on: {
    transform: "scale(1.3)",
  },
  off: {
    transform: "scale(1.0)",
  },
  transition: {
    type: "spring",
    stiffness: 120,
    damping: 10,
  },
};

export const comeIn = {
  left: {
    off: {
      transform: "translate(50%, 0%)",
      opacity: 0,
    },
    on: {
      transform: "translate(0%, 0%)",
      opacity: 1,
    },
  },
  right: {
    off: {
      transform: "translate(-50%, 0%)",
      opacity: 0,
    },
    on: {
      transform: "translate(0%, 0%)",
      opacity: 1,
    },
  },
  bottom: {
    off: {
      transform: "translate(0%, -50%)",
      opacity: 0,
    },
    on: {
      transform: "translate(0%, 0%)",
      opacity: 1,
    },
  },
  top: {
    off: {
      transform: "translate(0%, 50%)",
      opacity: 0,
    },
    on: {
      transform: "translate(0%, 0%)",
      opacity: 1,
    },
  },
};

export const exploreButton = {
  initial: {
    transform: "scale(1.0)",
  },
  hover: {
    transform: "scale(1.2)",
  },
  tap: {
    transform: "scale(0.9)",
  },
  transition: {
    type: "spring",
    stiffness: 140,
    damping: 20,
  },
};

export const enter = {
  off: {
    transform: "scale(0)",
    opacity: 0,
    y: 20,
  },
  on: {
    transform: "scale(1)",
    opacity: 1,
    y: 0,
  },
  transition: {
    type: "spring",
    stiffness: 120,
    damping: 10,
  },
};

export const currentSectionIcon = {
  off: {
    transform: "scale(1)",
    backgroundColor: "var(--main)",
  },
  on: {
    transform: "scale(1.3)",
    backgroundColor: "var(--main-lighter)",
  },
  transition: {
    type: "spring",
    stiffness: 120,
    damping: 10,
  },
};
