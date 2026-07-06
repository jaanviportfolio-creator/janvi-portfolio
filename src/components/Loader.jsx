import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setHide(true);
          }, 400);

          return 100;
        }

        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] bg-[#faf8ff] flex items-center justify-center"
        >
          <div className="text-center">

            <motion.h1
              initial={{ scale: .8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-7xl font-black text-violet-600"
            >
              Janvi
            </motion.h1>

            <p className="mt-8 text-gray-500 tracking-[6px] uppercase">
              Loading...
            </p>

            <div className="w-80 h-2 bg-gray-200 rounded-full mt-8 overflow-hidden">

              <motion.div
                className="h-full bg-violet-600"
                animate={{
                  width: `${progress}%`,
                }}
              />

            </div>

            <p className="mt-6 text-xl font-semibold text-gray-700">
              {progress}%
            </p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}