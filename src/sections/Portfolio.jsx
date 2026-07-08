import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { useRef, useState } from "react";
import YoutubeModal from "../components/YoutubeModal";

const projects = [
 {

  thumbnail:"https://img.youtube.com/vi/09W5mSCyK2M/hqdefault.jpg",
  youtube: "https://www.youtube.com/embed/09W5mSCyK2M",
},
  
  {
    thumbnail: "https://img.youtube.com/vi/Obsxhxig5HQ/hqdefault.jpg",

    youtube: "https://www.youtube.com/watch?v=Obsxhxig5HQ",
    
  },
  {
    thumbnail: "https://img.youtube.com/vi/o_QyXK5GrNM/hqdefault.jpg",

    youtube: "https://www.youtube.com/watch?v=o_QyXK5GrNM",
  },
  {
    thumbnail: "https://img.youtube.com/vi/20SaI8M70kA/hqdefault.jpg",

  youtube: "https://www.youtube.com/watch?v=20SaI8M70kA",
  },
  {
    thumbnail: "https://img.youtube.com/vi/T2wxLZhUTWQ/hqdefault.jpg",

  youtube: "https://www.youtube.com/watch?v=T2wxLZhUTWQ",
  },
  {
    thumbnail: "https://img.youtube.com/vi/7aZcQsMRZmo/hqdefault.jpg",

    youtube: "https://www.youtube.com/watch?v=7aZcQsMRZmo",
  },
];

export default function Portfolio() {
  const videoRefs = useRef([]);

  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  return (
    <>
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
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.3,
              }}
              onMouseEnter={() => {
                if (!project.youtube) {
                  videoRefs.current[index]?.play();
                }
              }}
              onMouseLeave={() => {
                if (!project.youtube && videoRefs.current[index]) {
                  videoRefs.current[index].pause();
                  videoRefs.current[index].currentTime = 0;
                }
              }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-violet-100 hover:shadow-2xl transition-all"
            >

              {/* Thumbnail / Video */}

              <div className="relative overflow-hidden">

                {project.youtube ? (

                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-64 sm:h-72 lg:h-80 object-cover transition duration-700 group-hover:scale-110"
                  />

                ) : (

                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={project.video}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-64 sm:h-72 lg:h-80 object-cover transition duration-700 group-hover:scale-110"
                  />

                )}

                {/* Overlay */}

                <div
                  onClick={() => {
                    setSelectedVideo(project.youtube);
                    setOpen(true);
                  }}
                  className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition duration-300 flex justify-center items-center cursor-pointer"
                >

                  <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition">

                    <FaPlay className="text-violet-600 text-lg" />

                  </div>

                </div>

              </div>

              {/* Content */}

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

      <YoutubeModal
        open={open}
        onClose={() => setOpen(false)}
        url={selectedVideo}
      />

    </>
  );
}
