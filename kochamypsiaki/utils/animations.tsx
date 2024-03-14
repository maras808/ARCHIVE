export const textHover = {
  fromWhite: {
    color: "#f8f8f8",
  },
  fromBlack: {
    color: "#1F232C",
  },
  animate: {
    color: "#28ADD1",
  },
  transition: {
    type: "spring",
    stiffness: 200,
    damping: 30,
  },
};

export const fadeImage = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    type: "tween",
    duration: 1,
    ease: "easeInOut",
  },
};
