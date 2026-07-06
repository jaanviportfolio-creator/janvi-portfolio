import { motion } from "framer-motion";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Avatar from "../three/Avatar";
import ShowreelModal from "../components/ShowreelModal";
import MagneticButton from "../components/MagneticButton";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#faf8ff] flex items-center pt-24 sm:pt-28 lg:pt-32 pb-16"
      >
        {/* Background Blobs */}

        <div className="absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-pink-300/20 blur-[120px] animate-pulse" />

        <div className="absolute bottom-0 right-0 w-80 sm:w-[450px] h-80 sm:h-[450px] rounded-full bg-violet-300/20 blur-[120px] animate-pulse" />

        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-cyan-300/20 blur-[120px] -translate-x-1/2 -translate-y-1/2" />

        {/* Main Content */}

        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >

            

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight text-gray-900">
              I'm{" "}
              <span className="text-violet-600">
                Janvi
              </span>
            </h1>

            <h2 className="mt-5 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 leading-snug">
              Creative Video Editor
              <br />
              & Motion Designer
            </h2>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-500 leading-7 md:leading-8 max-w-xl mx-auto lg:mx-0">
              I craft cinematic edits, advertisements,
              YouTube videos, Instagram reels and motion
              graphics that capture attention and tell
              compelling stories.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <MagneticButton
                onClick={() => setOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-violet-600 text-white font-semibold shadow-xl hover:bg-violet-700 transition"
              >
                ▶ Watch Showreel
              </MagneticButton>

              <MagneticButton
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-violet-200 text-violet-600 font-semibold shadow-lg hover:shadow-xl transition"
              >
                Contact Me
              </MagneticButton>

            </div>

            {/* Stats */}

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6">

              <div>
                <h3 className="text-3xl font-black text-violet-600">
                  
                </h3>

                <p className="text-gray-500 text-sm">
                  
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-violet-600">
                  
                </h3>

                <p className="text-gray-500 text-sm">
                  
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-violet-600">
                
                </h3>

                <p className="text-gray-500 text-sm">
                  
                </p>
              </div>

            </div>

          </motion.div>          {/* RIGHT */}

<motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="relative order-1 lg:order-2 flex justify-center items-center h-[320px] sm:h-[420px] md:h-[520px] lg:h-[650px]"
>

  {/* Glow */}

  <div className="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] rounded-full bg-violet-300/30 blur-[120px]" />

  {/* 3D Canvas */}

  <div className="absolute inset-0">

    <Canvas
      camera={{
        position: [0, 1.5, 8],
        fov: 50,
      }}
    >
      <ambientLight intensity={3} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      <Avatar />

    </Canvas>

  </div>

  {/* Mobile Fallback Image */}

  <img
  src="/images/hero/model.png"
  alt="Janvi"
  className="
    relative
    z-10
    w-[320px]
    sm:w-[420px]
    lg:w-[520px]
    object-contain
    drop-shadow-2xl
  "
/>

  {/* Floating Card 1 */}

  <motion.div
    animate={{
      y: [0, -15, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
    }}
    className="
    hidden
    lg:flex
    absolute
    top-12
    left-0
    bg-white
    rounded-3xl
    shadow-xl
    px-6
    py-4
    items-center
    gap-3
    "
  >

    <span className="text-3xl">
      🎬
    </span>

    <div>

      <h3 className="font-bold text-lg">
        Video Editor
      </h3>

      

    </div>

  </motion.div>

  {/* Floating Card 2 */}

  <motion.div
    animate={{
      y: [0, 15, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
    className="
    hidden
    lg:flex
    absolute
    bottom-2
    right-0
    bg-white
    rounded-3xl
    shadow-xl
    px-6
    py-4
    items-center
    gap-3
    "
  >

    <span className="text-3xl">
      ⭐
    </span>

    <div>

      <h3 className="font-bold text-lg">
        Adobe
      </h3>

      <p className="text-sm text-gray-500">
        Premier
      </p>

    </div>

  </motion.div>

</motion.div>

</div>      </section>

<ShowreelModal
  open={open}
  onClose={() => setOpen(false)}
/>
</>
);
}