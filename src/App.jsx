import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import CTA from './components/CTA.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} SmartLink — Share smarter.</p>
          <div className="text-sm text-gray-600">Built with love for creators, marketers, and teams.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
