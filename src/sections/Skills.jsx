import { motion } from "framer-motion";

const skills = [
  "Premiere Pro",
  "After Effects",
  "Photoshop",
  "Illustrator",
  "Blender",
  "CapCut",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-16 py-20 sm:py-24 lg:py-28"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
          My Skills
        </h2>

        <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-500 leading-7 sm:leading-8">
          Professional tools I use to create cinematic edits,
          engaging motion graphics and premium visual content.
        </p>
      </motion.div>

      {/* Skills Grid */}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mt-12 lg:mt-16">

        {skills.map((skill, index) => (

          <motion.div
            key={index}
            whileHover={{
              y: -8,
              scale: 1.05,
            }}
            transition={{ duration: 0.25 }}
            className="
              bg-white
              rounded-3xl
              border
              border-violet-100
              shadow-lg
              hover:shadow-2xl
              transition-all
              p-6
              sm:p-8
              flex
              items-center
              justify-center
              text-center
              min-h-[120px]
            "
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              {skill}
            </h3>
          </motion.div>

        ))}

      </div>
    </section>
  );
}