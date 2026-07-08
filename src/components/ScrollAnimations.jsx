import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

/**
 * ActiveSection - A section wrapper that activates when scrolled into view
 * The section scales up and fades in, creating a "one at a time" feel
 */
export function ActiveSection({ 
  children, 
  className = '',
  delay = 0,
  viewportThreshold = 0.2,
}) {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: viewportThreshold }}
      transition={{ 
        duration: shouldReduceMotion ? 0 : 0.7, 
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer + StaggerItem pattern for grouped animations
 */
export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }) {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }) {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: 'easeOut' }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
