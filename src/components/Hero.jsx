import { useState } from 'react';
import { motion } from 'framer-motion';
import HexBackground from './HexBackground';
import demoVideo from '../assets/videos/demo-1.mp4';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 lg:pb-32 overflow-hidden">
      {/* Hexagon background pattern */}
      <HexBackground
        color="#7C3AED"
        baseOpacity={0.08}
        hexSize={50}
        animationDuration={10}
      />
      
      <div className="container-tight relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Paste a URL. First ad live in 10 minutes.
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
          >
            Your <span className="text-accent">AI Marketer</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10"
          >
            Vibelets builds your creatives, runs your ads, and finds you customers. All in minutes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <a
              href="https://app.vibelets.ai/signup"
              className="w-full sm:w-auto px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Start Winning
            </a>
            <a
              href="#demo"
              className="w-full sm:w-auto px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:bg-foreground/5 transition-colors"
            >
              Book a Demo
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-muted"
          >
            14-day trial · No credit card · Cancel anytime
          </motion.p>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 md:mt-20 relative aspect-video bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl overflow-hidden border border-border"
          >
            {isPlaying ? (
              <video
                src={demoVideo}
                controls
                autoPlay
                className="w-full h-full object-cover"
                onEnded={() => setIsPlaying(false)}
              />
            ) : (
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="w-20 h-20 rounded-full bg-background/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-accent ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
