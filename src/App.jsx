import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import SkillsTestimonialsContact from './components/SkillsTestimonialsContact';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? 'bg-slate-950/80 backdrop-blur border-b border-slate-800/60' : ''}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="text-lg font-semibold text-white">Bilal<span className="text-sky-400">.</span></a>
        <div className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#about" className="hover:text-sky-300">About</a>
          <a href="#projects" className="hover:text-sky-300">Projects</a>
          <a href="#skills" className="hover:text-sky-300">Skills</a>
          <a href="#testimonials" className="hover:text-sky-300">Testimonials</a>
          <a href="#contact" className="hover:text-sky-300">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    if ('scrollBehavior' in document.documentElement.style === false) return;
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-inter text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <SkillsTestimonialsContact />
      </main>
    </div>
  );
}
