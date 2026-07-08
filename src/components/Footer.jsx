import { motion } from 'framer-motion';

const footerLinks = [
  { label: 'About Us', href: './about-us' },
  { label: 'Compare', href: './compare' },
  { label: 'Blog', href: './blog' },
  { label: 'Contact', href: './contact' },
  { label: 'Privacy Policy', href: './privacy-policy' },
];

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-border">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-bold">Vibelets</span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Support */}
          <p className="text-sm text-muted">
            <a href="mailto:support@vibelets.ai" className="hover:text-foreground transition-colors">
              support@vibelets.ai
            </a>
          </p>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Vibelets. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
