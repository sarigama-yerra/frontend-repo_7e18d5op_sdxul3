export default function About() {
  return (
    <section id="about" className="relative py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">About Me</h2>
            <p className="mt-4 text-slate-300">
              I’m a problem-solver who loves building polished products. From design systems to backend APIs, I ship features end-to-end with a focus on performance and accessibility.
            </p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>• React, Next.js, TypeScript</li>
              <li>• Node.js, Express, FastAPI</li>
              <li>• MongoDB, PostgreSQL, Prisma</li>
              <li>• AWS, Vercel, CI/CD</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
            <h3 className="text-white font-semibold">Highlights</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <Stat label="Projects Delivered" value="30+" />
              <Stat label="Avg. Lighthouse" value="95+" />
              <Stat label="Client Satisfaction" value="5/5" />
              <Stat label="Years Experience" value="5+" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-900/50 p-4">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-slate-400 text-sm">{label}</div>
    </div>
  );
}
