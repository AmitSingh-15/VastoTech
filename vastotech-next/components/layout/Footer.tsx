import Link from 'next/link';
import { Linkedin, Twitter, Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import Container from '@/components/ui/Container';
import { FOOTER_COLUMNS } from '@/constants/data';

const SOCIAL = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy-900 text-slate-300">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="#hero" className="flex items-center gap-2" aria-label="Vastotech home">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-orange-400 text-white">
                <span className="font-display text-base font-extrabold">V</span>
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight text-white">
                VASTOTECH
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              We deliver intelligent software and IoT solutions that help businesses automate,
              secure and grow — for a smarter, connected future.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-400">
              <p className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-orange-400" />
                <span>Leisure Town, Malwadi, Hadapsar, Pune, Maharashtra, India</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0 text-orange-400" />
                <a href="tel:+919699675864" className="hover:text-white">
                  (+91) 9699675864
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0 text-orange-400" />
                <a href="mailto:info@vastotech.in" className="hover:text-white">
                  info@vastotech.in
                </a>
              </p>
            </div>

            <ul className="mt-6 flex gap-3">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-orange-400 hover:bg-orange-400 hover:text-white"
                  >
                    <Icon size={16} />
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
            &copy; {new Date().getFullYear()} Vastotech Solutions Private Limited. All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="#" className="hover:text-orange-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-orange-400">
                Terms of Use
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}
