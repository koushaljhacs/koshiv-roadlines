export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  siteName: string;
  domain: string;
  websiteUrl: string;
  founderName: string;
  founderTitle: string;
  futureEmail: string;
  businessSummary: string;
  copyrightYear: number;
}