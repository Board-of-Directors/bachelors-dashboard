import { HTMLMotionProps } from "framer-motion";

export const motionProps: HTMLMotionProps<"section"> = {
  variants: {
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      x: 50,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  },
};
