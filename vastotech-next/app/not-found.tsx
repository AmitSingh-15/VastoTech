import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
          <Container className="text-center">
            <p className="font-display text-7xl font-extrabold text-orange-400 sm:text-9xl">
              404
            </p>
            <h1 className="mt-4 font-display text-2xl font-extrabold text-navy-800 sm:text-4xl">
              Page not found
            </h1>
            <p className="mx-auto mt-4 max-w-md text-base text-slate-600">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/" variant="primary">
                <Home size={16} /> Back to Home
              </Button>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-md border-2 border-navy-800 px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy-800 transition-colors hover:bg-navy-800 hover:text-white"
              >
                <ArrowLeft size={16} /> View Case Studies
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
