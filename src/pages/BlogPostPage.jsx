import { Link, useParams } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import HexBackground from '../components/HexBackground'
import { motion } from 'framer-motion'

// Sample blog post content - in production this would come from a CMS or API
const blogPosts = {
  'thirty-ads-one-page': {
    title: '30 Meta ad variations from one product page: the fast way to build a testing matrix',
    author: 'Vibelets Team',
    date: 'July 5, 2026',
    readTime: '5 min read',
    content: `
      <p className="text-lg text-muted mb-6">Testing is the foundation of effective advertising. The more variations you test, the faster you find winning combinations. But creating 30 ad variations manually? That's a week's worth of work.</p>
      
      <p className="mb-6">With Vibelets, you can generate 30 unique ad variations from a single product URL in under 5 minutes. Here's how it works.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">The Testing Matrix Approach</h2>
      
      <p className="mb-4">A good testing matrix covers multiple dimensions:</p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Headlines:</strong> Benefit-focused, urgency-based, question-based, statement-based</li>
        <li><strong>Visuals:</strong> Lifestyle, product-only, comparison, testimonials</li>
        <li><strong>Audiences:</strong> Broad interests, lookalike, retargeting, competitor targeting</li>
        <li><strong>Offers:</strong> No offer, discount, free shipping, limited time</li>
      </ul>
      
      <p className="mb-6">Instead of guessing which combinations work, Vibelets analyzes your product page and generates variations across all these dimensions automatically.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">How Vibelets Generates Variations</h2>
      
      <p className="mb-4">When you paste your product URL, Vibelets:</p>
      
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li>Scans your product page for key features, benefits, and selling points</li>
        <li>Identifies your target audience based on product category</li>
        <li>Generates headline variations using proven copywriting frameworks</li>
        <li>Creates visual concepts that match your brand style</li>
        <li>Builds out the full testing matrix with 30+ combinations</li>
      </ol>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">The Results</h2>
      
      <p className="mb-6">Brands using Vibelets' testing matrix approach typically see:</p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>3x faster</strong> time to find winning ad combinations</li>
        <li><strong>40% reduction</strong> in cost per acquisition</li>
        <li><strong>2.5x increase</strong> in overall campaign performance</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Getting Started</h2>
      
      <p className="mb-6">Ready to build your testing matrix? Paste your product URL into Vibelets and let AI generate your first batch of ad variations. Start testing, start learning, start winning.</p>
    `,
  },
  'meta-account-audit': {
    title: 'Meta ads account audit: the 12 things AI flags first (and how to fix each one)',
    author: 'Vibelets Team',
    date: 'July 4, 2026',
    readTime: '8 min read',
    content: `
      <p className="text-lg text-muted mb-6">Running ads without regular audits is like driving with your eyes closed. You might be going in the right direction, but you won't know until it's too late.</p>
      
      <p className="mb-6">Our AI audits thousands of Meta ad accounts and has identified 12 issues that consistently appear in underperforming campaigns. Here's what to look for.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">The 12 Critical Issues</h2>
      
      <p className="mb-4">These issues fall into three categories: Structure, Creative, and Optimization.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Structure Issues</h3>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Too many campaigns:</strong> Consolidate campaigns with similar audiences</li>
        <li><strong>No campaign hierarchy:</strong> Organize by objective, then audience, then creative</li>
        <li><strong>Missing Lookalike audiences:</strong> Create LALs from your best customers</li>
        <li><strong>Overlapping audiences:</strong> Audit audience overlap monthly</li>
      </ol>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Creative Issues</h3>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Ad fatigue:</strong> Rotate creatives every 2-3 weeks</li>
        <li><strong>No video:</strong> Video ads consistently outperform static</li>
        <li><strong>Weak CTAs:</strong> Be specific: "Shop Now" vs "Learn More"</li>
        <li><strong>No social proof:</strong> Include testimonials, reviews, or user-generated content</li>
      </ol>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Optimization Issues</h3>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>No automated rules:</strong> Set up rules to pause underperformers</li>
        <li><strong>Wrong optimization goal:</strong> Match goal to campaign objective</li>
        <li><strong>Ignoring frequency:</strong> Cap frequency at 3-4 impressions per week</li>
        <li><strong>No dayparting:</strong> Schedule ads during peak performance hours</li>
      </ol>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">How to Fix Each Issue</h2>
      
      <p className="mb-6">Each of these 12 issues has a specific fix. The key is to audit your account regularly and address issues before they compound. Use Vibelets to automate the audit process and get weekly reports on these 12 critical metrics.</p>
    `,
  },
}

// Default content for posts not yet fully written
const defaultContent = {
  title: 'Coming Soon',
  author: 'Vibelets Team',
  date: '2026',
  readTime: '5 min read',
  content: '<p>This blog post is coming soon. Check back for updates!</p>',
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts[slug] || { ...defaultContent, title: `Post: ${slug}` }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-32 md:pt-40 pb-12 md:pb-16 overflow-hidden">
          <HexBackground color="#7C3AED" baseOpacity={0.04} hexSize={50} />
          <div className="container-tight relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <Link to="/blog" className="inline-flex items-center gap-2 text-accent mb-6 hover:underline">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
              <div className="flex items-center gap-4 text-sm text-muted mb-4">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                {post.title}
              </h1>
              <p className="text-muted">By {post.author}</p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding pt-0">
          <div className="container-tight">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl mx-auto prose prose-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-foreground/5">
          <div className="container-tight text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your marketing?</h2>
              <p className="text-lg text-muted mb-8">Start your free trial and see the difference.</p>
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
