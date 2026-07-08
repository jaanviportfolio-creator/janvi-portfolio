import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function YoutubeModal({ open, onClose, url }) {
  if (!url) return null;

  // Convert watch URL to embed URL with autoplay
  const embedUrl = url
    .replace("watch?v=", "embed/")
    .replace("youtu.be/", "www.youtube.com/embed/") + "?autoplay=1";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[999] p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white"
            >
              <FaTimes className="mx-auto" />
            </button>

            <iframe
              src={embedUrl}
              title="YouTube Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}