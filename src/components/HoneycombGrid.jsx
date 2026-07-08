import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * HoneycombGrid - Background honeycomb pattern with proper nesting
 * Uses flat-top hexagons with true offset for honeycomb formation
 */
export function HoneycombGrid({
  className = '',
  hexSize = 30,
  opacity = 0.06,
  animationDuration = 8,
}) {
  const { patternId, hexPath, patternWidth, patternHeight } = useMemo(() => {
    const h = Math.sqrt(3) * hexSize;
    // Flat-top hex path
    const points = [
      [hexSize, 0],
      [hexSize * 3, 0],
      [hexSize * 4, h],
      [hexSize * 3, h * 2],
      [hexSize, h * 2],
      [0, h],
    ].map(p => p.join(',')).join(' ');
    
    return {
      patternId: `hex-bg-${Math.random().toString(36).slice(2, 9)}`,
      hexPath: points,
      patternWidth: hexSize * 4,
      patternHeight: h * 2,
    };
  }, [hexSize]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ '--hex-opacity': opacity }}
    >
      <svg
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={patternWidth}
            height={patternHeight}
            patternUnits="userSpaceOnUse"
          >
            {/* Main hex */}
            <polygon
              points={hexPath}
              fill="none"
              stroke="#7C3AED"
              strokeWidth="0.5"
              opacity={opacity}
            />
            {/* Offset hex for honeycomb nesting - shifts by half */}
            <polygon
              points={hexPath}
              fill="none"
              stroke="#7C3AED"
              strokeWidth="0.5"
              opacity={opacity * 0.6}
              transform={`translate(${hexSize * 2}, ${patternHeight / 2})`}
            />
          </pattern>
          <style>{`
            #${patternId} {
              animation: hexBreathe ${animationDuration}s ease-in-out infinite;
            }
            @keyframes hexBreathe {
              0%, 100% { opacity: ${opacity * 0.5}; }
              50% { opacity: ${opacity * 1.3}; }
            }
            @media (prefers-reduced-motion: reduce) {
              #${patternId} { animation: none; }
            }
          `}</style>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}

/**
 * HoneycombIntro - Full-screen intro animation on first load
 * Random hex lighting effect that clears to reveal page
 */
export function HoneycombIntro({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState('lighting'); // lighting, clearing, done
  
  const hexSize = 40;
  const cols = Math.ceil(typeof window !== 'undefined' ? window.innerWidth / (hexSize * 1.5) : 25) + 2;
  const rows = Math.ceil(typeof window !== 'undefined' ? window.innerHeight / (hexSize * 1.732) : 15) + 2;
  
  // Generate grid with random delays
  const hexagons = useMemo(() => {
    const items = [];
    const h = Math.sqrt(3) * hexSize;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // True honeycomb offset - odd rows shift
        const offsetX = row % 2 === 1 ? hexSize : 0;
        const x = col * hexSize * 1.5 + offsetX;
        const y = row * h;
        // Random delay for organic lighting effect
        const delay = Math.random() * 0.8;
        items.push({ x, y, delay, id: `${row}-${col}` });
      }
    }
    return items;
  }, [cols, rows, hexSize]);
  
  useEffect(() => {
    // Check reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false);
      onComplete?.();
      return;
    }
    
    // Check session storage
    if (sessionStorage.getItem('honeycombIntroPlayed')) {
      setVisible(false);
      onComplete?.();
      return;
    }
    
    // Lighting phase (0.8s) -> Clearing phase (1.2s) -> Done
    const timer1 = setTimeout(() => setPhase('clearing'), 800);
    const timer2 = setTimeout(() => {
      setPhase('done');
      sessionStorage.setItem('honeycombIntroPlayed', 'true');
    }, 2000);
    const timer3 = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 2500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (!visible) return null;

  const hexPath = [
    [hexSize, 0],
    [hexSize * 2, 0],
    [hexSize * 3, hexSize * 0.866],
    [hexSize * 2, hexSize * 1.732],
    [hexSize, hexSize * 1.732],
    [0, hexSize * 0.866],
  ].map(p => p.join(',')).join(' ');

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 'done' ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-foreground flex items-center justify-center overflow-hidden"
    >
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${cols * hexSize * 1.5} ${rows * hexSize * 1.732}`}
        preserveAspectRatio="xMidYMid slice"
      >
        {hexagons.map((hex) => (
          <motion.polygon
            key={hex.id}
            points={hexPath}
            fill="none"
            stroke="#7C3AED"
            strokeWidth="1"
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: phase === 'lighting' 
                ? [0.1, 0.9, 0.4] 
                : 0,
            }}
            transition={{
              duration: 0.3,
              delay: hex.delay,
              ease: 'easeOut',
            }}
            style={{ transform: `translate(${hex.x}px, ${hex.y}px)` }}
          />
        ))}
      </svg>
      {/* Center glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, transparent 50%',
        }}
      />
    </motion.div>
  );
}
