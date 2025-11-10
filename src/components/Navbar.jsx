import { useState, useEffect } from 'react';
import { Menu, X, Rocket, User, FolderGit2, Mail } from 'lucide-react';

function NavLink({ href, icon: Icon, label, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
    >
      <Icon size={16} />
      <span>{label}</span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="inline-flex items-center gap-2 text-white font-semibold">
            <Rocket className="text-sky-400" />
            <span>Bilal.dev</span>
          </a>
          <div className="hidden md:flex items-center gap-2">
            <NavLink href="#about" icon={User} label="About" />
            <NavLink href="#projects" icon={FolderGit2} label="Projects" />
            <NavLink href="#contact" icon={Mail} label="Contact" />
          </div>
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-slate-200 hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden py-2 border-t border-white/10">
            <NavLink href="#about" icon={User} label="About" onClick={close} />
            <NavLink href="#projects" icon={FolderGit2} label="Projects" onClick={close} />
            <NavLink href="#contact" icon={Mail} label="Contact" onClick={close} />
          </div>
        )}
      </nav>
    </header>
  );
}
