// components/LiquidGlass.jsx
"use client";

export function LiquidGlassFilter() {
  // Render this ONCE at your app root (e.g. in layout.js).
  // Every LiquidGlass instance below references it via url(#lg).
  return (
    <svg style={{ position: "absolute", width: 0, height: 0 }}>
      <filter id="lg" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.008 0.008"
          numOctaves="2"
          seed="92"
          result="noise"
        />
        <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="blurred"
          scale="65"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );
}

export function LiquidGlass({ children, className = "" }) {
  return (
    <>
      {/* the glass layer — fills whatever parent you drop it in */}
      <div
        className={`absolute inset-0 z-0 rounded-[inherit] border border-white/15 bg-white/5 pointer-events-none shadow-[inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(255,255,255,0.1)] [backdrop-filter:url(#lg)_blur(4px)_saturate(160%)] [-webkit-backdrop-filter:url(#lg)_blur(4px)_saturate(160%)] ${className}`}
      />

      {/* content wrapper — sits above the glass */}
      <span className="relative z-10">{children}</span>
    </>
  );
}