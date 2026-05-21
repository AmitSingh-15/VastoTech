'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';

export default function TrustedClients() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white py-8 lg:py-12">
      <Container>
        <div className="relative w-full">
          
          {/* LARGE LOGO STRIP */}
          <div className="relative h-[260px] w-full lg:h-[420px]">
            <Image
              src="/assets/logo-strip.png"
              alt="Trusted clients"
              fill
              priority
              sizes="100vw"
              className="object-contain scale-[1.35] transition-transform duration-500 hover:scale-[1.4]"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
