import type { CtaLink, ServiceItem, FeatureItem } from '../types';

export const heroContent = {
  headline: 'Reliable Road Transport for Passengers and Goods',
  subheadline:
    'Koshiv Roadlines provides professional bus service, truck service, and road transport solutions with a focus on safety, timing, and dependable support.',
  primaryCta: {
    label: 'Get Transport Quote',
    href: '#contact',
  } as CtaLink,
  secondaryCta: {
    label: 'WhatsApp Inquiry',
    href: '', // will be dynamically set using the WhatsApp helper
  } as CtaLink,
  trustPoints: [
    'Safe Transport',
    'Timely Coordination',
    'Bus & Truck Support',
    'Professional Inquiry Handling',
  ],
};

export const servicesOverview: ServiceItem[] = [
  {
    title: 'Bus Service',
    description:
      'Safe and comfortable passenger transport for groups, events, and scheduled routes.',
  },
  {
    title: 'Truck Service',
    description:
      'Reliable goods transport with dedicated trucks and professional logistics support.',
  },
  {
    title: 'Contract Transport',
    description:
      'Long-term transport contracts for consistent bus or truck requirements.',
  },
  {
    title: 'Route-Based Inquiry',
    description:
      'Custom quotes based on specific origin-destination routes for passengers or cargo.',
  },
];

export const whyChooseUs: FeatureItem[] = [
  {
    title: 'Professional Approach',
    description:
      'We handle every inquiry with professionalism, transparency, and prompt response.',
  },
  {
    title: 'Safe Movement',
    description:
      'Safety protocols and experienced drivers ensure secure transport for passengers and goods.',
  },
  {
    title: 'Timely Coordination',
    description:
      'We prioritise on-time departures, pickups, and deliveries through efficient planning.',
  },
  {
    title: 'Clear Communication',
    description:
      'Direct communication and status updates keep you informed at every step.',
  },
  {
    title: 'Bus + Truck Focus',
    description:
      'Specialised in both passenger and cargo transport, offering integrated solutions.',
  },
  {
    title: 'Founder-Led Operations',
    description:
      'Led by Koushal, we maintain personal accountability and high service standards.',
  },
];

export const footerShortText =
  'Koshiv Roadlines — Safe and reliable bus and truck transport services.';