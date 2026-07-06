import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Skills",
    "Contact",
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl sm:text-3xl font-black text-violet-600 tracking-wide"
        >
          JANVI
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">

          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative font-medium text-gray-700 hover:text-violet-600 transition group"
            >
              {link}

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-700 transition"
          >
            Let's Talk
          </a>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-3xl text-violet-600"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl shadow-xl"
          >

            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 border-b border-gray-100 text-gray-700 hover:bg-violet-50 transition"
              >
                {link}
              </a>
            ))}

            <div className="p-6">

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-violet-600 text-white py-3 rounded-full font-medium hover:bg-violet-700 transition"
              >
                Let's Talk
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  );
}