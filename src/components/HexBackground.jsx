/**
 * HexBackground - A subtle hexagonal grid pattern with breathing animation
 * Performance-optimized using CSS background pattern
 * 
 * CSS Variables for customization:
 * --hex-color: Base color for hexagons (default: #7C3AED)
 * --hex-opacity: Base opacity (default: 0.06)
 * --hex-size: Size in px (default: 60)
 * --hex-animation-duration: Animation seconds (default: 8)
 */
export default function HexBackground({
  className = '',
  color = '#7C3AED',
  baseOpacity = 0.06,
  hexSize = 60,
  animationDuration = 8,
}) {
  // Encode color for SVG
  const encodedColor = encodeURIComponent(color);
  const h = Math.round(hexSize * 0.866); // sqrt(3)/2
  
  // Generate SVG pattern data URL
  const patternSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${hexSize * 2}" height="${h * 2}">
      <defs>
        <pattern id="hex" x="0" y="0" width="${hexSize * 2}" height="${h * 2}" patternUnits="userSpaceOnUse">
          <path d="M${hexSize},0 L${hexSize * 2},${h * 0.5} L${hexSize * 2},${h * 1.5} L${hexSize},${h * 2} L0,${h * 1.5} L0,${h * 0.5} Z" 
                fill="none" stroke="${encodedColor}" stroke-width="1" opacity="${baseOpacity}"/>
          <path d="M${hexSize * 0.5},${h * 0.5} L${hexSize * 1.5},${h} L${hexSize * 1.5},${h * 2} L${hexSize * 0.5},${h * 2.5} L${-hexSize * 0.5},${h * 2} L${-hexSize * 0.5},${h} Z" 
                fill="none" stroke="${encodedColor}" stroke-width="1" opacity="${baseOpacity * 0.7}"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex)"/>
      <style>
        pattern { animation: hexBreathe ${animationDuration}s ease-in-out infinite; }
        @keyframes hexBreathe {
          0%, 100% { opacity: ${baseOpacity * 0.5}; }
          50% { opacity: ${baseOpacity * 1.5}; }
        }
        @media (prefers-reduced-motion: reduce) {
          pattern { animation: none; }
        }
      </style>
    </svg>
  `.trim().replace(/\s+/g, ' ');

  const dataUrl = `data:image/svg+xml,${encodeURIComponent(patternSvg)}`;

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{
        backgroundImage: `url("${dataUrl}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: `${hexSize * 2}px ${h * 2}px`,
      }}
      aria-hidden="true"
    />
  );
}
