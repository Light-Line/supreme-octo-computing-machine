import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from './ScrollAnimations';

import screenshot1 from '../assets/hero/screenshot-1.png';
import screenshot2 from '../assets/hero/screenshot-2.png';
import screenshot3 from '../assets/hero/screenshot-3.png';
import screenshot4 from '../assets/hero/screenshot-4.png';
import screenshot5 from '../assets/hero/screenshot-5.png';
import screenshot6 from '../assets/hero/screenshot-6.png';

const ads = [
  { id: 1, title: 'Summer Collection', brand: 'ThreadCo', time: '2m ago', img: screenshot1 },
  { id: 2, title: 'Protein Boost', brand: 'FitLife', time: '5m ago', img: screenshot2 },
  { id: 3, title: 'Smart Home Sale', brand: 'TechNest', time: '8m ago', img: screenshot3 },
  { id: 4, title: 'Coffee Subscription', brand: 'BeanBox', time: '12m ago', img: screenshot4 },
  { id: 5, title: 'Yoga Mat Pro', brand: 'ZenFit', time: '18m ago', img: screenshot5 },
  { id: 6, title: 'Watch Collection', brand: 'ChronoStyle', time: '24m ago', img: screenshot6 },
];

export default function LiveFeed() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section className="section-padding bg-foreground/5">
      <div className="container-tight">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm font-medium text-accent mb-4 uppercase tracking-wider">
            Live Feed
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Ads our AI generated in the last 60 minutes
          </h2>
        </motion.div>

        {/* Ad Grid with staggered animation */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {ads.map((ad) => (
            <StaggerItem key={ad.id}>
              <motion.div
                whileHover={{ scale: 1.03, borderColor: 'rgb(124 58 237 / 0.5)' }}
                transition={{ duration: 0.2 }}
                className="bg-background rounded-xl overflow-hidden border border-border transition-colors cursor-pointer"
              >
                {/* Real screenshot image */}
                <img
                  src={ad.img}
                  alt={ad.title}
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-sm md:text-base mb-1">{ad.title}</h3>
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span>{ad.brand}</span>
                    <span>{ad.time}</span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://app.vibelets.ai/signup"
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
          >
            Start creating your ad
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
