import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-600 to-indigo-700" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 text-white">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Start sharing smarter today</h2>
            <p className="mt-3 text-indigo-100">Join the waitlist to get early access, plus a special launch offer.</p>

            <ul className="mt-6 space-y-2 text-sm text-indigo-100">
              <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-white" />Unlimited smart links during beta</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-white" />Custom domains included</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-white" />Realtime analytics</li>
            </ul>
          </div>

          <form onSubmit={submit} className="rounded-2xl bg-white p-2 shadow-xl sm:flex sm:items-center sm:gap-2">
            {!submitted ? (
              <>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full rounded-lg border-0 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button type="submit" className="mt-2 w-full sm:mt-0 sm:w-auto rounded-lg bg-indigo-600 px-5 py-3 text-white font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center gap-2">
                  Join waitlist
                  <ArrowRight size={18} />
                </button>
              </>
            ) : (
              <div className="w-full rounded-lg bg-green-50 px-4 py-3 text-green-800">
                Thanks! You're on the list. We'll be in touch soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
