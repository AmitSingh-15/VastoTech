'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function CTA() {
  return (
    <section id="resources" className="relative overflow-hidden bg-navy-900 py-16 lg:py-20">
      <div
        aria-hidden
        className="absolute -right-16 top-0 h-full w-72 -skew-x-12 bg-orange-400/70"
      />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
        >
          <div className="flex items-start gap-5">
            <span className="hidden h-14 w-14 flex-shrink-0 place-items-center rounded-2xl bg-white/10 text-white backdrop-blur md:grid">
              <Sparkles size={24} />
            </span>
            <div>
              <h2 className="font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Ready to transform your business?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300 sm:text-base">
                Let&apos;s connect and build intelligent solutions for your success.
              </p>
            </div>
          </div>
          <Button href="#contact" variant="primary" size="lg" className="flex-shrink-0">
            Get in Touch
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
