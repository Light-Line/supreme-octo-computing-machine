import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import HexBackground from '../components/HexBackground'
import { motion } from 'framer-motion'

const competitors = [
  {
    name: 'Smartly',
    slug: 'smartly',
    description: 'Traditional ad platform with manual workflows',
    vibeletsAdvantage: 'Takes URL, builds campaign, CAC protection with automation',
  },
  {
    name: 'Atria',
    slug: 'atria',
    description: 'Insight-focused optimization',
    vibeletsAdvantage: 'Live guardrails, instant launch, outcome-focused',
  },
  {
    name: 'AdCreative',
    slug: 'adcreative',
    description: 'Asset generation only',
    vibeletsAdvantage: 'Full cycle - launch, optimize, grow with emotional intelligence',
  },
  {
    name: 'Creatify',
    slug: 'creatify',
    description: 'Content-focused',
    vibeletsAdvantage: 'Full campaign with guardrails, pacing, daily scale-or-kill decisions',
  },
  {
    name: 'Foreplay',
    slug: 'foreplay',
    description: 'Multi-step manual process',
    vibeletsAdvantage: 'Minutes not weeks, full automation',
  },
  {
    name: 'Madgicx',
    slug: 'madgicx',
    description: 'Optimization-focused',
    vibeletsAdvantage: 'AI-powered optimization + creative flexibility',
  },
  {
    name: 'Omneky',
    slug: 'omneky',
    description: 'Guided flows, live guardrails',
    vibeletsAdvantage: 'Same features + instant launch focus on outcomes',
  },
  {
    name: 'Arcads',
    slug: 'arcads',
    description: 'AI video clips and variants',
    vibeletsAdvantage: 'Broader scope, full campaign management',
  },
]

export default function ComparePage() {
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
                How We <span className="text-accent">Compare</span>
              </h1>
              <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
                See why leading brands choose Vibelets over the competition.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Comparison Cards */}
        <section className="section-padding bg-foreground/5">
          <div className="container-tight">
            <div className="grid md:grid-cols-2 gap-6">
              {competitors.map((comp, index) => (
                <motion.div
                  key={comp.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  className="bg-background rounded-2xl p-6 md:p-8 border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{comp.name} vs Vibelets</h3>
                      <p className="text-sm text-muted">{comp.description}</p>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted mb-2">Vibelets advantage:</p>
                    <p className="font-medium text-accent">{comp.vibeletsAdvantage}</p>
                  </div>
                </motion.div>
              ))}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to see the difference?</h2>
              <p className="text-lg text-muted mb-8">Start your free trial today.</p>
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
