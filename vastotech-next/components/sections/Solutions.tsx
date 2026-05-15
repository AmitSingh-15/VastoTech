'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { SOLUTIONS } from '@/constants/data';

export default function Solutions() {
  return (
    <section id="solutions" className="bg-slate-50 py-20 lg:py-28">
      <Container>
        <div className="mb-12 grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Our Solutions"
              title={
                <>
                  Technology that connects.
                  <br />
                  <span className="text-orange-400">Solutions that transform.</span>
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
              Explore Case Studies
            </Button>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution, idx) => (
            <motion.article
              key={solution.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
            >
              <Link href={`/solutions/${solution.slug}`} className="relative block aspect-[16/10] overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-md bg-orange-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  {solution.tag}
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold uppercase tracking-wide text-navy-800">
                  {solution.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {solution.description}
                </p>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-orange-400 transition-colors hover:text-orange-500"
                >
                  View Details
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
