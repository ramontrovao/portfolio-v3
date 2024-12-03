"use client";

import { motion, useScroll } from "framer-motion";

export const ProgressHeader = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="bg-purple-500 h-1 fixed top-0 left-0 right-0"
      style={{ scaleX: scrollYProgress }}
    />
  );
};
