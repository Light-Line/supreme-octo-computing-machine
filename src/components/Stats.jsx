import { motion } from 'framer-motion';

const stats = [
  { value: '$12M+', label: 'Ad spend managed' },
  { value: '40,204', label: 'Creatives launched' },
  { value: '1,412', label: 'Brands on Vibelets' },
  { value: '100+', label: 'Avg ROAS lift' },
];

export default function Stats() {
  return (
    <section className="section-padding">
      <div className="container-tight">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Built by operators who ran the spend.
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            We've managed millions in spend and launched thousands of ads ourselves. We know the game because we played it — for ourselves, first.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-2">
                {stat.value}
              </p>
              <p className="text-sm md:text-base text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
