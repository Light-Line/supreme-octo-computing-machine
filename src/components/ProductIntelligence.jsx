import { motion } from 'framer-motion';

const features = [
  { label: 'Brand Tone', value: 'Playful · Bold' },
  { label: 'Audience', value: 'M+F · 18–28' },
  { label: 'Category', value: 'Oversized Tees' },
  { label: 'Price Band', value: '$28 – $34' },
];

export default function ProductIntelligence() {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-accent mb-4 uppercase tracking-wider">
              Product Intelligence
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Your brand. Decoded in <span className="text-accent">90 seconds.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Drop in a URL. Vibelet scans your site and pulls every angle a strategist would — tone, audience, hooks, price band — before your coffee's cold.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.vibelets.ai/signup"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors"
              >
                Start Creating
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-6 py-3 border border-background/20 text-white font-semibold rounded-full hover:bg-background/10 transition-colors"
              >
                Book a Demo
              </a>
            </div>
          </motion.div>

          {/* Right - Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background/5 backdrop-blur rounded-2xl p-6 md:p-8 border border-background/10"
          >
            {/* Brand decode header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent text-lg">🧠</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Decoding brand</p>
                <p className="font-semibold">0/5 Complete</p>
              </div>
            </div>

            {/* Features list */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-center justify-between py-3 border-b border-background/10 last:border-0"
                >
                  <span className="text-sm text-muted-foreground">{feature.label}</span>
                  <span className="font-medium">{feature.value}</span>
                </motion.div>
              ))}
            </div>

            {/* Hook angle highlight */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 p-4 bg-accent/20 rounded-xl"
            >
              <p className="text-sm text-muted-foreground mb-1">Hook Angle</p>
              <p className="font-semibold text-accent">Stand Out</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
