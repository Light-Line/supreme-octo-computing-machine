import { lazy, Suspense } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import MiniStats from '../components/MiniStats';

// Lazy load below-fold components
const LiveFeed = lazy(() => import('../components/LiveFeed'));
const HowItWorks = lazy(() => import('../components/HowItWorks'));
const ProductIntelligence = lazy(() => import('../components/ProductIntelligence'));
const Stats = lazy(() => import('../components/Stats'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Pricing = lazy(() => import('../components/Pricing'));
const FAQ = lazy(() => import('../components/FAQ'));
const FinalCTA = lazy(() => import('../components/FinalCTA'));
const Footer = lazy(() => import('../components/Footer'));

// Loading fallback
function SectionLoader() {
  return <div className="min-h-[400px]" />;
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <MiniStats />
        <Suspense fallback={<SectionLoader />}>
          <LiveFeed />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ProductIntelligence />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Stats />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FinalCTA />
        </Suspense>
      </main>
      <Suspense fallback={<footer className="py-12" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
