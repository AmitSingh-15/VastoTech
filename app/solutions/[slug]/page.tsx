import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import Button from '@/components/ui/Button';
import CTA from '@/components/sections/CTA';
import { SOLUTIONS } from '@/constants/data';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const solution = SOLUTIONS.find((s) => s.slug === params.slug);
  if (!solution) return { title: 'Solution not found' };
  return {
    title: solution.title,
    description: solution.description,
  };
}

export default function SolutionDetailPage({ params }: PageProps) {
  const solution = SOLUTIONS.find((s) => s.slug === params.slug);
  if (!solution) notFound();

  const related = SOLUTIONS.filter((s) => s.slug !== solution.slug);

  return (
    <>
      <Navbar />
      <main id="main">
        <PageHeader
          eyebrow={solution.tag}
          title={solution.title}
          description={solution.description}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/#solutions' },
            { label: solution.title },
          ]}
        />

        <section className="bg-white py-16 lg:py-24">
          <Container>
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">
                  Overview
                </p>
                <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight text-navy-800 sm:text-3xl">
                  Why {solution.title}?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {solution.longDescription}
                </p>

                <h3 className="mt-8 text-lg font-bold uppercase tracking-wide text-navy-800">
                  Key Capabilities
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {solution.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-slate-700">
                      <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-orange-100 text-orange-500">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <span className="text-sm font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/#contact" variant="primary">
                    Request a Demo
                  </Button>
                  <Button href="/case-studies" variant="secondary">
                    See Case Studies
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-slate-50 py-16 lg:py-20">
          <Container>
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">
                  Explore More
                </p>
                <h2 className="mt-2 font-display text-2xl font-extrabold text-navy-800 sm:text-3xl">
                  Other Solutions
                </h2>
              </div>
              <Link
                href="/#solutions"
                className="hidden items-center gap-2 text-sm font-bold uppercase tracking-wide text-orange-400 hover:text-orange-500 sm:inline-flex"
              >
                All Solutions <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/solutions/${r.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-4 left-4 rounded-md bg-orange-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      {r.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold uppercase tracking-wide text-navy-800">
                      {r.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {r.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-orange-400">
                      View Details
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
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
