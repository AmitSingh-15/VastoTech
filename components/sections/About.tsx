'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { DotGrid, WaveLines } from '@/components/ui/Decorations';
import { ABOUT_BULLETS } from '@/constants/data';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <DotGrid className="pointer-events-none absolute -right-6 top-12 hidden h-24 w-24 opacity-60 lg:block" rows={6} cols={6} />
      <WaveLines className="pointer-events-none absolute -left-10 bottom-10 hidden h-32 w-80 opacity-50 lg:block" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="About Vastotech"
              title={
                <>
                  Building a smarter
                  <br />
                  and connected future
                </>
              }
              description="At Vastotech, we combine deep domain expertise with cutting-edge technologies to deliver innovative solutions that solve real-world challenges. With over a decade of experience in IT, IoT, and software development, we partner with businesses to make technology accessible and impactful."
            />

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {ABOUT_BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3 text-slate-700">
                  <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-orange-100 text-orange-500">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="/#contact" variant="primary">
                Know More About Us
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/assets/about-building.png"
                alt="Modern corporate office building"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute bottom-6 right-6 w-48 sm:right-8 sm:bottom-8 sm:w-52 lg:right-10 lg:bottom-10"
            >
              <div className="relative aspect-[5/6] w-full drop-shadow-2xl">
                <Image
                  src="/assets/experience-badge.png"
                  alt="10+ Years of Experience"
                  fill
                  sizes="208px"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
