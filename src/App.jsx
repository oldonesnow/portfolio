import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import Skills from "./components/sections/Skills";
import Blog from "./components/sections/Blog";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

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
    </div>
  );
}
