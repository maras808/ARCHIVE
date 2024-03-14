import { AnimationProps, Transition, Variant } from "framer-motion";

export enum FramerLayoutIds {
  NavigationEntries = "NavigationEntries",
}

type FramerTransitionsType = {
  defualtSpring: Transition;
};

export const framerTransitions: FramerTransitionsType = {
  defualtSpring: { type: "spring", damping: 40, stiffness: 200 },
};

type FramerAnimationsType = {
  slideFromTop: AnimationProps;
  slideFromBottom: AnimationProps;
  appear: AnimationProps;
};

export const framerAnimations: FramerAnimationsType = {
  slideFromTop: {
    initial: { y: -32, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: framerTransitions.defualtSpring,
  },
  slideFromBottom: {
    initial: { y: 32, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: framerTransitions.defualtSpring,
  },
  appear: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: framerTransitions.defualtSpring,
  },
} as const;

type FramerStaggersType = {
  slideFromBottom: FramerVariantType;
};

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
    transition: framerTransitions.defualtSpring,
  },
} as const;

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
