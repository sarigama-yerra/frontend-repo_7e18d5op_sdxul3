import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const allProjects = [
  {
    title: 'Realtime Chat App',
    type: 'Web Apps',
    desc: 'A real-time chat app built with React & Firebase — lightning fast and scalable.',
    tags: ['React', 'Firebase', 'WebSocket'],
    href: '#'
  },
  {
    title: 'E-commerce API',
    type: 'APIs',
    desc: 'Robust REST API powering seamless e-commerce experiences.',
    tags: ['Node', 'Express', 'MongoDB'],
    href: '#'
  },
  {
    title: 'Open Source CLI',
    type: 'Open Source',
    desc: 'Developer-friendly CLI to scaffold full-stack projects in seconds.',
    tags: ['Node', 'Open Source'],
    href: '#'
  },
  {
    title: 'Analytics Dashboard',
    type: 'Web Apps',
    desc: 'Interactive dashboards with charts and real-time KPIs.',
    tags: ['React', 'D3', 'Tailwind'],
    href: '#'
  },
];

const filters = ['All', 'Web Apps', 'APIs', 'Open Source'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const filtered = useMemo(() => {
    if (active === 'All') return allProjects;
    return allProjects.filter((p) => p.type === active);
  }, [active]);

  return (
    <section id="projects" className="w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Projects That Speak Louder Than Words
          </h2>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  active === f
                    ? 'border-sky-400 bg-sky-500/10 text-sky-300'
                    : 'border-slate-700 text-slate-300 hover:border-slate-600'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4 block break-inside-avoid rounded-2xl border border-slate-800 bg-slate-900/40 p-5 shadow-md transition hover:border-sky-500/40 hover:shadow-sky-500/10"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-medium text-white">{p.title}</h3>
                  <ExternalLink className="h-4 w-4 text-slate-400" />
                </div>
                <p className="text-sm text-slate-300">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
