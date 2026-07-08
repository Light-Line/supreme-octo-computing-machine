import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import HexBackground from '../components/HexBackground'
import { motion } from 'framer-motion'

export default function PrivacyPolicyPage() {
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
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Privacy Policy
              </h1>
              <p className="text-muted">Last updated: July 5, 2026</p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding pt-0">
          <div className="container-tight">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl prose prose-lg"
            >
              <p className="text-lg text-muted mb-8">
                This Privacy Policy describes how Vibelets, Inc. ("Vibelets", "we", "us", or "our") collects, uses, discloses, and protects your information when you use our software-as-a-service (SaaS) platform, applications, and related services (collectively, the "Service"). Vibelets is committed to transparency, accountability, and compliance with international data protection laws such as the General Data Protection Regulation (EU) 2016/679 ("GDPR") and the California Consumer Privacy Act of 2018 ("CCPA"), as amended by the CPRA.
              </p>

              <h2>1. About Vibelets</h2>
              <p>
                Vibelets is an AI-powered marketing tool that helps individuals and teams build, optimize, and analyze digital campaigns using modular components ("Viblets"). Our platform is used globally and designed with privacy and ethical AI at its core.
              </p>

              <h2>2. What Information We Collect</h2>
              <p>We collect personal and non-personal data, either directly from you or automatically through your use of the Service.</p>

              <h3>a. Information You Provide to Us</h3>
              <ul>
                <li><strong>Account Registration:</strong> Full name, business name, email address, password, country</li>
                <li><strong>Billing Information:</strong> Payment card details, billing address (handled securely via a third-party processor)</li>
                <li><strong>Support Requests:</strong> Correspondence and support content</li>
                <li><strong>User Content:</strong> Campaign data, uploaded media, notes, feedback</li>
              </ul>

              <h3>b. Automatically Collected Information</h3>
              <ul>
                <li><strong>Usage Data:</strong> Log data, feature interaction, clicks, timestamps</li>
                <li><strong>Device Data:</strong> IP address, browser type/version, operating system, screen resolution</li>
                <li><strong>Tracking Technologies:</strong> Cookies, pixels, web beacons, local storage</li>
              </ul>

              <h3>c. Third-Party Sources</h3>
              <ul>
                <li>API integrations (e.g., Facebook Ads, Google Ads) may provide us campaign performance data</li>
                <li>Authentication providers if you use Single Sign-On (SSO) (e.g., Google)</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use your personal data for the following purposes, in accordance with Article 6 of the GDPR and relevant CCPA provisions:</p>

              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Purpose</th>
                    <th className="text-left py-2">Legal Basis (GDPR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td>To provide and maintain our Service</td><td>Performance of a contract (Art. 6(1)(b))</td></tr>
                  <tr className="border-b"><td>To process payments</td><td>Legal obligation & contract</td></tr>
                  <tr className="border-b"><td>To improve AI-generated campaign insights</td><td>Legitimate interests (Art. 6(1)(f))</td></tr>
                  <tr className="border-b"><td>To analyze usage trends</td><td>Legitimate interests</td></tr>
                  <tr className="border-b"><td>To communicate with you (support, updates)</td><td>Consent or contract</td></tr>
                  <tr className="border-b"><td>To ensure security and detect fraud</td><td>Legitimate interests / legal obligations</td></tr>
                  <tr><td>To comply with laws</td><td>Legal obligation (Art. 6(1)(c))</td></tr>
                </tbody>
              </table>

              <h2>4. How AI Uses Your Data</h2>
              <p>Our platform uses AI/ML technologies to generate insights, recommend content structures, and optimize engagement predictions. Human judgment remains essential — the AI does not automatically publish or deploy campaigns.</p>
              <p><strong>Key AI interactions:</strong></p>
              <ul>
                <li>Analyzing tone, creative structure, and predicted engagement</li>
                <li>Recommending optimized campaign "Viblet" combinations</li>
                <li>Aggregating performance benchmarks</li>
              </ul>
              <p>We do not use your data to train third-party AI models. Our models may be fine-tuned internally for quality improvement in a privacy-preserving manner.</p>

              <h2>5. Data Sharing & Disclosure</h2>
              <p>We do not sell your data, and we do not share it with third parties except under these conditions:</p>
              
              <h3>a. Service Providers</h3>
              <p>Trusted subprocessors for: Cloud infrastructure, Analytics, Payments, Communication (e.g., Intercom, SendGrid). All subprocessors are bound by data processing agreements compliant with Article 28 of the GDPR.</p>

              <h3>b. Legal Compliance</h3>
              <p>We may disclose your information to regulators or law enforcement if legally required under applicable laws.</p>

              <h3>c. Business Transfers</h3>
              <p>If Vibelets is involved in a merger, acquisition, or asset sale, user data may be transferred as part of that transaction with appropriate privacy safeguards.</p>

              <h2>6. International Data Transfers</h2>
              <p>If you are located in the European Economic Area (EEA), we may transfer your data to countries outside the EEA. When we do, we ensure appropriate safeguards are in place:</p>
              <ul>
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>Data Processing Agreements with adequate protections</li>
                <li>Regular assessments of vendor practices</li>
              </ul>

              <h2>7. Data Retention</h2>
              <p>We retain your personal data only as long as necessary:</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Data Category</th>
                    <th className="text-left py-2">Retention Period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td>Account Information</td><td>Until account deletion or 3 years after inactivity</td></tr>
                  <tr className="border-b"><td>Billing Records</td><td>7 years (to comply with financial regulations)</td></tr>
                  <tr className="border-b"><td>Campaign Data</td><td>Up to 24 months after campaign conclusion</td></tr>
                  <tr><td>Support Tickets</td><td>2 years</td></tr>
                </tbody>
              </table>

              <h2>8. Your Privacy Rights</h2>
              <p><strong>For EEA / UK Residents (GDPR):</strong></p>
              <ul>
                <li>Right to access your data (Art. 15)</li>
                <li>Right to rectify inaccurate data (Art. 16)</li>
                <li>Right to erasure "right to be forgotten" (Art. 17)</li>
                <li>Right to restrict processing (Art. 18)</li>
                <li>Right to data portability (Art. 20)</li>
                <li>Right to object to processing (Art. 21)</li>
                <li>Right to withdraw consent at any time</li>
              </ul>

              <p><strong>For California Residents (CCPA/CPRA):</strong></p>
              <ul>
                <li>Know what personal data we collect, use, and share</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of "sale" or "sharing" of data (we do not sell data)</li>
                <li>Limit use of sensitive personal information</li>
                <li>Non-discrimination for exercising privacy rights</li>
              </ul>

              <p>We will respond within 30 days (GDPR) / 45 days (CCPA), with possible extensions as allowed by law.</p>

              <h2>9. Cookies & Similar Technologies</h2>
              <p>We use first- and third-party cookies for: Session management, Analytics, Feature customization, A/B testing. You can control cookies via your browser settings or consent banner.</p>

              <h2>10. Security Measures</h2>
              <p>We follow industry best practices to protect your information:</p>
              <ul>
                <li>End-to-end encryption for data in transit (HTTPS/TLS 1.2+)</li>
                <li>Encryption at rest (AES-256)</li>
                <li>Role-based access controls</li>
                <li>Regular security audits and penetration testing</li>
                <li>Multi-factor authentication (MFA) for admin access</li>
              </ul>

              <h2>11. Children's Privacy</h2>
              <p>Vibelets is not intended for users under the age of 16. We do not knowingly collect or process personal data from children. If we become aware of data collected from a minor, we will promptly delete it.</p>

              <h2>12. Changes to This Privacy Policy</h2>
              <p>We may update this Policy to reflect changes in technology, law, or our practices. When we do, we'll notify you via email or in-app notice. Your continued use of the Service after such changes constitutes your consent to the updated terms.</p>

              <h2>13. Contact Us</h2>
              <p>To ask questions or exercise your rights, contact our privacy team at:</p>
              <p><a href="mailto:support@vibelets.ai" className="text-accent hover:underline">support@vibelets.ai</a></p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
