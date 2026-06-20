import { servicesOverview } from '../data/homepage.data';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';

export const ServicesSection = () => {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          title="Our Services"
          description="Comprehensive bus and truck transport solutions tailored for every need."
          align="center"
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicesOverview.map((service) => (
            <div
              key={service.title}
              className="group flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Accent top border */}
              <div className="mb-4 h-1 w-12 rounded-full bg-amber-500" />
              <h3 className="text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};