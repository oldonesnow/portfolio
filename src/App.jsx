import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import Skills from "./components/sections/Skills";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Education";
import Blog from "./components/sections/Blog";

export default function App() {
  return (
    <div className="bg-base min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Skills />
        <Blog />
        <About />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
