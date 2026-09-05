"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SmartImage({
  src,
  alt,
  priority = false,
  className = "",
  objectPosition = "center",
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Shimmer loading skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-linear-to-r from-coffee-dark via-coffee-medium/20 to-coffee-dark bg-size-[200%_100%] animate-[shimmer_4.5s_infinite] z-10" />
      )}

      {/* Motion-animated image fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full h-full relative"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover", objectPosition }}
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>
    </div>
  );
}