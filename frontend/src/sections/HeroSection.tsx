import { heroContent } from '../data/homepage.data';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

// Simple inline SVG icons to avoid external packages
const CheckIcon = () => (
  <svg
    className="h-5 w-5 flex-shrink-0 text-amber-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const BusIcon = () => (
  <svg
    className="h-16 w-16 text-amber-400"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    aria-hidden="true"
  >
    {/* Bus body */}
    <rect x="15" y="30" width="70" height="40" rx="6" />
    {/* Windows */}
    <rect x="20" y="35" width="20" height="15" rx="3" />
    <rect x="45" y="35" width="30" height="15" rx="3" />
    {/* Wheels */}
    <circle cx="30" cy="75" r="8" fill="currentColor" />
    <circle cx="70" cy="75" r="8" fill="currentColor" />
  </svg>
);

const TruckIcon = () => (
  <svg
    className="h-16 w-16 text-amber-400"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    aria-hidden="true"
  >
    {/* Cargo body */}
    <rect x="35" y="30" width="50" height="35" rx="4" />
    {/* Cab */}
    <rect x="15" y="35" width="20" height="25" rx="4" />
    {/* Cab window */}
    <rect x="20" y="38" width="12" height="12" rx="2" />
    {/* Wheels */}
    <circle cx="28" cy="72" r="7" fill="currentColor" />
    <circle cx="70" cy="72" r="7" fill="currentColor" />
  </svg>
);

export const HeroSection = () => {
  const { headline, subheadline, primaryCta, secondaryCta, trustPoints } =
    heroContent;

  return (
    <section id="home" className="bg-slate-900 py-20 text-white sm:py-28">
      <Container>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {headline}
            </h1>
            <p className="mt-6 text-lg text-slate-300">{subheadline}</p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </Button>
              <Button href={secondaryCta.href || '#'} variant="outline">
                {secondaryCta.label}
              </Button>
            </div>

            {/* Trust points */}
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-left sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckIcon />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right-side visual card (pure CSS/Tailwind) */}
          <div className="w-full max-w-xs lg:max-w-sm">
            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-xl">
              <div className="flex flex-col items-center gap-6">
                <BusIcon />
                <TruckIcon />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-slate-400">
                Passenger & Cargo Transport
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};