import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section id="demo" className="section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Paste a URL. First ad live in under <span className="text-accent">10 minutes.</span>
          </h2>
          <p className="text-lg text-muted mb-10">
            No lift in 14 days? Full refund. The onboarding is five minutes, not five weeks.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="https://app.vibelets.ai/signup"
              className="w-full sm:w-auto px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors"
            >
              Start Free 14 days
            </a>
            <a
              href="#demo"
              className="w-full sm:w-auto px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:bg-foreground/5 transition-colors"
            >
              Book a Demo
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No credit card
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Cancel any time
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Refund Guarantee
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
