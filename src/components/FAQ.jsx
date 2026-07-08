import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What is Vibelets.ai?',
    answer: 'Vibelets.ai is an AI-powered marketing platform that builds your creatives, runs your ads, and finds you customers. Simply paste a URL and our AI handles the rest.',
  },
  {
    question: 'Who is Vibelets built for?',
    answer: 'Vibelets is built for e-commerce brands, startups, and growing businesses who want to scale their advertising without hiring a full marketing team.',
  },
  {
    question: 'Which advertising platforms does Vibelets support?',
    answer: 'Currently, Vibelets supports Meta (Facebook & Instagram) and Google Ads. More platforms are coming soon.',
  },
  {
    question: 'How does Vibelets improve campaign performance?',
    answer: 'Vibelets uses AI to continuously analyze your ad performance and automatically optimize targeting, creative elements, and bidding strategies every hour.',
  },
  {
    question: 'Can I create and manage campaigns inside Vibelets?',
    answer: 'Yes! Vibelets provides a complete campaign management interface where you can create, pause, and monitor all your ad campaigns in one place.',
  },
  {
    question: 'Does Vibelets help with creative development?',
    answer: 'Absolutely. Our AI generates full ad sets including copy, headlines, and visual concepts tailored to your brand and target audience.',
  },
  {
    question: 'What analytics does Vibelets provide?',
    answer: 'Vibelets provides real-time analytics including impressions, clicks, conversions, ROAS, cost per acquisition, and custom performance dashboards.',
  },
  {
    question: 'How real-time is the data inside Vibelets?',
    answer: 'All metrics are updated in real-time, with performance data refreshing every hour for active campaigns.',
  },
  {
    question: 'What is required during onboarding?',
    answer: 'Simply paste your website URL. Vibelets will analyze your brand and have your first ad set ready within minutes. No technical setup required.',
  },
  {
    question: 'How does the 14-day trial work?',
    answer: 'Start with full access to all features. If you are not satisfied within 14 days, contact us for a full refund. No questions asked.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="section-padding bg-foreground/5">
      <div className="container-tight">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Objections, handled.
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            We've heard every reason not to try it. Here are the honest answers.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="border-b border-border last:border-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-5 flex items-center justify-between text-left"
              >
                <span className="text-base md:text-lg font-medium pr-8">
                  {faq.question}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-5 text-muted flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-muted">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
