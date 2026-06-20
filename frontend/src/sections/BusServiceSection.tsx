import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

const useCases = [
  'Passenger travel inquiry',
  'Group travel inquiry',
  'Staff transport',
  'School / college / company route support',
  'Private trip inquiry',
  'Route-based bus service',
];

export const BusServiceSection = () => {
  return (
    <section id="bus-service" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:gap-12">
          <div className="flex-1">
            <SectionHeading
              eyebrow="Passenger Transport"
              title="Bus Service"
              description="Professional bus service solutions for passengers, groups, and institutions. We handle inquiries and arrange safe, timely transport based on your route requirements."
              align="left"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {useCases.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  <span className="flex h-2 w-2 rounded-full bg-amber-500" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button href="#contact" variant="primary">
                Need Bus Service? Send Inquiry
              </Button>
            </div>
          </div>
          {/* Visual card (pure CSS/Tailwind) */}
          <div className="mt-12 lg:mt-0 w-full max-w-xs">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm">
              <svg
                className="mx-auto h-20 w-20 text-amber-500"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                aria-hidden="true"
              >
                <rect x="15" y="30" width="70" height="40" rx="6" />
                <rect x="20" y="35" width="20" height="15" rx="3" />
                <rect x="45" y="35" width="30" height="15" rx="3" />
                <circle cx="30" cy="75" r="8" fill="currentColor" />
                <circle cx="70" cy="75" r="8" fill="currentColor" />
              </svg>
              <p className="mt-4 text-sm font-medium text-slate-500">
                Safe & Reliable Passenger Transport
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};