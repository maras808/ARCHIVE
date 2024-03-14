export const SimpleFade = {
  on: {
    opacity: 1,
  },
  off: {
    opacity: 0,
  },
};

export const Rotate = {
  on: {
    transform: "rotate(90deg)",
  },
  off: {
    transform: "rotate(-90deg)",
  },
};

export const ShadowAnimation = {
  on: {
    boxShadow: "5px 5px 0px 0px #9263d9",
  },
  off: {
    boxShadow: "0px 0px 0px 0px #9263d9",
  },
};

export const TextShadowAnimation = {
  on: {
    textShadow: ".07em .07em 0px #9263d9",
    transition: {
      duration: 0.1,
    },
  },
  off: {
    textShadow: "0em 0em 0px #9263d9",
    transition: {
      duration: 0.1,
    },
  },
};

export const StaggerChildren = {
  parent: {
    on: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
        duration: 0.1,
      },
    },
    off: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        duration: 0.1,
      },
    },
  },
  children: {
    on: {
      x: 0,
      opacity: 1,
    },
    off: {
      x: -10,
      opacity: 0,
    },
  },
};

export const Enlarge = {
  on: { transform: "scale(1.1)" },
  off: { transform: "scale(1.0)" },
};

export const ShadowWithEnlarge = {
  on: {
    boxShadow: "5px 5px 0px 0px #9263d9",
    transform: "scale(1.1)",
  },
  off: {
    boxShadow: "0px 0px 0px 0px #9263d9",
    transform: "scale(1.0)",
  },
};
