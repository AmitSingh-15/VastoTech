import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Container from './Container';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 pt-32 pb-20 text-white sm:pt-36 sm:pb-24">
      <div
        aria-hidden
        className="absolute -right-32 top-0 h-full w-96 -skew-x-12 bg-orange-400/20"
      />
      <div
        aria-hidden
        className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl"
      />

      <Container className="relative">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
              {breadcrumbs.map((bc, i) => (
                <li key={i} className="flex items-center gap-2">
                  {bc.href ? (
                    <Link href={bc.href} className="hover:text-orange-400">
                      {bc.label}
                    </Link>
                  ) : (
                    <span className="text-white">{bc.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <ChevronRight size={14} className="text-slate-400" />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-orange-400">
            {eyebrow}
          </p>
        )}

        <h1 className="max-w-3xl font-display text-3xl font-extrabold leading-tight text-white text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
