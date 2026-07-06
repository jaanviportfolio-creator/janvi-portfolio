import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
      }}
      className="
      fixed
      top-0
      left-0
      right-0
      h-1
      bg-gradient-to-r
      from-pink-500
      via-violet-600
      to-cyan-400
      z-[99999]
      "
    />
  );
}