'use client';

import Image from 'next/image';
import { Check, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { ABOUT_BULLETS } from '@/constants/data';

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <Container>
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
                src="/images/projects/bg1.jpg"
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
              className="absolute -bottom-6 right-4 flex items-center gap-4 rounded-2xl bg-navy-800 px-6 py-5 shadow-card-hover sm:right-6 lg:right-8"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-orange-400 text-white">
                <Award size={22} />
              </span>
              <div>
                <p className="font-display text-3xl font-extrabold leading-none text-white">10+</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                  Years of Experience
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
