import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { useRef } from "react";

const projects = [
  {
    title: "Starbucks Commercial",
    category: "Commercial",
    video: "/videos/1.mp4",
  },
  {
    title: "Instagram Reel",
    category: "Social Media",
    video: "/videos/2.mp4",
  },
  {
    title: "Travel Cinematic",
    category: "Travel",
    video: "/videos/3.mp4",
  },
  {
    title: "Product Advertisement",
    category: "Advertisement",
    video: "/videos/4.mp4",
  },
  {
    title: "Luxury Edit",
    category: "Luxury",
    video: "/videos/5.mp4",
  },
  {
    title: "Advertisement",
    category: "Real State",
    video: "/videos/6.mp4",
  },
];

export default function Portfolio() {
  const videoRefs = useRef([]);

  return (
    <section
      id="portfolio"
      className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-16 py-20 sm:py-24 lg:py-28"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
          Featured Work
        </h2>

        <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-500 leading-7 sm:leading-8">
          A collection of cinematic edits, commercial advertisements,
          social media reels and creative storytelling projects.
        </p>
      </motion.div>

      {/* Portfolio Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => {
              videoRefs.current[index]?.play();
            }}
            onMouseLeave={() => {
              videoRefs.current[index]?.pause();
              videoRefs.current[index].currentTime = 0;
            }}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-violet-100 hover:shadow-2xl transition-all cursor-pointer"
          >

            <div className="relative overflow-hidden">

              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={project.video}
                
                loop
                playsInline
                preload="metadata"
                className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />

<div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-300"></div>

            </div>

            <div className="p-5 sm:p-7">

              <span className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-600 text-sm font-semibold">
                {project.category}
              </span>

              <h3 className="mt-4 text-xl sm:text-2xl font-bold text-gray-900">
                {project.title}
              </h3>

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
}