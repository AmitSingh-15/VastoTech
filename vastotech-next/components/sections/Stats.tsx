'use client';

import { useEffect, useRef, useState } from 'react';
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
    <section className="relative overflow-hidden bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 py-16 lg:py-20">

      {/* glow background */}
      <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

      <Container className="relative">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {STATS.map((stat, idx) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="
                  group relative flex items-center gap-4
                  rounded-2xl border border-white/10
                  bg-white/5 p-6 backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-2 hover:border-orange-400/40
                  hover:bg-white/10 hover:shadow-2xl
                "
              >

                {/* ICON BADGE (EYE-CATCHING) */}
                <div className="relative h-16 w-16 flex-shrink-0">

                  {/* glow ring */}
                  <div className="
                    absolute inset-0 rounded-2xl
                    bg-gradient-to-br from-orange-400 to-pink-500
                    blur-md opacity-30 group-hover:opacity-60
                    transition
                  " />

                  {/* icon container */}
                  <div className="
                    relative grid h-16 w-16 place-items-center
                    rounded-2xl
                    bg-gradient-to-br from-white/10 to-white/5
                    ring-1 ring-white/20
                    backdrop-blur-md
                    shadow-lg
                    group-hover:scale-110
                    transition-transform duration-300
                  ">
                    <Icon
                      size={28}
                      className="
                        text-orange-300
                        group-hover:text-white
                        transition
                      "
                    />
                  </div>
                </div>

                {/* TEXT */}
                <div>
                  <p className="font-display text-3xl font-extrabold text-white">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>

                  <p className="
                    mt-1 text-[11px] font-bold uppercase tracking-[0.2em]
                    text-white/70 group-hover:text-orange-300
                    transition
                  ">
                    {stat.label}
                  </p>
                </div>

                {/* bottom line */}
                <div className="
                  absolute bottom-0 left-0 h-[2px] w-0
                  bg-gradient-to-r from-orange-400 to-pink-500
                  transition-all duration-500
                  group-hover:w-full
                " />
              </motion.div>
            );
          })}

        </div>
      </Container>
    </section>
  );
}