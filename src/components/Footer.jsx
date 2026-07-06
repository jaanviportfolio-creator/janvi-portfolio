import { motion } from "framer-motion";
import {
  FaInstagram,
  
  FaYoutube,
} from "react-icons/fa";

const links = [
  "About",
  "Services",
  "Portfolio",
  "Skills",
  "Contact",
];

const socials = [
  { icon: <FaInstagram />, href: "https://www.instagram.com/janvi__str?igsh=MTNlZ2g0MjJrYmdleQ==" },
 
  { icon: <FaYoutube />, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#faf8ff] pt-20 sm:pt-24 pb-10">

      {/* Background Glow */}

      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-violet-300/20 blur-[160px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl border border-violet-100 shadow-xl p-6 sm:p-8 lg:p-12"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">

            {/* Logo */}

            <div className="text-center md:text-left">

              <h2 className="text-4xl sm:text-5xl font-black text-violet-600">
                Janvi
              </h2>

              <p className="mt-5 text-gray-500 leading-7 sm:leading-8">
                Creative Video Editor & Motion Designer creating
                cinematic visuals, advertisements, YouTube edits
                and premium storytelling.
              </p>

            </div>

            {/* Links */}

            <div className="text-center md:text-left">

              <h3 className="text-xl sm:text-2xl font-bold mb-6">
                Quick Links
              </h3>

              <div className="space-y-3">

                {links.map((item) => (

                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-600 hover:text-violet-600 transition"
                  >
                    {item}
                  </a>

                ))}

              </div>

            </div>

            {/* Social */}

            <div className="text-center md:text-left">

              <h3 className="text-xl sm:text-2xl font-bold mb-6">
                Connect
              </h3>

              <div className="flex justify-center md:justify-start gap-4 flex-wrap">

                {socials.map((social, index) => (

                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{
                      scale: 1.15,
                      rotate: 8,
                    }}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-lg sm:text-xl shadow-lg hover:bg-violet-600 hover:text-white transition-all"
                  >
                    {social.icon}
                  </motion.a>

                ))}

              </div>

              <button
                className="mt-8 w-full sm:w-auto px-8 py-4 rounded-full bg-violet-600 text-white font-semibold hover:bg-violet-700 transition"
              >
                <a
  href="/files/Janvi_Resume.pdf"
  download
  className="
    mt-5
    inline-flex
    items-center
    justify-center
    px-8
    py-4
    rounded-full
    bg-violet-600
    text-white
    font-semibold
    hover:bg-violet-700
    transition
  "
>
  Download Resume
</a>
                
              </button>

            </div>

          </div>

          {/* Bottom */}

          <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm sm:text-base text-gray-500">
            © 2026 Janvi. Crafted with ❤️ using React.
          </div>

        </motion.div>

      </div>

    </footer>
  );
}