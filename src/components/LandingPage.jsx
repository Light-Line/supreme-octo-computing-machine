import { lazy, Suspense } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';

// Lazy load below-fold components
const LiveFeed = lazy(() => import('./LiveFeed'));
const HowItWorks = lazy(() => import('./HowItWorks'));
const ProductIntelligence = lazy(() => import('./ProductIntelligence'));
const Stats = lazy(() => import('./Stats'));
const Testimonials = lazy(() => import('./Testimonials'));
const Pricing = lazy(() => import('./Pricing'));
const FAQ = lazy(() => import('./FAQ'));
const FinalCTA = lazy(() => import('./FinalCTA'));
const Footer = lazy(() => import('./Footer'));

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
