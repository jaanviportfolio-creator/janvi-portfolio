import { motion } from "framer-motion";
import {
  FaUser,
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
} from "react-icons/fa";

export default function About() {
  const details = [
    {
      icon: <FaUser className="text-violet-600" />,
      label: "Name",
      value: "Janvi Suthar",
    },
    {
      icon: <FaUser className="text-violet-600" />,
      label: "Age",
      value: "19 Years",
    },
    {
      icon: <FaMapMarkerAlt className="text-violet-600" />,
      label: "Location",
      value: "Ahmedabad, Gujarat, India",
    },
    {
      icon: <FaBriefcase className="text-violet-600" />,
      label: "Profession",
      value: "Video Editor",
    },
    {
      icon: <FaClock className="text-violet-600" />,
      label: "Availability",
      value: "Freelance",
    },
  ];

  return (
    <motion.section
      id="about"
      className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-16 py-20 sm:py-24 lg:py-28"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
        My Details
      </h2>

      <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-2xl leading-7 sm:leading-8">
        Passionate about creating cinematic edits, storytelling videos,
        commercials and engaging social media content that leaves a
        lasting impression.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mt-12 lg:mt-16">

        {/* LEFT CARD */}

        <motion.div
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          transition={{ duration: 0.3 }}
          className="
            bg-white
           rounded-3xl
            shadow-xl
            border
            border-violet-100
            overflow-hidden
          "
        >

          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            src="/images/hero/model.png"
            alt="Janvi"
            className="w-full h-[300px] sm:h-[420px] object-cover"
          />

          <div className="p-5 sm:p-8">

            <div className="bg-violet-50 rounded-3xl p-6">

              <p className="italic text-gray-600 leading-8">
                "I transform ideas into cinematic visuals,
                premium edits and engaging stories that
                leave a lasting impression."
              </p>

              <h3 className="mt-5 text-violet-600 font-bold">
                — Janvi
              </h3>

            </div>

            

          </div>

        </motion.div>

        {/* RIGHT */}

        <div className="lg:col-span-2 space-y-4 sm:space-y-6">

          {details.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              transition={{ duration: 0.25 }}
              className="
                bg-white
                rounded-3xl
                shadow-lg
                border
                border-violet-100
                p-5 sm:p-7
                flex
                flex-col
                sm:flex-row
                items-start
                sm:items-center
                justify-between
                gap-4
              "
            >

<div className="flex items-center gap-3 sm:gap-5">

                <div className="
                w-12
                h-12
                sm:w-14
                sm:h-14
                rounded-2xl
                bg-violet-100
                flex
                items-center
                justify-center
                text-lg sm:text-xl
                ">

                  {item.icon}

                </div>

                <span  className="text-lg sm:text-xl font-semibold">

                  {item.label}

                </span>

              </div>

              <span className="text-gray-600 font-medium text-base sm:text-lg break-words">

                {item.value}

              </span>

            </motion.div>

          ))}

        </div>

      </div>
    </motion.section>
  );
}