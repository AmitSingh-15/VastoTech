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
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20 lg:py-28"
    >

      {/* decorative elements */}
      <DotGrid className="pointer-events-none absolute -right-6 top-12 hidden h-24 w-24 opacity-60 lg:block" rows={6} cols={6} />
      <WaveLines className="pointer-events-none absolute -left-10 bottom-10 hidden h-32 w-80 opacity-50 lg:block" />

      {/* soft glow background */}
      <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-100/30 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
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

            {/* BULLETS (UPGRADED) */}
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {ABOUT_BULLETS.map((bullet) => (
                <li
                  key={bullet}
                  className="
                    flex items-center gap-3
                    rounded-xl border border-slate-100
                    bg-white px-4 py-3
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-md hover:border-orange-200
                  "
                >
                  <span className="
                    grid h-7 w-7 flex-shrink-0 place-items-center
                    rounded-full bg-gradient-to-br from-orange-400 to-orange-500
                    text-white shadow-md
                  ">
                    <Check size={14} strokeWidth={3} />
                  </span>

                  <span className="text-sm font-medium text-slate-700">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <Button href="/#contact" variant="primary">
                Know More About Us
              </Button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >

            {/* main image */}
            <div className="
              relative aspect-[4/5] overflow-hidden rounded-2xl
              shadow-2xl ring-1 ring-black/5
              hover:scale-[1.02] transition-transform duration-500
            ">
              <Image
                src="/assets/about-building.png"
                alt="Modern corporate office building"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />

              {/* overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>

            {/* floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="
                absolute bottom-6 right-6 w-52
                rounded-2xl border border-white/20
                bg-white/80 backdrop-blur-md
                shadow-2xl
                p-3
              "
            >
              <div className="relative aspect-[5/6] w-full">
                <Image
                  src="/assets/experience-badge.png"
                  alt="10+ Years of Experience"
                  fill
                  sizes="208px"
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* glow ring */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-orange-200/30 to-transparent blur-2xl" />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}