// src/app/page.tsx
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Values from '@/components/Values';
import Work from '@/components/Work';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/HeaderWrapper';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderWrapper />
      <main className="flex-1">
        <Hero />
        <Services />
        <Values />
        <Work />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}