'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Container from '@/components/ui/Container';
import { STATS } from '@/constants/data';

function Counter({
  value,
  suffix,
  duration = 1.6,
}: {
  value: number;
  suffix: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-navy-800 py-14 lg:py-16">
      {/* Orange diagonal accent on right */}
      <div
        aria-hidden
        className="absolute -right-24 top-0 h-full w-64 -skew-x-12 bg-orange-400"
      />
      <div
        aria-hidden
        className="absolute right-32 top-0 h-full w-20 -skew-x-12 bg-orange-400/40"
      />

      <Container className="relative">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex items-center gap-4"
              >
                {stat.iconSrc ? (
                  <div className="relative h-20 w-20 flex-shrink-0">
                    <Image
                      src={stat.iconSrc}
                      alt={stat.label}
                      fill
                      sizes="80px"
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                ) : (
                  <span className="grid h-14 w-14 flex-shrink-0 place-items-center text-orange-400">
                    <Icon size={42} strokeWidth={1.5} />
                  </span>
                )}
                <div>
                  <p className="font-display text-4xl font-extrabold leading-none text-white">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/85">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
