import styled from "styled-components";
import { motion } from "framer-motion";

export const AnimationWrapper = styled(motion.div)``;

export const bounceAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    default: {
      delay: 0.1,
      duration: 0.2,
      ease: [0, 0.71, 0.2, 1.01],
    },
    scale: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      restDelta: 0.001,
    },
  },
};

export const hoverAnimation = {
  whileHover: {
    scale: 1.05,
  },
  whileTap: { scale: 0.9 },
};
