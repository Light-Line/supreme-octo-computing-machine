import { useId } from 'react';

/**
 * HexBackground - A subtle hexagonal grid pattern with breathing animation
 * Uses SVG pattern for reliable rendering
 */
export default function HexBackground({
  className = '',
  color = '#7C3AED',
  baseOpacity = 0.06,
  hexSize = 60,
  animationDuration = 8,
}) {
  const uniqueId = useId();
  const patternId = `hex-pattern-${uniqueId}`;
  const h = Math.round(hexSize * 0.866); // sqrt(3)/2

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
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
            width={hexSize * 4}
            height={h * 2}
            patternUnits="userSpaceOnUse"
          >
            {/* Main flat-top hexagon */}
            <polygon
              points={`${hexSize},0 ${hexSize * 3},0 ${hexSize * 4},${h} ${hexSize * 3},${h * 2} ${hexSize},${h * 2} 0,${h}`}
              fill="none"
              stroke={color}
              strokeWidth="1"
              opacity={baseOpacity}
            />
            {/* Staggered hex */}
            <polygon
              points={`${hexSize * 2.5},${h} ${hexSize * 4.5},${h} ${hexSize * 5.5},${h * 2} ${hexSize * 4.5},${h * 3} ${hexSize * 2.5},${h * 3} ${hexSize * 1.5},${h * 2}`}
              fill="none"
              stroke={color}
              strokeWidth="1"
              opacity={baseOpacity * 0.5}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      
      {/* Breathing animation via CSS */}
      <style>{`
        [id="${patternId}"] polygon {
          animation: hexBreathe${uniqueId} ${animationDuration}s ease-in-out infinite;
        }
        [id="${patternId}"] polygon:last-child {
          animation-delay: ${animationDuration * 0.25}s;
        }
        @keyframes hexBreathe${uniqueId} {
          0%, 100% { opacity: ${baseOpacity * 0.4}; }
          50% { opacity: ${baseOpacity * 1.3}; }
        }
        @media (prefers-reduced-motion: reduce) {
          [id="${patternId}"] polygon { animation: none; }
        }
      `}</style>
    </div>
  );
}
