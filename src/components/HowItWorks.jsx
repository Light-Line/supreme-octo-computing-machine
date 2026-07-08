import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import HexBackground from './HexBackground';
import { StaggerContainer, StaggerItem } from './ScrollAnimations';

const steps = [
  {
    number: '01',
    title: 'Read the brand',
    description: 'Drop a URL. Vibelets reads the rest.',
  },
  {
    number: '02',
    title: 'Build the creatives',
    description: 'A full ad set, generated in one go.',
  },
  {
    number: '03',
    title: 'Launch the ads',
    description: 'One click. Live across all channels.',
  },
  {
    number: '04',
    title: 'Optimize & scale',
    description: 'Winners scale. Losers pause.',
  },
];

export default function HowItWorks() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section id="how-it-works" className="relative section-padding overflow-hidden">
      {/* Hexagon background pattern */}
      <HexBackground
        color="#7C3AED"
        baseOpacity={0.04}
        hexSize={60}
        animationDuration={12}
      />
      
      <div className="container-tight relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Replaces your strategist, designer,<br className="hidden md:block" /> media buyer, and analyst.
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            No onboarding call. No implementation project. Paste a URL and Vibelets reads your brand, builds the creatives, launches them live, and optimizes every hour.
          </p>
        </motion.div>

        {/* Steps with staggered animation */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <StaggerItem key={step.number} className="relative">
              {/* Step number */}
              <div className="text-6xl md:text-7xl font-bold text-accent/20 mb-4">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted">{step.description}</p>

              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-3 w-6 h-0.5 bg-border" />
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA after steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="https://app.vibelets.ai/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors"
          >
            Try It Free
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
