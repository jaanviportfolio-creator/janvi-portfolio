import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function ShowreelModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="
            fixed
            inset-0
            z-[999]
            bg-black/80
            backdrop-blur-lg
            flex
            items-center
            justify-center
            p-4
          "
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              bg-black
              rounded-3xl
              overflow-hidden
              w-full
              max-w-md
              shadow-2xl
            "
          >
            {/* Close Button */}

            <button
              onClick={onClose}
              className="
                absolute
                top-4
                right-4
                z-20
                w-10
                h-10
                rounded-full
                bg-white
                text-black
                flex
                items-center
                justify-center
                hover:bg-violet-600
                hover:text-white
                transition
              "
            >
              <FaTimes />
            </button>

            {/* Video */}

            <video
              src="/videos/showreel.mp4"
              controls
              autoPlay
              playsInline
              className="
                w-full
                h-auto
                max-h-[85vh]
                object-contain
                bg-black
              "
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}