import { useParams, Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import HexBackground from '../components/HexBackground'
import { motion } from 'framer-motion'

const competitors = {
  'smartly': {
    name: 'Smartly',
    tagline: "They're Strategy In Motion.",
    headline: "Smartly gets your URL, builds the campaign, and keeps CAC in check with automation that thinks like a marketer.",
    features: {
      smartly: [
        { title: "It's template-first", desc: "Great for quick ad versions but when performance dips, templates can't write new hooks or angles." },
        { title: "Insights, Not Action", desc: "You'll see what happened (reach, overlap, fatigue) & manually decide what to try next and rebuild it." },
        { title: "Rules aren't strategy", desc: "You still chase spend, pause tired ads, and fix what automation misses." },
      ],
      vibelets: [
        { title: "Turn Clarity Into Momentum", desc: "Just chat your goals & Vibelets transforms your ideas into ad angles, hooks, and winning concepts in seconds." },
        { title: "Let AI Lead The Way", desc: "From budgets to bids to pacing — Vibelets automates what slows you down, so your focus stays on results." },
        { title: "Create Work That Works", desc: "Real-time performance insights reveal which creatives, formats, and audiences drive impact." },
        { title: "Scale What Wins", desc: "Vibelets continuously refines and reallocates to your best performers — helping you spend smarter and grow faster." },
      ],
    },
  },
  'atria': {
    name: 'Atria',
    tagline: "Turn insights into action.",
    headline: "Vibelets turns insights into shipped tests, clean tracking, and optimized campaigns that protect spend.",
    features: {
      vibelets: [
        { title: "Live Guardrails", desc: "Set your thresholds and let Vibelets enforce them automatically." },
        { title: "Instant Launch", desc: "Go from brief to live campaign in minutes, not days." },
        { title: "CPA Protection", desc: "Daily scale-or-kill decisions keep your CPA in range." },
        { title: "ROAS Growth", desc: "Continuous optimization climbs ROAS week over week." },
      ],
    },
  },
  'adcreative': {
    name: 'AdCreative',
    tagline: "Beyond just assets.",
    headline: "Vibelets doesn't stop at assets — it launches, optimizes, and grows your campaigns with emotional intelligence built in.",
    features: {
      vibelets: [
        { title: "Full Campaign Lifecycle", desc: "From brief to analysis, Vibelets handles the entire journey." },
        { title: "Emotional Intelligence", desc: "AI understands what resonates with your audience." },
        { title: "Auto-Optimization", desc: "Winners scale automatically, losers pause." },
      ],
    },
  },
  'creatify': {
    name: 'Creatify',
    tagline: "Content to campaigns.",
    headline: "Creatify ends at content. Vibelets turns any product URL into live campaigns with guardrails, pacing, and automated scale-or-kill decisions daily.",
    features: {
      vibelets: [
        { title: "Daily Scale-or-Kill", desc: "Every day, Vibelets makes decisions based on performance data." },
        { title: "Campaign Guardrails", desc: "Set your limits and let AI work within them." },
        { title: "Pacing Control", desc: "Automatic budget pacing keeps spend consistent." },
      ],
    },
  },
  'foreplay': {
    name: 'Foreplay',
    tagline: "From page to performance.",
    headline: "Go from product page to high-performing ad campaigns with scripts, creatives, targeting, and real-time stats in minutes, not weeks.",
    features: {
      vibelets: [
        { title: "One URL, Everything", desc: "Paste your product URL and get a complete campaign." },
        { title: "Real-Time Stats", desc: "See performance data as it happens." },
        { title: "Auto-Targeting", desc: "AI finds your best audiences automatically." },
      ],
    },
  },
  'madgicx': {
    name: 'Madgicx',
    tagline: "Smarter marketing.",
    headline: "Choose smarter marketing with Vibelets, where AI-powered optimization and creative flexibility come together to fuel campaign success.",
    features: {
      vibelets: [
        { title: "AI-Powered Optimization", desc: "Continuous learning improves performance over time." },
        { title: "Creative Flexibility", desc: "Generate and test unlimited creative variations." },
        { title: "Smart Budget Allocation", desc: "Automatically shift budget to winning campaigns." },
      ],
    },
  },
  'omneky': {
    name: 'Omneky',
    tagline: "Guided flows, live guardrails.",
    headline: "With guided flows, live guardrails, and instant launch, Vibelets becomes the top Omneky alternative for teams obsessed with real outcomes.",
    features: {
      vibelets: [
        { title: "Instant Launch", desc: "Skip the queue and get campaigns live immediately." },
        { title: "Live Guardrails", desc: "Never overspend with automatic controls." },
        { title: "Outcome Focus", desc: "Every feature designed to improve your metrics." },
      ],
    },
  },
  'arcads': {
    name: 'Arcads',
    tagline: "AI video at scale.",
    headline: "Both platforms help you make AI-driven ad videos. The difference is scope. Arcads focuses on AI-actor clips and variant generation. Vibelets does it all.",
    features: {
      vibelets: [
        { title: "Broader Scope", desc: "Full campaign management, not just video creation." },
        { title: "Multi-Format", desc: "Video, images, and text ads all in one place." },
        { title: "Campaign Management", desc: "Launch, optimize, and scale without leaving." },
      ],
    },
  },
}

export default function CompetitorPage() {
  const { competitor } = useParams()
  const comp = competitors[competitor] || {
    name: competitor?.replace('-vs-vibelets', '') || 'Competitor',
    tagline: "Compare platforms.",
    headline: "See how Vibelets compares to the competition.",
    features: { vibelets: [] },
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 lg:pb-32 overflow-hidden">
          <HexBackground color="#7C3AED" baseOpacity={0.05} hexSize={50} />
          <div className="container-tight relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                {comp.tagline}
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">
                {comp.name} vs Vibelets
              </h2>
              <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">
                {comp.headline}
              </p>
              <Link
                to="/compare"
                className="inline-flex items-center gap-2 text-accent hover:underline mb-4"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                View all comparisons
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Comparison */}
        <section className="section-padding bg-foreground/5">
          <div className="container-tight">
            {/* Competitor Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">{comp.name}</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {comp.features.smartly?.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-background rounded-xl p-6 border border-border"
                  >
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Vibelets Section */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center text-accent">Vibelets Thinks, Not Templates.</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {comp.features.vibelets?.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-background rounded-xl p-6 border border-accent/30 hover:border-accent/50 transition-colors"
                  >
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
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
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://app.vibelets.ai/signup"
                  className="px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors"
                >
                  Start Free 14 days
                </a>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:bg-foreground/5 transition-colors"
                >
                  Book a Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
