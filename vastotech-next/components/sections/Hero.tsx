'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Cloud, BarChart3, Cpu, Sparkles, Wifi } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const FLOATING_ICONS = [
  { icon: Cloud, top: '8%', left: '6%', delay: 0 },
  { icon: BarChart3, top: '20%', right: '8%', delay: 0.15 },
  { icon: Cpu, top: '52%', left: '2%', delay: 0.3 },
  { icon: Sparkles, top: '68%', right: '12%', delay: 0.45 },
  { icon: Wifi, top: '36%', left: '48%', delay: 0.6 },
] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white pt-24 sm:pt-28 lg:pt-32"
    >
      <div className="pointer-events-none absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-orange-100/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 -left-32 h-[420px] w-[420px] rounded-full bg-navy-100/40 blur-3xl" />

      <Container className="relative pb-16 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-500">
              <Sparkles size={14} /> Smart Infrastructure
            </span>

            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-800 text-balance sm:text-5xl lg:text-6xl">
              Intelligent Solutions.
              <br />
              <span className="text-orange-400">Connected Future.</span>
            </h1>

            <div className="mt-5 h-1 w-16 bg-orange-400" />

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Empowering businesses with intelligent software and IoT solutions for a smarter, safer
              and more efficient world.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#solutions" variant="primary" size="lg">
                Our Solutions
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Get in Touch
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2.5rem] rounded-bl-[5rem] shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80"
                alt="Smart city skyline with IoT connectivity"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/60 via-navy-700/30 to-transparent" />
            </div>

            {FLOATING_ICONS.map(({ icon: Icon, delay, ...pos }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + delay }}
                style={pos as React.CSSProperties}
                className="absolute hidden lg:block"
              >
                <div className="animate-float-slow grid h-12 w-12 place-items-center rounded-2xl bg-white/95 shadow-card backdrop-blur">
                  <Icon size={20} className="text-orange-400" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
