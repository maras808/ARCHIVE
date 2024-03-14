export const fade = {
  initial: {
    color: "#e4e6eb",
  },
  animate: {
    color: "#FC5C65",
  },
  transition: {
    type: "tween",
    ease: "easeInOut",
    duration: 0.2,
  },
};

export const iconfade = {
  hidden: {
    opacity: 0,
  },
  visable: {
    opacity: 1,
  },
  transition: {
    type: "tween",
    ease: "easeInOut",
    duration: 0.3,
  },
};

export const custombutton = {
  primary: {
    initial: {
      backgroundColor: "#FC5C65",
      color: "#000",
      border: "solid 1px #00000000",
    },
    onHover: {
      backgroundColor: "#00000000",
      color: "#e4e6eb",
      border: "solid 1px #ffffffff",
    },
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.3,
    },
  },
  secondary: {
    initial: {
      backgroundColor: "#FC5C65",
      color: "#000",
      border: "solid 1px #00000000",
    },
    onHover: {
      backgroundColor: "#00000000",
      color: "#e4e6eb",
      border: "solid 1px #ffffffff",
    },
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

export const join = {
  stagger: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  },
  item: {
    fromLeft: {
      tween: {
        hidden: { x: "-2rem", opacity: 0 },
        show: { x: "0rem", opacity: 1 },
        transition: {
          type: "tween",
          ease: "easeInOut",
          duration: 0.5,
        },
      },
      spring: {
        hidden: { x: "-2rem", opacity: 0 },
        show: { x: "0rem", opacity: 1 },
        transition: {
          type: "spring",
          damping: 40,
          stiffness: 200,
        },
      },
    },
    fromRight: {
      tween: {
        hidden: { x: "2rem", opacity: 0 },
        show: { x: "0rem", opacity: 1 },
        transition: {
          type: "tween",
          ease: "easeInOut",
          duration: 0.5,
        },
      },
      spring: {
        hidden: { x: "2rem", opacity: 0 },
        show: { x: "0rem", opacity: 1 },
        transition: {
          type: "spring",
          damping: 40,
          stiffness: 200,
        },
      },
    },
    fromBottom: {
      tween: {
        hidden: { y: "2rem", opacity: 0 },
        show: { y: "0rem", opacity: 1 },
        transition: {
          type: "tween",
          ease: "easeInOut",
          duration: 0.5,
        },
      },
      spring: {
        hidden: { y: "2rem", opacity: 0 },
        show: { y: "0rem", opacity: 1 },
        transition: {
          type: "spring",
          damping: 40,
          stiffness: 200,
        },
      },
    },
    fromTop: {
      tween: {
        hidden: { y: "-2rem", opacity: 0 },
        show: { y: "0rem", opacity: 1 },
        transition: {
          type: "tween",
          ease: "easeInOut",
          duration: 0.5,
        },
      },
      spring: {
        hidden: { y: "-2rem", opacity: 0 },
        show: { y: "0rem", opacity: 1 },
        transition: {
          type: "spring",
          damping: 40,
          stiffness: 200,
        },
      },
    },
  },
  subitem: {
    primary: {
      hidden: { opacity: 0, x: "-1.5rem" },
      show: { opacity: 1, x: "0rem" },
      transition: {
        type: "spring",
        damping: 40,
        stiffness: 200,
      },
    },
    secondary: {
      hidden: { opacity: 0, y: "1rem" },
      show: { opacity: 1, y: "0rem" },
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 100,
        delay: 0.2,
      },
    },
    logo: {
      hidden: { opacity: 0, x: "1.5rem" },
      show: { opacity: 1, x: "0rem" },
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 50,
        delay: 0.5,
      },
    },
  },
};

export const onHoverBlur = {
  initial: {
    filter: "blur(0rem)",
    scale: 1,
  },
  onHover: {
    filter: "blur(.2rem)",
    scale: 1.2,
  },
  transition: {
    type: "spring",
    damping: 40,
    stiffness: 200,
  },
};

export const openMenu = {
  initial: {
    width: "0%",
  },
  animate: {
    width: "100%",
  },
  transition: {
    type: "spring",
    damping: 40,
    stiffness: 200,
  },
};
