import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Placeholder submit; can be wired to backend endpoint later
    setTimeout(() => setStatus('Message sent! I will get back to you shortly.'), 800);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">Let’s Build Something</h2>
        <p className="mt-3 text-slate-300 text-center">Have a project in mind? Drop a line and I’ll reply within 24 hours.</p>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1">Name</label>
            <input required className="w-full rounded-md bg-slate-900 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Email</label>
            <input type="email" required className="w-full rounded-md bg-slate-900 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Message</label>
            <textarea required rows={5} className="w-full rounded-md bg-slate-900 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Tell me about your project..." />
          </div>
          <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-sky-500 text-white font-medium hover:bg-sky-400">
            <Mail size={18} /> Send Message
          </button>
          {status && <p className="text-sky-300">{status}</p>}
        </form>
      </div>
    </section>
  );
}
