"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function SmoothMotion() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    mass: 0.35,
    restDelta: 0.001
  });

  return (
    <motion.div
      aria-hidden="true"
      className="smooth-scroll-progress"
      style={{ scaleX: smoothProgress }}
    />
  );
}
