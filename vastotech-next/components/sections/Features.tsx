'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { FEATURES } from '@/constants/data';

export default function Features() {
  return (
    <section className="-mt-8 pb-16 sm:-mt-12 lg:pb-24">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-card-hover"
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-orange-50 text-orange-400 transition-colors group-hover:bg-orange-400 group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold uppercase tracking-wide text-navy-800">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
