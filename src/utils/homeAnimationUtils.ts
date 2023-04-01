import { Variants } from "framer-motion";

export const rootAnimationController: Variants = {
  pop: {
    transition: {
      staggerChildren: 0.2,
      delay: 0.2,
    },
  },
  moveIn: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
export const childAnimationController: Variants = {
  initial: {
    scale: 0.8,
    translateY: "-50vh",
  },
  pop: {
    scale: [null, 1],
    gridArea: "a",
    transition: {
      delay: 0.3,
      duration: 0.3,
      type: "spring",
      restDelta: 0.001,
      damping: 10,
    },
  },
  moveIn: {
    translateY: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      restDelta: 0.001,
      damping: 10,
    },
  },
  sectionFocus: {
    width: "90vw",
    height: "90vh",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
};
