import { MousePointerClick, Pencil, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: MousePointerClick,
    title: 'Shorten or create a page',
    desc: 'Paste any URL or design a smart link page with multiple destinations, embeds, and branding.',
  },
  {
    icon: Pencil,
    title: 'Customize & brand',
    desc: 'Choose a custom domain, edit the slug, add UTM parameters, and set link rules like expiry.',
  },
  {
    icon: BarChart3,
    title: 'Share & measure',
    desc: 'Share anywhere. Watch realtime clicks, referrers, and conversions — optimize what works.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-white to-indigo-50/50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How it works</h2>
          <p className="mt-3 text-gray-600">Get from long link to insights in minutes.</p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-semibold shadow">{i + 1}</div>
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                <s.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
