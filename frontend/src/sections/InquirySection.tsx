import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { siteConfig } from '../config/site.config';
import { FormEvent } from 'react';

const serviceTypeOptions = [
  'Bus Service',
  'Truck Service',
  'Contract Transport',
  'Other Requirement',
] as const;

export const InquirySection = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder: no backend integration
    alert(
      `Thank you for your inquiry. We are not yet accepting online submissions.\nPlease email us at ${siteConfig.futureEmail}`
    );
  };

  return (
    <section id="contact" className="bg-slate-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          title="Transport Inquiry"
          description="Share your requirement and we’ll get back to you with a custom plan."
          align="center"
        />
        <p className="mt-4 text-center text-sm text-slate-500">
          Email:{' '}
          <a
            href={`mailto:${siteConfig.futureEmail}`}
            className="text-amber-600 hover:text-amber-500 underline"
          >
            {siteConfig.futureEmail}
          </a>
        </p>

        <div className="mx-auto mt-12 max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="grid gap-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="mt-1 block w-full rounded-md border border-slate-300 px-4 py-2 text-sm shadow-sm focus:border-amber-500 focus:ring-amber-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700"
                >
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="mt-1 block w-full rounded-md border border-slate-300 px-4 py-2 text-sm shadow-sm focus:border-amber-500 focus:ring-amber-500"
                />
              </div>

              {/* Service Type */}
              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-sm font-medium text-slate-700"
                >
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  defaultValue=""
                  className="mt-1 block w-full rounded-md border border-slate-300 px-4 py-2 text-sm shadow-sm focus:border-amber-500 focus:ring-amber-500"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceTypeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pickup Location */}
              <div>
                <label
                  htmlFor="pickup"
                  className="block text-sm font-medium text-slate-700"
                >
                  Pickup Location *
                </label>
                <input
                  id="pickup"
                  name="pickup"
                  type="text"
                  required
                  placeholder="City, area or address"
                  className="mt-1 block w-full rounded-md border border-slate-300 px-4 py-2 text-sm shadow-sm focus:border-amber-500 focus:ring-amber-500"
                />
              </div>

              {/* Drop Location */}
              <div>
                <label
                  htmlFor="drop"
                  className="block text-sm font-medium text-slate-700"
                >
                  Drop Location *
                </label>
                <input
                  id="drop"
                  name="drop"
                  type="text"
                  required
                  placeholder="City, area or address"
                  className="mt-1 block w-full rounded-md border border-slate-300 px-4 py-2 text-sm shadow-sm focus:border-amber-500 focus:ring-amber-500"
                />
              </div>

              {/* Preferred Date */}
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-slate-700"
                >
                  Preferred Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="mt-1 block w-full rounded-md border border-slate-300 px-4 py-2 text-sm shadow-sm focus:border-amber-500 focus:ring-amber-500"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700"
                >
                  Message / Requirement
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Briefly describe your transport requirement..."
                  className="mt-1 block w-full rounded-md border border-slate-300 px-4 py-2 text-sm shadow-sm focus:border-amber-500 focus:ring-amber-500"
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Submit Inquiry
              </Button>
              <Button
                href="#"
                variant="outline"
                className="w-full"
                onClick={(e) => {
                  e.preventDefault();
                  alert(
                    `WhatsApp inquiry is not yet configured.\nPlease email us at ${siteConfig.futureEmail}`
                  );
                }}
              >
                WhatsApp Inquiry
              </Button>
            </div>

            <p className="text-xs text-slate-400 text-center">
              By submitting, you agree to be contacted by Koshiv Roadlines
              regarding your transport requirement. No data is stored on this
              website.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
};