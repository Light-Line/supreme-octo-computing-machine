import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import HexBackground from '../components/HexBackground'
import { motion } from 'framer-motion'

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 lg:pb-32 overflow-hidden">
          <HexBackground color="#7C3AED" baseOpacity={0.06} hexSize={50} />
          <div className="container-tight relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Ship ads that work <span className="text-accent">10x faster.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">
                Vibelets is where D2C brands write scripts, generate creatives, launch, and scale — across every channel. One tab. No agencies. No bottlenecks.
              </p>
              <a
                href="https://app.vibelets.ai/signup"
                className="inline-flex px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors"
              >
                Start Winning
              </a>
            </motion.div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="section-padding bg-foreground/5">
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              {/* Left - Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 text-sm text-accent font-medium mb-4">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold">01</span>
                  Lock in a time
                </div>
                <p className="text-muted mb-8">
                  Hosted by <strong>Nipun</strong> — our co-founder who personally walks you through how Vibelets works.
                </p>

                {/* Calendly Embed Placeholder */}
                <div className="bg-background rounded-2xl p-8 border border-border">
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-muted mb-4">Loading scheduler...</p>
                    <a
                      href="https://calendly.com/paurush-vibelets/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
                    >
                      Open Calendly to book your demo
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Right - Testimonial */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <blockquote className="bg-background rounded-2xl p-8 border border-border">
                  <p className="text-xl md:text-2xl mb-6 leading-relaxed">
                    "CAC down 38% in six weeks. Creative turnarounds from 11 days to 36 hours. We've shut down two agencies and our scroll-stop rate has never been higher."
                  </p>
                  <footer className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold">PM</span>
                    </div>
                    <div>
                      <p className="font-semibold">Priya Menon</p>
                      <p className="text-sm text-muted">Head of Ops, Stackline</p>
                    </div>
                  </footer>
                </blockquote>

                {/* Results highlight */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="bg-background rounded-xl p-4 text-center border border-border">
                    <p className="text-2xl font-bold text-accent">38%</p>
                    <p className="text-xs text-muted">CAC Reduction</p>
                  </div>
                  <div className="bg-background rounded-xl p-4 text-center border border-border">
                    <p className="text-2xl font-bold text-accent">73%</p>
                    <p className="text-xs text-muted">Faster Creative</p>
                  </div>
                  <div className="bg-background rounded-xl p-4 text-center border border-border">
                    <p className="text-2xl font-bold text-accent">2x</p>
                    <p className="text-xs text-muted">Agencies Cut</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-tight text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Prefer to start free?</h2>
              <p className="text-lg text-muted mb-8">No demo needed — get started in 10 minutes.</p>
              <a
                href="https://app.vibelets.ai/signup"
                className="inline-flex px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                Start Free 14 days
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
