import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6v0L2mP5sB62w9v9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/70 to-slate-900 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="text-sky-400 font-medium">Hi, I’m Bilal</p>
        <h1 className="mt-3 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
          Full Stack Developer crafting sleek, scalable web apps
        </h1>
        <p className="mt-5 text-slate-300 max-w-2xl">
          I design and build delightful experiences with React, Node, and cloud-native tools. I care about speed, UX, and clean architecture.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-sky-500 text-white font-medium hover:bg-sky-400 transition-colors">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-white/20 text-white font-medium hover:bg-white/10 transition-colors">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
