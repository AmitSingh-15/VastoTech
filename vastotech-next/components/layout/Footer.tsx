import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Linkedin, Facebook, Youtube } from 'lucide-react';
import Container from '@/components/ui/Container';
import { WaveLines, DotGrid } from '@/components/ui/Decorations';
import { FOOTER_COLUMNS, CONTACT, SITE } from '@/constants/data';

interface SocialLink {
  href: string;
  label: string;
  external: boolean;
  icon: React.ElementType;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://www.linkedin.com/company/vastotech',
    label: 'LinkedIn',
    external: true,
    icon: Linkedin,
  },
  { 
    href: '#', 
    label: 'Facebook',
    external: false,
    icon: Facebook,
  },
  { 
    href: '#', 
    label: 'YouTube',
    external: false,
    icon: Youtube,
  },
  { 
    href: `mailto:${CONTACT.emails[0]}`, 
    label: 'Email',
    external: false,
    icon: Mail,
  },
];

const getSocialIconClasses = (label: string) => {
  const baseClasses = "inline-flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 transform hover:scale-125 shadow-lg";
  
  switch (label) {
    case 'LinkedIn':
      return `${baseClasses} bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:shadow-blue-500/50 hover:shadow-2xl`;
    case 'Facebook':
      return `${baseClasses} bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:shadow-blue-400/50 hover:shadow-2xl`;
    case 'YouTube':
      return `${baseClasses} bg-gradient-to-br from-red-600 to-red-700 text-white hover:shadow-red-500/50 hover:shadow-2xl`;
    case 'Email':
      return `${baseClasses} bg-gradient-to-br from-orange-500 to-orange-600 text-white hover:shadow-orange-400/50 hover:shadow-2xl`;
    default:
      return `${baseClasses} bg-gradient-to-br from-slate-600 to-slate-700 text-white`;
  }
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-slate-300">
      <WaveLines className="pointer-events-none absolute -top-6 right-0 hidden h-48 w-[480px] text-white/5 lg:block" />
      <DotGrid
        className="pointer-events-none absolute bottom-20 left-6 hidden h-24 w-32 text-white/10 lg:block"
        rows={5}
        cols={8}
      />
      <Container className="relative py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
              aria-label="Vastotech home"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-orange-400 font-display text-lg font-extrabold text-white">
                V
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-xl font-extrabold tracking-tight text-white">
                  VASTOTECH
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-400">
                  Intelligent Solutions
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              We deliver intelligent software and IoT solutions that help businesses automate,
              secure and grow — for a smarter, connected future.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-400">
              {CONTACT.offices.map((office) => (
                <p key={office.label} className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-orange-400" />
                  <span>
                    <strong className="text-slate-300">{office.label}:</strong> {office.address}
                  </span>
                </p>
              ))}
              {CONTACT.phones.map((phone) => (
                <p key={phone} className="flex items-center gap-3">
                  <Phone size={16} className="flex-shrink-0 text-orange-400" />
                  <a
                    href={`tel:${phone.replace(/[^\d+]/g, '')}`}
                    className="hover:text-white"
                  >
                    {phone}
                  </a>
                </p>
              ))}
              {CONTACT.emails.map((email) => (
                <p key={email} className="flex items-center gap-3">
                  <Mail size={16} className="flex-shrink-0 text-orange-400" />
                  <a href={`mailto:${email}`} className="hover:text-white">
                    {email}
                  </a>
                </p>
              ))}
              <p className="flex items-center gap-3">
                <Clock size={16} className="flex-shrink-0 text-orange-400" />
                <span>{CONTACT.hours}</span>
              </p>
            </div>

            <ul className="mt-8 flex items-center gap-5">
              {SOCIAL_LINKS.map(({ href, label, external, icon: Icon }) => (
                <li key={label} className="group">
                  <a
                    href={href}
                    aria-label={label}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className={getSocialIconClasses(label)}
                  >
                    <Icon size={24} className="group-hover:animate-bounce" />
                    <span className="sr-only">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading} className="lg:col-span-2">
              <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-orange-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10 bg-navy-900/80">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-sm text-slate-400 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:text-orange-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-orange-400">
                Terms of Use
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}
