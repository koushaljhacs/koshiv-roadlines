import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

const useCases = [
  'Company staff movement',
  'Factory / vendor transport',
  'Regular goods movement',
  'Long-term transport contract',
  'Commercial logistics support',
  'School / college transport inquiry',
];

export const ContractTransportSection = () => {
  return (
    <section id="contract-transport" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:gap-12">
          <div className="flex-1">
            <SectionHeading
              eyebrow="B2B Transport"
              title="Contract Transport"
              description="Regular route-based transport support for businesses, institutions, and long-term logistics needs. Professional inquiry handling with a focus on reliability and clear communication."
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
                Discuss Contract Requirement
              </Button>
            </div>
          </div>
          {/* Visual card */}
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
                <rect x="10" y="30" width="80" height="45" rx="6" />
                <rect x="20" y="20" width="25" height="20" rx="3" />
                <rect x="55" y="20" width="25" height="20" rx="3" />
                <circle cx="30" cy="85" r="6" fill="currentColor" />
                <circle cx="70" cy="85" r="6" fill="currentColor" />
              </svg>
              <p className="mt-4 text-sm font-medium text-slate-500">
                Long-Term Transport Solutions
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};