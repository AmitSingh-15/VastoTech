import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Container from '@/components/ui/Container';
import { WaveLines, DotGrid } from '@/components/ui/Decorations';
import { FOOTER_COLUMNS, CONTACT, SITE } from '@/constants/data';

const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/company/vastotech',
    label: 'LinkedIn',
    external: true,
  },
  { href: '#', label: 'Facebook' },
  { href: '#', label: 'YouTube' },
  { href: `mailto:${CONTACT.emails[0]}`, label: 'Email' },
];

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

            <div className="relative mt-6 inline-block">
              <Image
                src="/assets/footer-social-icons.png"
                alt=""
                width={180}
                height={44}
                className="h-11 w-auto"
              />
              {/* Invisible click targets overlaid on each icon for accessibility */}
              <ul className="absolute inset-0 flex items-center gap-3">
                {SOCIAL_LINKS.map(({ href, label, external }) => (
                  <li key={label} className="h-11 w-11">
                    <a
                      href={href}
                      aria-label={label}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="block h-full w-full rounded-full transition-transform duration-300 hover:scale-110"
                    >
                      <span className="sr-only">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
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
