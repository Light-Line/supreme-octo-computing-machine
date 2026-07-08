import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import HexBackground from '../components/HexBackground'
import Stats from '../components/Stats'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 lg:pb-32 overflow-hidden">
          <HexBackground color="#7C3AED" baseOpacity={0.04} hexSize={50} />
          <div className="container-tight relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Helping You Grow <span className="text-accent">Without Limits</span>
              </h1>
              <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
                Vibelets combines AI and automation to simplify ad creation, testing, and scaling, fueling your growth with precision.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-foreground/5">
          <div className="container-tight">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-background rounded-2xl p-8 border border-border"
              >
                <div className="inline-flex items-center gap-2 text-sm text-accent font-medium mb-4">
                  <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">M</span>
                  Mission
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Driven by Purpose</h2>
                <p className="text-muted mb-6">
                  Our mission is to make high-impact marketing accessible, efficient, and effortless for everyone, from D2C owners to freelancers and marketers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Accessible for All
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Effortless to Execute
                  </li>
                </ul>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-background rounded-2xl p-8 border border-border"
              >
                <div className="inline-flex items-center gap-2 text-sm text-accent font-medium mb-4">
                  <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">V</span>
                  Vision
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Built For Growth</h2>
                <p className="text-muted mb-6">
                  We help businesses grow by simplifying campaign creation, management, and automation, making scaling easier than ever.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Lead With Clarity
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Rise Through Challenges
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Move Toward Impact
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding">
          <div className="container-tight">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why We're Building Vibelets</h2>
              <p className="text-lg text-muted mb-6">
                Our story began with a simple belief that outcomes matter more than processes. Over the 12 years in performance marketing we learned that even as teams scale, generate 5M+ leads every year, and build strong creatives, data, and tech foundations, the day-to-day work remains messy.
              </p>
              <p className="text-lg text-muted mb-6">
                Marketers still manage multiple tools, download reports, guess creatives, and manually adjust campaigns. Despite growth, the execution layer never evolved.
              </p>
              <p className="text-lg text-muted">
                We built Vibelets to change that. We set out to create an AI-powered marketing brain that brings structure, clarity, and speed to marketing workflows, helping teams move with confidence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <Stats />

        {/* Testimonials */}
        <section className="section-padding bg-foreground/5">
          <div className="container-tight">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Hear from Our Clients
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-background rounded-2xl p-8 border border-border"
              >
                <p className="text-lg mb-6 italic text-muted">
                  "Vibelets transformed our marketing workflow. What used to take hours now happens in minutes, with results that actually drive growth. It's like having an entire team behind us."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold">MD</span>
                  </div>
                  <div>
                    <p className="font-semibold">Mark Daniels</p>
                    <p className="text-sm text-muted">Founder, Spark Digital</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-background rounded-2xl p-8 border border-border"
              >
                <p className="text-lg mb-6 italic text-muted">
                  "As a solo founder, Vibelets is a game-changer. The platform simplifies everything—creative creation, optimization, and scaling—allowing me to focus on what matters most."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold">ST</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Thompson</p>
                    <p className="text-sm text-muted">Founder, EcoGoods</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your marketing?</h2>
              <p className="text-lg text-muted mb-8">Join thousands of brands already growing with Vibelets.</p>
              <a
                href="https://app.vibelets.ai/signup"
                className="inline-flex px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors"
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
