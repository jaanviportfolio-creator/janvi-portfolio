import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    const items = document.querySelectorAll(
      "button,a,input,textarea"
    );

    const enter = () => setHover(true);
    const leave = () => setHover(false);

    items.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      items.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}

      <motion.div
        animate={{
          x: mouse.x - 10,
          y: mouse.y - 10,
          scale: hover ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className="
        fixed
        w-5
        h-5
        rounded-full
        bg-violet-600
        z-[99999]
        pointer-events-none
        shadow-[0_0_30px_#8b5cf6]
        "
      />

      {/* Trail */}

      <motion.div
        animate={{
          x: mouse.x - 25,
          y: mouse.y - 25,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 18,
        }}
        className="
        fixed
        w-12
        h-12
        rounded-full
        border
        border-violet-400
        z-[99998]
        pointer-events-none
        "
      />
    </>
  );
}