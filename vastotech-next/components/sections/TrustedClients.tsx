'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';

export default function TrustedClients() {
  return (
    <section className="border-b border-slate-100 bg-white py-8 lg:py-10">
      <Container>
        <div className="flex flex-col items-stretch gap-6 sm:flex-row sm:items-center sm:gap-10">
          <div className="flex items-center gap-6 sm:flex-shrink-0">
            <p className="text-[11px] font-bold uppercase leading-tight tracking-[0.18em] text-navy-800">
              Trusted by
              <br />
              Industry Leaders
            </p>
            <span aria-hidden className="hidden h-12 w-px bg-slate-200 sm:block" />
          </div>

          <div className="relative w-full">
            <div className="relative h-12 w-full opacity-90 transition-opacity duration-300 hover:opacity-100 sm:h-14">
              <Image
                src="/assets/logo-strip.png"
                alt="Industry-leading clients"
                fill
                sizes="(min-width: 1024px) 1000px, 100vw"
                className="object-contain object-left sm:object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
