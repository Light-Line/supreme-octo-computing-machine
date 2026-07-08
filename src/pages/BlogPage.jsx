import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import HexBackground from '../components/HexBackground'
import { motion } from 'framer-motion'

const blogPosts = [
  {
    slug: 'thirty-ads-one-page',
    title: '30 Meta ad variations from one product page: the fast way to build a testing matrix',
    excerpt: 'Learn how to generate 30 unique ad variations from a single product URL using AI-powered creative generation.',
    author: 'Vibelets Team',
    date: '2026-07-05',
    readTime: '5 min read',
  },
  {
    slug: 'meta-account-audit',
    title: 'Meta ads account audit: the 12 things AI flags first (and how to fix each one)',
    excerpt: 'Discover the 12 critical issues our AI looks for during a Meta account audit and how to resolve them quickly.',
    author: 'Vibelets Team',
    date: '2026-07-04',
    readTime: '8 min read',
  },
  {
    slug: 'rules-that-pause-losers',
    title: 'Automated rules that pause losing ads and scale winners (with safe thresholds)',
    excerpt: 'Set up automated rules that protect your budget by pausing underperformers and scaling winners automatically.',
    author: 'Vibelets Team',
    date: '2026-07-03',
    readTime: '6 min read',
  },
  {
    slug: 'run-ads-plain-english',
    title: 'Run Meta Ads in Plain English: Managing Campaigns Without Ads Manager',
    excerpt: 'Control your Meta campaigns using natural language commands instead of navigating complex ad manager interfaces.',
    author: 'Vibelets Team',
    date: '2026-07-02',
    readTime: '4 min read',
  },
  {
    slug: 'scale-signal-numbers',
    title: 'When to Scale a Meta Ad: The 6 Signals (and Exact Numbers) That Say Go',
    excerpt: 'Know exactly when to scale your winning ads with these 6 data-driven signals and the metrics that matter.',
    author: 'Vibelets Team',
    date: '2026-07-01',
    readTime: '7 min read',
  },
  {
    slug: 'remake-competitor-ad',
    title: 'How to turn a competitor\'s ad into your own Meta-ready creative (legally)',
    excerpt: 'Learn how to analyze competitor ads and create your own variations while staying compliant with platform policies.',
    author: 'Vibelets Team',
    date: '2026-06-30',
    readTime: '5 min read',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
          <HexBackground color="#7C3AED" baseOpacity={0.04} hexSize={50} />
          <div className="container-tight relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="text-accent">Blog</span>
              </h1>
              <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
                Insights, strategies, and guides for AI-powered marketing success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="section-padding bg-foreground/5">
          <div className="container-tight">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block bg-background rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-colors group"
                  >
                    {/* Placeholder image */}
                    <div className="aspect-[16/9] bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                      <svg className="w-12 h-12 text-accent/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted mb-3">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-padding">
          <div className="container-tight text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get marketing insights delivered</h2>
              <p className="text-lg text-muted mb-8">Join our newsletter for weekly tips and strategies.</p>
              <a
                href="https://app.vibelets.ai/signup"
                className="inline-flex px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors"
              >
                Subscribe Now
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
