"use client";

import { useState } from "react";
import Image from "next/image";

export default function AltImage({
  src,
  alt = "",
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  ...props
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-black/20 border border-white/10 ${className}`}
    >
      {/* Ambient faint white orb loader (pulses gently until image loads) */}
      {isLoading && (
        <div className="absolute -top-35 -right-35 w-100 h-100 bg-white/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      )}

      {/* Main Image */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        onLoad={() => setIsLoading(false)}
        className={`object-cover object-center transition-opacity duration-700 ease-out ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        {...props}
      />
    </div>
  );
}