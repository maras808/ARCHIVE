import { AnimationProps, Transition, Variant } from "framer-motion";

export enum FramerLayoutIds {
  homeToSelect = "homeToSelect",
}

type FramerVariantType = {
  container: {
    hidden: Variant;
    show: Variant;
  };
  item: {
    hidden: Variant;
    show: Variant;
  };
  transition: Transition;
};
type FramerTransitionsType = {
  slideFromTop: AnimationProps;
  slideFromBottom: AnimationProps;
};

type FramerStaggersType = {
  slideFromBottom: FramerVariantType;
};

export const framerTransitions: FramerTransitionsType = {
  slideFromTop: {
    initial: { y: -32, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { type: "spring", damping: 50, stiffness: 200 },
  },
  slideFromBottom: {
    initial: { y: 32, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { type: "spring", damping: 50, stiffness: 200 },
  },
} as const;

export const framerStaggers: FramerStaggersType = {
  slideFromBottom: {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.5,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: 50 },
      show: { opacity: 1, y: 0 },
    },
    transition: {
      type: "spring",
      damping: 40,
      stiffness: 100,
    },
  },
};
