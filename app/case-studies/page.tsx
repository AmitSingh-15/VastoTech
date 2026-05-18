import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import CTA from '@/components/sections/CTA';
import { CASE_STUDIES } from '@/constants/data';
import { urlToUrlWithoutFlightMarker } from 'next/dist/client/components/app-router';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Explore how Vastotech has delivered intelligent solutions across video analytics, building management and IoT for industry leaders.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHeader
          eyebrow="Case Studies"
          title="Real solutions. Real impact."
          description="See how we partner with industry leaders to deliver measurable outcomes across video analytics, building management and IoT deployments."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Case Studies' },
          ]}
        />

        <section className="bg-white py-16 lg:py-24">
          <Container>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {CASE_STUDIES.map((cs) => (
                <article
                  key={cs.slug}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
                >
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="relative block aspect-[16/10] overflow-hidden"
                  >
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-4 left-4 rounded-md bg-orange-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      {cs.category}
                    </span>
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {cs.industry}
                    </p>
                    <h2 className="mt-2 text-lg font-bold leading-snug text-navy-800">
                      {cs.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                      {cs.description}
                    </p>
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-orange-400 transition-colors hover:text-orange-500"
                    >
                      Read Case Study
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
