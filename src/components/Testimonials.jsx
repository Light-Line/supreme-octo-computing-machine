import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section className="section-padding bg-foreground/5">
      <div className="container-tight">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-sm font-medium text-accent mb-4 uppercase tracking-wider">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            What our customers say
          </h2>
        </motion.div>

        {/* TODO: Replace with real testimonials once available */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-background rounded-2xl p-8 md:p-12 border border-border">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-3xl text-accent">💬</span>
            </div>
            <p className="text-lg md:text-xl text-muted italic mb-6">
              "Social proof coming soon. We're collecting testimonials from our beta customers and will add them here."
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://app.vibelets.ai/signup"
                className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
              >
                Be the first to share your story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
