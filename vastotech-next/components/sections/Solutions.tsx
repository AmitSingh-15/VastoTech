'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Video, Building2, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { SOLUTIONS } from '@/constants/data';

const ICON_MAP: Record<string, typeof Video> = {
  'video-analytics-software': Video,
  'advanced-bms-software': Building2,
  'iot-solutions': Cpu,
};

const COLOR_MAP: Record<string, 'navy' | 'orange'> = {
  'video-analytics-software': 'navy',
  'advanced-bms-software': 'orange',
  'iot-solutions': 'navy',
};

export default function Solutions() {
  return (
    <section id="solutions" className="bg-slate-50 py-20 lg:py-24">
      <Container>
        <div className="mb-12 grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Our Solutions"
              title={
                <>
                  Technology that connects.
                  <br />
                  Solutions that transform.
                </>
              }
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <p className="mb-5 text-base leading-relaxed text-slate-600">
              Vastotech offers a powerful suite of software and IoT solutions designed to help
              businesses automate operations, enhance security, and make data-driven decisions.
            </p>
            <Button href="/case-studies" variant="primary">
              Explore All Solutions <ArrowRight size={14} />
            </Button>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution, idx) => {
            const Icon = ICON_MAP[solution.slug] ?? Video;
            const isOrange = COLOR_MAP[solution.slug] === 'orange';
            return (
              <motion.article
                key={solution.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="relative block aspect-[16/11] overflow-hidden rounded-t-2xl"
                >
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 ${
                      isOrange
                        ? 'bg-gradient-to-b from-orange-400/10 via-transparent to-orange-400/30'
                        : 'bg-gradient-to-b from-navy-800/10 via-transparent to-navy-800/40'
                    }`}
                  />
                </Link>

                {/* Round icon — sibling of Link, positioned over the image/body seam.
                    Lives on the article (no overflow-hidden) so it isn't clipped. */}
                <span
                  className={`pointer-events-none absolute left-1/2 z-10 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full text-white shadow-card ring-4 ring-white ${
                    isOrange ? 'bg-orange-400' : 'bg-navy-800'
                  }`}
                  style={{ top: 'calc(56.25% - 1.75rem)' }}
                >
                  <Icon size={22} strokeWidth={2} />
                </span>

                <div className="flex flex-1 flex-col p-6 pt-10 text-center">
                  <h3
                    className={`text-base font-extrabold uppercase tracking-wide ${
                      isOrange ? 'text-orange-400' : 'text-navy-800'
                    }`}
                  >
                    {solution.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {solution.description}
                  </p>
                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="mt-5 inline-flex items-center justify-center gap-1.5 text-sm font-bold uppercase tracking-wide text-orange-400 transition-colors hover:text-orange-500"
                  >
                    View Details
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
