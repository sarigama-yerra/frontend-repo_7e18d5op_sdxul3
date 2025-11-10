import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 border-t border-white/10 text-center text-slate-400">
        © {new Date().getFullYear()} Bilal • Built with React & Tailwind
      </footer>
    </div>
  );
}
