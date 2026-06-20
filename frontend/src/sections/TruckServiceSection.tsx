import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

const useCases = [
  'Goods transport',
  'Commercial load movement',
  'Container movement inquiry',
  'Business supply movement',
  'Vendor transport support',
  'Route-based truck requirement',
];

export const TruckServiceSection = () => {
  return (
    <section id="truck-service" className="bg-slate-50 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:gap-12">
          <div className="flex-1">
            <SectionHeading
              eyebrow="Goods Transport"
              title="Truck Service"
              description="Reliable truck service inquiry support for goods movement and commercial transport. We arrange transport based on your cargo requirements and route."
              align="left"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {useCases.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3"
                >
                  <span className="flex h-2 w-2 rounded-full bg-amber-500" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button href="#contact" variant="primary">
                Need Truck Service? Request Quote
              </Button>
            </div>
          </div>
          {/* Visual card */}
          <div className="mt-12 lg:mt-0 w-full max-w-xs">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
              <svg
                className="mx-auto h-20 w-20 text-amber-500"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                aria-hidden="true"
              >
                <rect x="35" y="30" width="50" height="35" rx="4" />
                <rect x="15" y="35" width="20" height="25" rx="4" />
                <rect x="20" y="38" width="12" height="12" rx="2" />
                <circle cx="28" cy="72" r="7" fill="currentColor" />
                <circle cx="70" cy="72" r="7" fill="currentColor" />
              </svg>
              <p className="mt-4 text-sm font-medium text-slate-500">
                Efficient Goods Movement Support
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};