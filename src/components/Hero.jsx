import { useState } from 'react';
import { Rocket, Link as LinkIcon, Wand2, Zap } from 'lucide-react';

export default function Hero() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const handleShorten = (e) => {
    e.preventDefault();
    setCopied(false);
    if (!longUrl.trim()) return;
    // Demo-only short code generator (no backend call)
    const hash = Math.random().toString(36).slice(2, 8);
    const url = `https://lnk.to/${hash}`;
    setShortUrl(url);
  };

  const handleCopy = async () => {
    if (!shortUrl) return;
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      setCopied(false);
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10 sm:pt-24 sm:pb-16">
        <div className="flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 w-fit mb-6">
          <Rocket size={14} />
          New: Smart Link Manager with built‑in URL Shortener
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Organize, brand, and track every link you share
            </h1>
            <p className="mt-5 text-lg leading-7 text-gray-600">
              Create beautiful smart links, shorten long URLs, and get realtime insights. All in one simple, powerful dashboard.
            </p>

            <ul className="mt-6 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
              <li className="flex items-center gap-2"><Zap className="text-indigo-600" size={18} />One‑click URL shortening</li>
              <li className="flex items-center gap-2"><Wand2 className="text-indigo-600" size={18} />Custom domains & slugs</li>
              <li className="flex items-center gap-2"><LinkIcon className="text-indigo-600" size={18} />Smart link collections</li>
              <li className="flex items-center gap-2"><Rocket className="text-indigo-600" size={18} />Analytics that convert</li>
            </ul>

            <form onSubmit={handleShorten} className="mt-8 rounded-xl border border-gray-200 bg-white p-2 shadow-sm sm:flex sm:items-center sm:gap-2">
              <input
                type="url"
                required
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                placeholder="Paste a long URL (e.g. https://yourdomain.com/very/long/path)"
                className="w-full rounded-lg border-0 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="mt-2 w-full sm:mt-0 sm:w-auto rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700 transition-colors"
              >
                Shorten URL
              </button>
            </form>

            {shortUrl && (
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={shortUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-indigo-700 font-semibold">
                  <LinkIcon size={18} />
                  {shortUrl}
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-fit rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700 hover:bg-indigo-100"
                >
                  {copied ? 'Copied!' : 'Copy link'}
                </button>
              </div>
            )}
          </div>

          <div className="relative">
            <div className="absolute -top-20 -right-16 h-72 w-72 rounded-full bg-indigo-100 blur-3xl" />
            <div className="absolute -bottom-16 -left-10 h-72 w-72 rounded-full bg-pink-100 blur-3xl" />

            <div className="relative rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-lg backdrop-blur">
              <div className="mb-4 flex items-center gap-2 text-sm font-medium text-gray-700">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Collection</p>
                  <p className="font-semibold text-gray-900">Launch Campaign</p>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Top Links</p>
                  <div className="space-y-3">
                    <Item label="Homepage" url="https://lnk.to/home" clicks={1245} />
                    <Item label="Pricing" url="https://lnk.to/pricing" clicks={842} />
                    <Item label="Blog" url="https://lnk.to/blog" clicks={529} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({ label, url, clicks }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="min-w-0">
        <p className="truncate font-medium text-gray-900">{label}</p>
        <a href={url} target="_blank" rel="noreferrer" className="truncate text-sm text-indigo-600 hover:underline">{url}</a>
      </div>
      <div className="shrink-0 rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700 border border-gray-200">
        {clicks} clicks
      </div>
    </div>
  );
}
