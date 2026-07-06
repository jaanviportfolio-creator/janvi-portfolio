import { motion } from "framer-motion";
import {
  FaVideo,
  FaPenNib,
  FaPlayCircle,
} from "react-icons/fa";

const services = [
  {
    icon: <FaVideo size={40} />,
    title: "Video Editing",
    desc: "Cinematic edits, transitions, color grading, YouTube videos, reels and commercial advertisements.",
    color: "from-violet-500 to-purple-400",
  },
  {
    icon: <FaPenNib size={40} />,
    title: "Graphic Design",
    desc: "Logos, posters, thumbnails, branding kits and social media creatives with modern aesthetics.",
    color: "from-pink-400 to-fuchsia-500",
  },
  {
    icon: <FaPlayCircle size={40} />,
    title: "Motion Graphics",
    desc: "Animated titles, logo reveals, intros, outros and eye-catching motion graphics.",
    color: "from-sky-400 to-blue-500",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-16 py-20 sm:py-24 lg:py-28"
    >
      {/* Heading */}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
        What I Do
      </h2>

      <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-500 leading-7 sm:leading-8">
        Helping creators and businesses tell powerful stories through
        cinematic editing, motion graphics and creative design.
      </p>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16">

        {services.map((service, index) => (

          <motion.div
            key={index}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              bg-white
              rounded-3xl
              p-6
              sm:p-8
              border
              border-violet-100
              shadow-lg
              hover:shadow-2xl
              transition-all
            "
          >

            {/* Icon */}

            <div
              className={`
                w-16 h-16
                sm:w-20 sm:h-20
                rounded-2xl
                bg-gradient-to-br
                ${service.color}
                flex
                items-center
                justify-center
                text-white
                shadow-xl
                mb-6
              `}
            >
              {service.icon}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              {service.title}
            </h3>

            <p className="text-gray-500 leading-7 sm:leading-8">
              {service.desc}
            </p>

          </motion.div>

        ))}

      </div>
    </section>
  );
}