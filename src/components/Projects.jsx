import { useState } from 'react';

const ALL = 'All';

const initial = [
  { id: 1, title: 'Realtime Dashboard', tags: ['React', 'Websocket'], img: 'https://images.unsplash.com/photo-1551281044-8a6b5be0db3d?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Ecommerce Platform', tags: ['Node', 'Stripe'], img: 'https://images.unsplash.com/photo-1515165562835-c3b8c2e332bb?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Portfolio Engine', tags: ['Next.js', 'SEO'], img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'AI Content Tool', tags: ['FastAPI', 'OpenAI'], img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop' },
];

const tagSet = [ALL, ...Array.from(new Set(initial.flatMap(p => p.tags)))];

export default function Projects() {
  const [active, setActive] = useState(ALL);

  const list = active === ALL ? initial : initial.filter(p => p.tags.includes(active));

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Selected Projects</h2>
          <div className="flex flex-wrap gap-2">
            {tagSet.map(tag => (
              <button
                key={tag}
                onClick={() => setActive(tag)}
                className={`px-3 py-1.5 rounded-md text-sm border ${active === tag ? 'bg-sky-500 text-white border-sky-400' : 'text-slate-300 border-white/10 hover:bg-white/5'}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map(card => (
            <article key={card.id} className="group rounded-xl overflow-hidden border border-white/10 bg-slate-900/40">
              <div className="aspect-video overflow-hidden">
                <img src={card.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold">{card.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {card.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded bg-white/10 text-slate-300 border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
