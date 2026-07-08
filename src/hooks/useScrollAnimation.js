import { useReducedMotion } from 'framer-motion';

/**
 * Custom hook for scroll animation settings
 * Respects user's prefers-reduced-motion setting
 */
export function useScrollAnimation(duration = 0.6, delay = 0) {
  const shouldReduceMotion = useReducedMotion();
  
  return {
    initial: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 20 
    },
    whileInView: { 
      opacity: 1, 
      y: 0 
    },
    viewport: { 
      once: true, 
      margin: '-50px' 
    },
    transition: { 
      duration: shouldReduceMotion ? 0 : duration, 
      delay: shouldReduceMotion ? 0 : delay,
      ease: 'easeOut',
    },
  };
}

/**
 * Stagger animation settings for child elements
 */
export function useStaggerAnimation(itemCount = 4, duration = 0.5) {
  const shouldReduceMotion = useReducedMotion();
  
  return {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, margin: '-50px' },
    transition: {
      staggerChildren: shouldReduceMotion ? 0 : 0.1,
      duration: shouldReduceMotion ? 0 : duration,
    },
  };
}

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
