import { motion } from 'framer-motion';
import HexBackground from './HexBackground';

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
  return (
    <section id="how-it-works" className="relative section-padding overflow-hidden">
      {/* Hexagon background pattern */}
      <HexBackground
        color="var(--hex-color, #7C3AED)"
        baseOpacity={0.04}
        hexSize={60}
        animationDuration={12}
      />
      
      <div className="container-tight relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Replaces your strategist, designer,<br className="hidden md:block" /> media buyer, and analyst.
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            No onboarding call. No implementation project. Paste a URL and Vibelets reads your brand, builds the creatives, launches them live, and optimizes every hour.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
