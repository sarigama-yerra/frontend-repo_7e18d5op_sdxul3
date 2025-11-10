import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const rotatingTexts = ['React.js', 'Node.js', 'APIs', 'Cloud Solutions'];

function useTypedRotator(words, speed = 80, pause = 900) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const word = useMemo(() => words[index % words.length], [index, words]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (subIndex < word.length) setSubIndex(subIndex + 1);
        else setDeleting(true);
      } else {
        if (subIndex > 0) setSubIndex(subIndex - 1);
        else {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [deleting, subIndex, word.length, words.length, speed]);

  useEffect(() => {
    if (subIndex === word.length && !deleting) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
  }, [subIndex, word.length, deleting, pause]);

  return { text: word.substring(0, subIndex), deleting };
}

export default function Hero() {
  const { text } = useTypedRotator(rotatingTexts, 70, 1000);

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Animated gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(20,184,166,0.25),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.25),transparent_40%)] animate-pulse" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pt-28 md:flex-row md:gap-10 md:pt-24">
        <div className="w-full md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
          >
            Hi, I’m Bilal —
            <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-300 bg-clip-text text-transparent">
              Crafting Code That Powers Tomorrow.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-5 max-w-xl text-lg text-slate-300"
          >
            From concept to launch, I build seamless digital experiences that make an impact.
          </motion.p>

          {/* Typed tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-slate-300"
          >
            <span className="mr-2 text-slate-400">Specialties:</span>
            <span className="font-mono text-cyan-300">{text}</span>
            <span className="ml-1 animate-pulse">|</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 to-teal-400 px-6 py-3 text-base font-medium text-slate-950 shadow-lg shadow-sky-500/20 transition hover:from-sky-400 hover:to-teal-300"
            >
              See My Work in Action
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-sky-500/40 px-6 py-3 text-base font-medium text-sky-300 transition hover:border-sky-500 hover:bg-sky-500/10"
            >
              Let’s Build Something Together
            </a>
          </motion.div>
        </div>

        {/* 3D Spline scene */}
        <div className="relative mt-12 h-[360px] w-full md:mt-0 md:h-[520px] md:w-1/2">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
}
