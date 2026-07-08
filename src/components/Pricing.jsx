import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'Perfect for getting started with AI-powered marketing.',
    features: [
      '1 brand',
      'Human-in-loop',
      'Product intelligence',
      'Unlimited URLs',
      '500 creatives / month',
      'Meta + Google',
      'Approval workflow',
    ],
    cta: 'Get Started for Free',
    ctaLink: 'https://app.vibelets.ai/signup',
    popular: false,
    unavailable: false,
  },
  {
    name: 'Pro',
    price: 'Unlocking Soon',
    period: '',
    description: 'For growing brands ready to scale.',
    features: [
      'Everything in starter plan',
      'Integrations with 3rd-party',
      'Advanced analytics',
      'Premium chatbot features',
      'Cross-platform integrations',
    ],
    cta: 'Start Growth',
    ctaLink: 'https://app.vibelets.ai/signup',
    popular: true,
    unavailable: true,
  },
  {
    name: 'Enterprise',
    price: 'Unlocking Soon',
    period: '',
    description: 'For large organizations with custom needs.',
    features: [
      'Everything in pro plan',
      'Dedicated growth manager',
      'Custom reports & dashboards',
      'Fully customized AI solutions',
      'Scalable AI solutions',
    ],
    cta: 'Talk to sales',
    ctaLink: 'https://app.vibelets.ai/signup',
    popular: false,
    unavailable: true,
  },
];

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  return (
    <section id="pricing" className="section-padding">
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
            Pay for outcomes. Not seats, not hours.
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            Every plan includes the full system. You scale by brand count, channels, and how much Vibelets can move on your behalf without asking.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 bg-foreground/5 rounded-full p-1">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                billingPeriod === 'monthly'
                  ? 'bg-foreground text-background'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                billingPeriod === 'yearly'
                  ? 'bg-foreground text-background'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs text-accent">30% off</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative bg-background rounded-2xl p-6 md:p-8 border ${
                plan.popular
                  ? 'border-accent shadow-lg shadow-accent/10'
                  : 'border-border'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-xs font-medium bg-accent text-white rounded-full">
                    Popular
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-bold">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted mt-2">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.ctaLink}
                className={`block w-full text-center py-3 px-6 font-semibold rounded-full transition-colors ${
                  plan.popular
                    ? 'bg-accent text-white hover:bg-accent-hover'
                    : plan.unavailable
                    ? 'bg-foreground/10 text-muted cursor-not-allowed'
                    : 'bg-foreground text-background hover:opacity-90'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
