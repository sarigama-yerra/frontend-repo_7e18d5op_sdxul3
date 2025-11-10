import { motion } from 'framer-motion';
import { User, Code2, Lightbulb } from 'lucide-react';

const skills = [
  { name: 'JavaScript', level: 92 },
  { name: 'React.js', level: 90 },
  { name: 'Node.js', level: 88 },
  { name: 'APIs', level: 86 },
  { name: 'Cloud', level: 82 },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-semibold text-white md:text-4xl"
            >
              I’m not just a developer — I’m a digital architect.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 max-w-xl text-slate-300"
            >
              Turning complex problems into elegant solutions. With a passion for clean code and killer UX,
              I transform ideas into fast, scalable web applications.
            </motion.p>

            <div className="mt-6 grid grid-cols-3 gap-4 text-slate-300">
              <div className="flex items-center gap-2"><User className="h-5 w-5 text-teal-300"/><span>Human-centered</span></div>
              <div className="flex items-center gap-2"><Code2 className="h-5 w-5 text-cyan-300"/><span>Clean code</span></div>
              <div className="flex items-center gap-2"><Lightbulb className="h-5 w-5 text-sky-300"/><span>Creative</span></div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl">
            <div className="space-y-5">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>{s.name}</span>
                    <span className="text-cyan-300">{s.level}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9 }}
                      className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-teal-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
