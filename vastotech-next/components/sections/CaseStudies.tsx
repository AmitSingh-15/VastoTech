'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { CASE_STUDIES } from '@/constants/data';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-slate-50 py-20 lg:py-28">
      <Container>
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Case Studies"
            title={
              <>
                Real solutions.
                <br />
                <span className="text-orange-400">Real impact.</span>
              </>
            }
          />
          <Link
            href="#case-studies"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-orange-400 transition-colors hover:text-orange-500"
          >
            View All Case Studies
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((cs, idx) => (
            <motion.article
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-orange-400">
                  {cs.category}
                </p>
                <h3 className="mt-2 text-sm font-bold leading-snug text-navy-800">
                  {cs.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{cs.description}</p>
                <Link
                  href={cs.href}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-400 transition-colors hover:text-orange-500"
                >
                  Read More
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  sizes="96px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
