import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { siteConfig } from '../config/site.config';

export const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          title="About Koshiv Roadlines"
          description="A road transport brand focused on professional bus and truck service solutions."
          align="center"
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              Koshiv Roadlines is a road transport brand founded by{' '}
              <span className="font-semibold text-slate-900">
                {siteConfig.founderName}
              </span>
              . We specialise in bus service, truck service, and professional road
              transport solutions. Our goal is to provide reliable, safety‑focused
              transport support for passengers and goods, backed by clear
              communication and timely coordination.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              As a serious, founder‑led operation, we treat every inquiry with
              personal attention. Whether you need a bus for a group trip,
              regular staff transport, goods movement, or a long‑term transport
              contract, we are ready to assist.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm max-w-xs">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                <svg
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <p className="mt-4 text-lg font-semibold text-slate-900">
                {siteConfig.founderName}
              </p>
              <p className="text-sm text-slate-500">{siteConfig.founderTitle}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};