import { motion } from "framer-motion";
import {
  FaVideo,
  FaFilm,
  FaMagic,
  FaAward,
} from "react-icons/fa";

const timeline = [
  {
    year: "2022",
    title: "Started Video Editing",
    icon: <FaVideo />,
    description:
      "Began learning Premiere Pro and After Effects while editing YouTube videos.",
  },
  {
    year: "2023",
    title: "Freelance Projects",
    icon: <FaFilm />,
    description:
      "Worked with creators and brands on social media reels and promotional videos.",
  },
  {
    year: "2024",
    title: "Motion Graphics",
    icon: <FaMagic />,
    description:
      "Started creating cinematic animations, title sequences and commercials.",
  },
  {
    year: "2025",
    title: "Professional Editor",
    icon: <FaAward />,
    description:
      "Focused on premium storytelling, advertisements and cinematic content.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-16 py-20 sm:py-24 lg:py-28"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
          My Journey
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-500 leading-7 sm:leading-8">
          Every project has helped me grow as a storyteller,
          creative editor and motion designer.
        </p>
      </motion.div>

      {/* Timeline */}

      <div className="relative mt-12 lg:mt-20">

        {/* Center Line */}

        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-violet-200 -translate-x-1/2" />

        <div className="space-y-8 lg:space-y-14">

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } items-center gap-6 lg:gap-8`}
            >

              {/* Card */}

              <div className="w-full md:w-1/2">

                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  className="bg-white rounded-3xl border border-violet-100 shadow-lg hover:shadow-2xl transition-all p-6 sm:p-8"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 text-lg sm:text-xl">

                      {item.icon}

                    </div>

                    <div>

                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {item.title}
                      </h3>

                      <p className="text-violet-600 font-semibold">
                        {item.year}
                      </p>

                    </div>

                  </div>

                  <p className="mt-5 text-gray-500 leading-7 sm:leading-8">
                    {item.description}
                  </p>

                </motion.div>

              </div>

              {/* Timeline Dot */}

              <div className="hidden md:flex w-10 h-10 rounded-full bg-violet-600 border-4 border-white shadow-lg items-center justify-center" />

              {/* Empty Space */}

              <div className="hidden md:block w-1/2" />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}