import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import ParticlesBackground from "./components/ParticlesBackground";
import Timeline from "./sections/Timeline";
import Testimonials from "./sections/Testimonials";


export default function App() {
  return (
    <main className="bg-[#faf8ff] min-h-screen">
      
      <ParticlesBackground/>
      <Loader/>
      <Cursor/>
      <ScrollProgress/>
      <BackToTop/>
      <SmoothScroll />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      

      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}