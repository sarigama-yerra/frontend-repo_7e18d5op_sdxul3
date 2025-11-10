import { motion } from 'framer-motion';
import { Rocket, Star, Github, Linkedin, Mail, ChevronUp, Cloud, Docker, GitBranch, Globe, Database } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function SkillsTestimonialsContact() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="w-full bg-slate-950">
      {/* Skills */}
      <section id="skills" className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Tools of the Trade & Skills That Deliver</h2>
        <p className="mt-3 max-w-2xl text-slate-300">From front-end finesse to back-end power — I’ve got the full stack covered.</p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {[
            { Icon: Rocket, label: 'JavaScript' },
            { Icon: Globe, label: 'React' },
            { Icon: Database, label: 'Node' },
            { Icon: Cloud, label: 'AWS' },
            { Icon: Docker, label: 'Docker' },
            { Icon: GitBranch, label: 'Git' },
          ].map(({ Icon, label }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-center text-slate-300 shadow"
            >
              <Icon className="mx-auto h-6 w-6 text-sky-300" />
              <div className="mt-2 text-sm">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">What Clients Say When Results Matter</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            'Bilal transformed our vision into reality — seamless communication and outstanding results.',
            'Reliable, innovative, and always ahead of the curve.',
            'A partner you can trust for quality and speed. Highly recommended.'
          ].map((quote, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-slate-300 shadow"
            >
              <Star className="mb-3 inline h-5 w-5 text-yellow-400" />
              {quote}
            </motion.blockquote>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Ready to Build Something Great?</h2>
            <p className="mt-3 max-w-xl text-slate-300">Let’s connect and turn your ideas into digital success.</p>

            <div className="mt-6 flex gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 p-3 text-slate-300 hover:border-sky-500 hover:bg-sky-500/10">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 p-3 text-slate-300 hover:border-sky-500 hover:bg-sky-500/10">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:hello@bilal.dev" className="rounded-full border border-slate-700 p-3 text-slate-300 hover:border-sky-500 hover:bg-sky-500/10">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow"
          >
            <div className="grid gap-4">
              <div className="group relative">
                <input id="name" name="name" required className="peer w-full rounded-lg border border-slate-700 bg-transparent px-4 py-3 text-white outline-none transition placeholder-transparent focus:border-sky-500" placeholder="Your name" />
                <label htmlFor="name" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-slate-900/40 px-1 text-sm text-slate-400 transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-sky-300 peer-valid:top-0 peer-valid:text-xs peer-valid:text-sky-300">Your name</label>
              </div>
              <div className="group relative">
                <input type="email" id="email" name="email" required className="peer w-full rounded-lg border border-slate-700 bg-transparent px-4 py-3 text-white outline-none transition placeholder-transparent focus:border-sky-500" placeholder="Email" />
                <label htmlFor="email" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-slate-900/40 px-1 text-sm text-slate-400 transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-sky-300 peer-valid:top-0 peer-valid:text-xs peer-valid:text-sky-300">Email</label>
              </div>
              <div className="group relative">
                <textarea id="message" name="message" rows="4" required className="peer w-full rounded-lg border border-slate-700 bg-transparent px-4 py-3 text-white outline-none transition placeholder-transparent focus:border-sky-500" placeholder="Message" />
                <label htmlFor="message" className="pointer-events-none absolute left-3 top-3 bg-slate-900/40 px-1 text-sm text-slate-400 transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-sky-300 peer-valid:top-0 peer-valid:text-xs peer-valid:text-sky-300">Message</label>
              </div>
              <button type="submit" className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-sky-500 to-teal-400 px-6 py-3 font-medium text-slate-950 shadow-lg transition focus:outline-none">
                <span className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 bg-slate-950 py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Bilal. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#home" className="hover:text-sky-300">Home</a>
            <a href="#projects" className="hover:text-sky-300">Projects</a>
            <a href="#contact" className="hover:text-sky-300">Contact</a>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 rounded-full border border-sky-400 bg-slate-900/60 p-3 text-sky-300 backdrop-blur transition hover:bg-sky-500/10"
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
