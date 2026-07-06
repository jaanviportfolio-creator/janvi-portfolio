import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Aarav Patel",
    role: "YouTube Creator",
    text: "Janvi transformed my videos into cinematic masterpieces. The storytelling and pacing were exceptional.",
  },
  {
    name: "Priya Shah",
    role: "Brand Owner",
    text: "Professional, creative and always delivers on time. Highly recommended for commercial editing.",
  },
  {
    name: "Rahul Mehta",
    role: "Content Creator",
    text: "The quality exceeded my expectations. Every reel looked modern and engaging.",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-black text-center"
      >
        What Clients Say
      </motion.h2>

      <p className="text-center text-gray-500 mt-4">
        Trusted by creators and brands.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="bg-white rounded-[30px] shadow-xl p-8"
          >
            <FaQuoteLeft className="text-violet-500 text-3xl mb-5" />

            <p className="text-gray-600 leading-8">
              {item.text}
            </p>

            <div className="mt-8">
  <h3 className="text-xl font-bold text-gray-900">
    {item.name}
  </h3>

  <p className="text-violet-600 font-medium">
    {item.role}
  </p>
</div>
<div className="mt-2 inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
  ✔ Verified Client
</div>
            <div className="flex gap-1 mt-6 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}