import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import HexBackground from '../components/HexBackground'
import { motion } from 'framer-motion'

export default function ContactPage() {
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
                Get in touch with us
              </h1>
              <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
                We're here to help and answer any questions you may have.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="section-padding bg-foreground/5">
          <div className="container-tight">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-background rounded-2xl p-8 border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">Email us</h2>
                <p className="text-muted mb-4">
                  Have a question? Our team is ready to help.
                </p>
                <a
                  href="mailto:support@vibelets.ai"
                  className="text-accent font-medium hover:underline"
                >
                  support@vibelets.ai
                </a>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-background rounded-2xl p-8 border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">Contact team</h2>
                <p className="text-muted mb-4">
                  Prefer to talk instead? You can now easily reach our team.
                </p>
                <a
                  href="tel:+1234567890"
                  className="text-accent font-medium hover:underline"
                >
                  +1 (234) 567 890
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Demo CTA */}
        <section className="section-padding">
          <div className="container-tight text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to see it in action?</h2>
              <p className="text-lg text-muted mb-8">Book a demo and we'll walk you through everything.</p>
              <a
                href="#demo"
                className="inline-flex px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors"
              >
                Book a Demo
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
