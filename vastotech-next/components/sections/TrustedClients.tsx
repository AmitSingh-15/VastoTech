'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import { CLIENT_LOGOS } from '@/constants/data';

export default function TrustedClients() {
  // Duplicate the array so the marquee loops seamlessly
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="border-y border-slate-100 bg-white py-12">
      <Container>
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <p className="flex-shrink-0 text-xs font-bold uppercase tracking-[0.18em] text-navy-800 lg:max-w-[140px] lg:text-left">
            Trusted by Industry Leaders
          </p>

          <div className="relative w-full overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

            <ul className="animate-marquee flex items-center gap-12">
              {logos.map((logo, idx) => (
                <li key={`${logo.name}-${idx}`} className="flex-shrink-0">
                  <div className="relative h-12 w-32 opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      sizes="128px"
                      className="object-contain"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
