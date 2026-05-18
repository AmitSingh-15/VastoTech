'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { DotGrid } from '@/components/ui/Decorations';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-14">
      <DotGrid className="pointer-events-none absolute right-4 top-4 hidden h-20 w-20 opacity-40 lg:block" rows={5} cols={5} />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-white px-6 py-8 shadow-soft md:flex-row md:items-center md:px-10"
        >
          <div className="flex items-start gap-5">
            <div className="relative h-14 w-14 flex-shrink-0">
              <Image
                src="/assets/cta-icon.png"
                alt=""
                fill
                sizes="56px"
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="font-display text-xl font-extrabold leading-tight text-navy-800 sm:text-2xl">
                Ready to transform your business?
              </h2>
              <p className="mt-1.5 text-sm text-slate-600 sm:text-base">
                Let&apos;s connect and build intelligent solutions for your success.
              </p>
            </div>
          </div>
          <Button href="/#contact" variant="primary" className="flex-shrink-0">
            Get in Touch <ArrowRight size={14} />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
