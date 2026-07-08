import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/janvi__str?igsh=MTNlZ2g0MjJrYmdleQ==",
  },
  {
    icon: <FaYoutube />,
    link: "#",
  },
  {
    icon: <FaWhatsapp />,
    link: "https://wa.me/916354281629",
  },
  {
    icon: <FaEnvelope />,
    link: "mailto:janviiiisuthar@gmail.com",
  },
];

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4wwy6fl",
        "template_qtk7hqf",
        form.current,
        "tVOUcUvbP0yNqRas1"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-[#faf8ff] py-20 sm:py-24 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-16">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
            Let's Work Together
          </h2>

          <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-500 leading-7 sm:leading-8">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        {/* Main Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 lg:mt-16">

          {/* Contact Form */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl border border-violet-100 shadow-xl p-6 sm:p-8 lg:p-10"
          >
            <h3 className="text-2xl sm:text-3xl font-bold">
              Have a Project?
            </h3>

            <p className="mt-2 text-gray-500">
              Fill out the form and I'll get back to you soon.
            </p>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5 mt-8"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-violet-500 transition"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-violet-500 transition"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
                className="w-full rounded-2xl border border-gray-200 p-4 resize-none outline-none focus:border-violet-500 transition"
              />

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-violet-600 text-white font-semibold hover:bg-violet-700 transition"
              >
                Send Message 🚀
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl border border-violet-100 shadow-xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between"
          >
            <div>

              <h3 className="text-2xl sm:text-3xl font-bold">
                Connect With Me
              </h3>

              <p className="mt-2 text-gray-500">
                Follow me or reach out on your favorite platform.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mt-8">

                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.1,
                      rotate: 8,
                    }}
                    className="h-16 sm:h-20 rounded-2xl sm:rounded-3xl bg-[#faf8ff] shadow-lg flex items-center justify-center text-2xl sm:text-3xl text-violet-600 hover:bg-violet-600 hover:text-white transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}

              </div>

              {/* Email */}

              <div className="mt-8">

                <a
                  href="mailto:janviiiisuthar@gmail.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-violet-600 transition"
                >
                  <FaEnvelope className="text-violet-600 text-xl" />

                  <span className="font-medium">
                    janviiiisuthar@gmail.com
                  </span>

                </a>

              </div>

            </div>

            <div className="mt-10 lg:mt-14">

              <div className="h-40 sm:h-48 lg:h-56 rounded-3xl bg-gradient-to-br from-violet-500 via-pink-400 to-blue-400 flex items-center justify-center text-white text-5xl sm:text-6xl shadow-xl">

                💌

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
