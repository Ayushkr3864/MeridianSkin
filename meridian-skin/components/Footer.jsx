import { Instagram, Facebook, Youtube } from "lucide-react";

const QUICK_LINKS = [
  { label: "Treatments", href: "#services" },
  { label: "Why Meridian", href: "#why-us" },
  { label: "Patient results", href: "#stats" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_LINKS = [
  "Acne & scar therapy",
  "Chemical peels",
  "Anti-ageing & fillers",
  "Pigmentation correction",
  "Hair & scalp care",
  "Bridal & event prep",
];

export default function Footer() {
  return (
    <footer className="bg-pine-900 text-stone-50/70">
      <div className="container-content py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-stone-50/10 text-stone-50">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C12 2 6 8.5 6 14a6 6 0 0012 0c0-5.5-6-12-6-12z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="font-display text-xl text-stone-50">
              Meridian Skin
            </span>
          </div>
          <p className="mt-5 text-[14px] leading-relaxed max-w-xs">
            Dermatologist-led skin, hair and aesthetic care across three
            clinics in Delhi NCR since 2011.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-50/15 hover:border-stone-50/40 hover:text-stone-50 transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 lg:col-start-6">
          <p className="text-[13px] text-stone-50/50 mb-4">Quick links</p>
          <ul className="flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[14px] hover:text-stone-50 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[13px] text-stone-50/50 mb-4">Services</p>
          <ul className="flex flex-col gap-3">
            {SERVICE_LINKS.map((label) => (
              <li key={label}>
                <a href="#services" className="text-[14px] hover:text-stone-50 transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[13px] text-stone-50/50 mb-4">Contact</p>
          <ul className="flex flex-col gap-3 text-[14px]">
            <li>14 Amrita Shergill Marg, New Delhi 110003</li>
            <li>+91 11 4000 1234</li>
            <li>care@meridianskin.in</li>
            <li>Mon – Sat, 10am – 7pm</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-50/10">
        <div className="container-content py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] text-stone-50/45">
          <p>© 2026 Meridian Skin Clinic. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-stone-50/80 transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-stone-50/80 transition-colors">Terms of use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
