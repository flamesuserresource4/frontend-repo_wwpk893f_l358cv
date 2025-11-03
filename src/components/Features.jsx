import { Link, Shield, BarChart3, Layers, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Link,
    title: 'Smart Links',
    desc: 'Bundle multiple destinations into one branded page with buttons, embeds, and social previews.',
  },
  {
    icon: Sparkles,
    title: 'URL Shortener',
    desc: 'Turn long, messy URLs into clean, memorable links with custom slugs and UTM helpers.',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    desc: 'Track clicks, referrers, devices, and geography. Export insights or pipe them into your stack.',
  },
  {
    icon: Shield,
    title: 'Privacy & Security',
    desc: 'Password-protect pages, set link expiry, and manage role-based access for your team.',
  },
  {
    icon: Layers,
    title: 'Collections',
    desc: 'Organize links by project or campaign. Share workspaces and collaborate with your team.',
  },
];

export default function Features() {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to share smarter</h2>
          <p className="mt-3 text-gray-600">From fast link shortening to beautiful smart pages and deep analytics — we built the toolkit so you can focus on growth.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-6 hover:bg-white hover:shadow-sm transition-all">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                <f.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
