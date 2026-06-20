import { siteConfig } from '../../config/site.config';
import { navItems } from '../../constants/navigation';

export const Footer = () => {
  const currentYear = siteConfig.copyrightYear;

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top row: brand, service line, founder */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-amber-500">
              {siteConfig.siteName}
            </h3>
            <p className="mt-2 text-sm">
              Bus Service • Truck Service • Road Transport
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Founder</h4>
            <p className="mt-2 text-sm">
              {siteConfig.founderName} – {siteConfig.founderTitle}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <span className="text-slate-400">Domain: </span>
                <a
                  href={siteConfig.websiteUrl}
                  className="hover:text-amber-400"
                >
                  {siteConfig.domain}
                </a>
              </li>
              <li>
                <span className="text-slate-400">Email: </span>
                <a
                  href={`mailto:${siteConfig.futureEmail}`}
                  className="hover:text-amber-400"
                >
                  {siteConfig.futureEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Navigation links (footer) */}
        <div className="mt-8 border-t border-slate-700 pt-8">
          <div className="flex flex-wrap justify-center gap-3 gap-y-2 text-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm text-slate-500">
          © {currentYear} {siteConfig.siteName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};