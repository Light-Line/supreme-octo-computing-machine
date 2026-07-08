import { motion } from 'framer-motion';

const stats = [
  { value: '$12M+', label: 'Ad spend managed' },
  { value: '40K+', label: 'Creatives launched' },
  { value: '1,400+', label: 'Brands on Vibelets' },
];

export default function MiniStats() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 bg-foreground text-background"
    >
      <div className="container-tight">
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl md:text-3xl font-bold text-accent mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-background/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
