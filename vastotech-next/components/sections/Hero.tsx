'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { DotGrid } from '@/components/ui/Decorations';
import { FEATURES, SITE } from '@/constants/data';

const PRODUCT_CARDS = [
  {
    title: 'Video Analytics Software',
    description:
      'AI-powered video analytics for enhanced surveillance, real-time insights and smarter decisions.',
    href: '/solutions/video-analytics-software',
    image: '/assets/card-video-analytics.png',
  },
  {
    title: 'Advance BMS Software',
    description:
      'Integrated Building Management Systems for efficient operations, automation and optimal performance.',
    href: '/solutions/advanced-bms-software',
    image: '/assets/card-bms.png',
  },
  {
    title: 'IoT Solutions',
    description:
      'End-to-end IoT solutions to connect, monitor and manage devices — driving intelligence and efficiency.',
    href: '/solutions/iot-solutions',
    image: '/assets/card-iot.png',
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white pt-24 sm:pt-28 lg:pt-32"
    >
      <DotGrid
        className="pointer-events-none absolute left-2 top-32 hidden h-32 w-32 opacity-50 lg:block"
        rows={7}
        cols={7}
      />

      <Container className="relative pb-16 lg:pb-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* LEFT: Headline + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <motion.h1 
              className="font-display text-4xl font-extrabold uppercase leading-[1.1] tracking-tight text-navy-900 text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="block"
              >
                {SITE.taglineHero.line1}
              </motion.span>
              
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
                className="relative block"
              >
                <span className="relative inline-block">
                  <span className="absolute inset-0 -z-10 mx-2 h-full w-full transform bg-gradient-to-r from-orange-400 to-orange-600 blur-xl opacity-60" />
                  <span className="relative bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    {SITE.taglineHero.line2}
                  </span>
                </span>
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                className="block"
              >
                {SITE.taglineHero.line3}
              </motion.span>
              
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.45 }}
                className="relative block"
              >
                <span className="relative inline-block">
                  {/* Animated gradient background with theme colors */}
                  <span className="absolute inset-0 -z-10 mx-2 h-full w-full transform bg-gradient-to-r from-navy-600 via-orange-500 to-orange-400 blur-2xl opacity-50 animate-pulse" />
                  {/* Gradient text using theme colors */}
                  <span className="relative bg-gradient-to-r from-navy-700 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                    {SITE.taglineHero.line4}
                  </span>
                </span>
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
              className="mt-6 h-1.5 w-24 origin-left rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 shadow-lg shadow-orange-400/50"
            />

            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600">
              Empowering businesses with intelligent software and IoT solutions for a smarter,
              safer and more efficient world.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/#solutions" variant="primary">
                Our Solutions <ArrowRight size={14} />
              </Button>
              <Button href="/#contact" variant="secondary">
                Get in Touch
              </Button>
            </div>
          </motion.div>

          {/* RIGHT: Hero banner image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="relative lg:col-span-7"
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-[2.5rem] rounded-bl-[4rem] shadow-card">
              <Image
                src="/assets/hero-banner.png"
                alt="Smart city skyline with IoT connectivity"
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>

            <div
              aria-hidden
              className="absolute -right-6 top-1/3 -z-10 h-32 w-12 rotate-12 rounded-full bg-orange-400 opacity-90"
            />
          </motion.div>
        </div>

        {/* BOTTOM: Features card + 3 product cards */}
        <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <ul className="space-y-5">
                {FEATURES.map((f) => {
                  const Icon = f.icon;
                  return (
                    <li key={f.title} className="flex items-start gap-3">
                      <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-orange-50 text-orange-400">
                        <Icon size={20} />
                      </span>
                      <div>
                        <h3 className="text-[13px] font-bold uppercase tracking-wide text-navy-800">
                          {f.title}
                        </h3>
                        <p className="mt-1 text-xs leading-snug text-slate-500">
                          {f.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>

          {/* 3 product cards — use the cropped asset images directly */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-9">
            {PRODUCT_CARDS.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  href={card.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-6 pt-4">
                    <p className="text-center text-xs leading-relaxed text-slate-600">
                      {card.description}
                    </p>
                    <span className="mt-4 inline-flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-400">
                      Learn More
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
