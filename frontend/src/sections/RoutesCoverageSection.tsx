import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';

const routeInquiryCards = [
  {
    title: 'Local Transport Inquiry',
    description:
      'Share your local pickup and drop details, vehicle type, and schedule. We’ll assist with a suitable transport plan.',
  },
  {
    title: 'Intercity Transport Inquiry',
    description:
      'Tell us your origin and destination cities, along with passenger count or cargo type. We’ll help arrange the movement.',
  },
  {
    title: 'Commercial Route Inquiry',
    description:
      'For regular business or vendor movement needs, share your route and frequency. We’ll discuss a transport arrangement.',
  },
  {
    title: 'Custom Transport Requirement',
    description:
      'Have a specific route or transport need not covered above? Share the details and we’ll look into it.',
  },
];

export const RoutesCoverageSection = () => {
  return (
    <section id="routes" className="bg-slate-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          title="Route Inquiry Support"
          description="Share your pickup location, destination, vehicle type, and schedule requirement. Koshiv Roadlines will assist with route-based passenger and goods transport inquiries."
          align="center"
        />
        <p className="mt-6 text-center text-sm text-slate-500">
          * Routes are handled on an inquiry basis; we do not maintain a fixed
          schedule or claim pan‑India coverage.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {routeInquiryCards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                <svg
                  className="h-5 w-5 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 20l-5.5-5.5c-.3-.3-.3-.8 0-1.1L9 7.9M15 4l5.5 5.5c.3.3.3.8 0 1.1L15 16.1"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{card.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};