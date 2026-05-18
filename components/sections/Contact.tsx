'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { CONTACT } from '@/constants/data';

const ITEMS = [
  {
    icon: MapPin,
    title: 'Visit Us',
    offices: CONTACT.offices,
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: CONTACT.phones,
    hrefs: CONTACT.phones.map((p) => `tel:${p.replace(/[^\d+]/g, '')}`),
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: CONTACT.emails,
    hrefs: CONTACT.emails.map((e) => `mailto:${e}`),
  },
  {
    icon: Clock,
    title: 'Open Hours',
    lines: [CONTACT.hours],
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something{' '}
              <span className="text-orange-400">great together</span>
            </>
          }
          description="Ready to elevate your business with intelligent technology? Reach out and our team will get back to you within one business day."
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-card"
              >
                {/* ICON */}
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-orange-100 text-orange-500">
                  <Icon size={22} />
                </div>

                {/* TITLE */}
                <h3 className="text-sm font-bold uppercase tracking-wide text-navy-800">
                  {item.title}
                </h3>

                {/* CONTENT */}
                <div className="mt-3 space-y-1.5">

                  {/* ✅ SPECIAL RENDER FOR OFFICES */}
                  {'offices' in item ? (
                    item.offices.map((o, i) => (
                      <div key={i} className="text-sm text-slate-600">
                        <span className="font-semibold text-navy-800">
                          {o.label}:
                        </span>{' '}
                        {o.address}
                      </div>
                    ))
                  ) : (
                    item.lines.map((line, i) => {
                      const href = item.hrefs?.[i];

                      return href ? (
                        <a
                          key={i}
                          href={href}
                          className="block text-sm text-slate-600 hover:text-orange-400"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={i} className="text-sm text-slate-600">
                          {line}
                        </p>
                      );
                    })
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}