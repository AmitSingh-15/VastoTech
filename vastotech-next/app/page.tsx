import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TrustedClients from '@/components/sections/TrustedClients';
import Solutions from '@/components/sections/Solutions';
import About from '@/components/sections/About';
import CaseStudies from '@/components/sections/CaseStudies';
import Stats from '@/components/sections/Stats';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustedClients />
        <Solutions />
        <About />
        <CaseStudies />
        <Stats />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
