import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check, Target, Lightbulb, TrendingUp } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import Button from '@/components/ui/Button';
import CTA from '@/components/sections/CTA';
import { CASE_STUDIES } from '@/constants/data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) return { title: 'Case study not found' };
  return {
    title: cs.title,
    description: cs.description,
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) notFound();

  const related = CASE_STUDIES.filter((c) => c.slug !== cs.slug);

  return (
    <>
      <Navbar />
      <main id="main">
        <PageHeader
          eyebrow={cs.category}
          title={cs.title}
          description={cs.description}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Case Studies', href: '/case-studies' },
            { label: cs.title },
          ]}
        />

        <section className="bg-white py-16 lg:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
              <div className="lg:col-span-2">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-card">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    sizes="(min-width: 1024px) 66vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="mt-12 space-y-10">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-100 text-orange-500">
                        <Target size={20} />
                      </span>
                      <h2 className="font-display text-xl font-bold text-navy-800 sm:text-2xl">
                        The Challenge
                      </h2>
                    </div>
                    <p className="text-base leading-relaxed text-slate-600">{cs.challenge}</p>
                  </div>

                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-100 text-orange-500">
                        <Lightbulb size={20} />
                      </span>
                      <h2 className="font-display text-xl font-bold text-navy-800 sm:text-2xl">
                        Our Solution
                      </h2>
                    </div>
                    <p className="text-base leading-relaxed text-slate-600">{cs.solution}</p>
                  </div>

                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-100 text-orange-500">
                        <TrendingUp size={20} />
                      </span>
                      <h2 className="font-display text-xl font-bold text-navy-800 sm:text-2xl">
                        Results
                      </h2>
                    </div>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {cs.results.map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4"
                        >
                          <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-orange-400 text-white">
                            <Check size={14} strokeWidth={3} />
                          </span>
                          <span className="text-sm font-medium text-navy-800">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="sticky top-28 rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-navy-800">
                    Project Snapshot
                  </h3>
                  <dl className="mt-5 space-y-4 text-sm">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Client
                      </dt>
                      <dd className="mt-1 font-semibold text-navy-800">{cs.client}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Industry
                      </dt>
                      <dd className="mt-1 font-semibold text-navy-800">{cs.industry}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Category
                      </dt>
                      <dd className="mt-1 font-semibold text-navy-800">{cs.category}</dd>
                    </div>
                  </dl>
                  <div className="mt-6 space-y-3">
                    <Button href="/#contact" variant="primary" className="w-full">
                      Discuss Your Project
                    </Button>
                    <Button href="/case-studies" variant="secondary" className="w-full">
                      All Case Studies
                    </Button>
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </section>

        <section className="bg-slate-50 py-16 lg:py-20">
          <Container>
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">
                  More Stories
                </p>
                <h2 className="mt-2 font-display text-2xl font-extrabold text-navy-800 sm:text-3xl">
                  Related Case Studies
                </h2>
              </div>
              <Link
                href="/case-studies"
                className="hidden items-center gap-2 text-sm font-bold uppercase tracking-wide text-orange-400 hover:text-orange-500 sm:inline-flex"
              >
                View All <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/case-studies/${r.slug}`}
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
                      {r.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold leading-snug text-navy-800">{r.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {r.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-orange-400">
                      Read Case Study
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
