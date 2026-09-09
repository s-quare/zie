"use client";

import { useEffect, useState } from "react";

export function LiquidGlassFilter() {
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

function useSupportsLiquidGlass() {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    try {
      if (typeof navigator !== "undefined" && "userAgentData" in navigator) {
        setSupported(true);
        return;
      }

      const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
      const isIOS =
        /iPhone|iPad|iPod/.test(ua) ||
        (ua.includes("Macintosh") && navigator.maxTouchPoints > 1); // iPadOS masquerading as Mac

      if (isIOS) {
        setSupported(false);
        return;
      }

      const isChromiumUA =
        /Chrome|Chromium|Edg\//.test(ua) &&
        !/CriOS|FxiOS|EdgiOS/.test(ua);

      setSupported(Boolean(isChromiumUA));
    } catch {
      setSupported(false);
    }
  }, []);

  return supported;
}

export function LiquidGlass({ children, className = "" }) {
  const supportsLiquidGlass = useSupportsLiquidGlass();

  const fallbackGlass = `
    absolute inset-0 z-0 rounded-[inherit]
    border border-white/20
    bg-white/8
    pointer-events-none
    shadow-[inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.25)]
    [backdrop-filter:blur(20px)_saturate(180%)]
    [-webkit-backdrop-filter:blur(20px)_saturate(180%)]
  `;

  const liquidGlass = `
    absolute inset-0 z-0 rounded-[inherit]
    border border-white/15
    bg-white/5
    pointer-events-none
    shadow-[inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(255,255,255,0.1)]
    [backdrop-filter:url(#lg)_blur(4px)_saturate(160%)]
    [-webkit-backdrop-filter:url(#lg)_blur(4px)_saturate(160%)]
  `;

  const glassClass = supportsLiquidGlass ? liquidGlass : fallbackGlass;

  return (
    <>
      <div className={`${glassClass} ${className}`} />

      <span className="relative z-10">{children}</span>
    </>
  );
}