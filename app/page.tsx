// app/page.tsx
import Navbar from './components/ui/Navbar';
import GridBackground from './components/ui/GridBackground';
import Hero from './components/sections/Hero';
import Marquee from './components/ui/Marquee';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Comparison from './components/sections/Comparison';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      {/* Grid Background */}
      <GridBackground />
      
      {/* Hero Section */}
      <Hero />
      <About />
      <Skills />
      <Comparison />
      <Projects />
      <Experience />
      <Testimonials />
      <FAQ />
      <Contact/>
    </>
  );
}