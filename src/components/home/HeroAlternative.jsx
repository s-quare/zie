"use client";

import Link from "@/components/Link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroAlternative() {
  return (
    <section
      aria-labelledby="hero-alt-heading"
      className="relative min-h-svh w-full overflow-hidden bg-coffee-dark flex items-center justify-center px-4 sm:px-8 py-24 lg:py-16"
    >
      {/* 1. FULL-SCREEN BLURRED HEAD SHOT BACKGROUND */}
      <div className="absolute inset-0 h-full w-full pointer-events-none z-0">
        <Image
          src="/images/zie-image.jpg"
          alt="Peace Chigozie Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter blur-lg lg:blur-xl scale-110 opacity-30"
        />
      </div>

      {/* 2. MAIN GRID CONTAINER: Responsive Split (Stacked on Mobile, 2-Cols on Desktop) */}
      <div className="relative z-10 w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-20 items-center">
        {/* LEFT COLUMN: Editorial Text Content */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 w-fit"
          >
            <span className="text-[10px] uppercase tracking-widest text-coffee-tan">
              PRoduct Manager & Operations Specialist
            </span>
          </motion.div>

          {/* Main H1 Headline */}
          <motion.h1
            id="hero-alt-heading"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.12] tracking-wide"
          >
            Peace Chinagorom Chigozie
          </motion.h1>

          {/* Subtext Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-white max-w-xl leading-relaxed font-light"
          >
            Building seamless products requires more than roadmaps, it demands
            crisp execution on the ground. I sit at the intersection of
            development teams, rigorous APK testing, and field operations to
            ensure every release is bug-free, user-validated, and delivered with
            momentum.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link
              href="/projects"
              className="px-6 py-3.5 bg-coffee-tan hover:bg-coffee-cream text-coffee-dark font-bold text-[10px] uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <i className="bi bi-arrow-right"></i>
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3.5 bg-coffee-base/80 hover:bg-coffee-base text-coffee-cream border border-coffee-medium/40 font-semibold text-[10px] uppercase tracking-wider transition-all backdrop-blur-sm"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Framed Poster Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-85 sm:max-w-95 mx-auto aspect-3/4 bg-coffee-base border-2 border-coffee-cream/90 shadow-2xl overflow-hidden">
            <Image
              src="/images/zie-image.jpg"
              alt="Peace Chigozie Poster"
              fill
              priority
              sizes="(max-width: 640px) 340px, 380px"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute top-0 left-0 w-full h-1/3 pointer-events-none select-none">
              <svg
                className="w-full h-full"
                viewBox="0 0 320 120"
                preserveAspectRatio="none"
              >
                <defs>
                  <mask id="zie-text-cutout">
                    {/* Solid white guarantees 100% opaque background */}
                    <rect width="100%" height="100%" fill="white" />

                    {/* Black text punches a clean hole through to the image */}
                    <text
                      x="12"
                      y="121"
                      fill="black"
                      className="font-serif font-black"
                      fontSize="92"
                      letterSpacing="4"
                    >
                      ZIE
                    </text>
                  </mask>
                </defs>

                {/* Solid coffee-tan block using the cutout mask */}
                <image
                  href="/images/paper.webp" /* <-- Put your background image path here */
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice" /* Acts like object-cover */
                  mask="url(#zie-text-cutout)"
                />
              </svg>
              <p className="absolute bottom-1 right-1 text-coffee-dark font-black font-serif text-[10px]">
                Lagos NG.
              </p>
            </div>

            <DateBadge />

            <p className="absolute top-2 right-2 text-xs font-serif font-black text-coffee-dark leading-none">
              PM &<br /> OPS
            </p>

            
          </div>
        </motion.div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 right-0 left-0 w-full h-12 bg-linear-to-b from-transparent to-coffee-dark" />
    </section>
  );
}

function DateBadge() {
  const now = new Date();

  // Format day (e.g., "04" or "16")
  const day = now.getDate().toString().padStart(2, "0");

  // Format short month (e.g., "SEP")
  const month = now.toLocaleString("en-US", { month: "short" }).toUpperCase();

  // Split 4-digit year into two parts (e.g., "20" and "26")
  const yearFull = now.getFullYear().toString();
  const yearTop = yearFull.slice(0, 2);
  const yearBottom = yearFull.slice(2);

  return (
    <div className="absolute top-4 font-bold flex items-center gap-0 font-mono text-coffee-dark select-none">
      {/* Rotated Day & Short Month */}
      <div className="-rotate-90 whitespace-nowrap text-[9px] font-bold tracking-tighter leading-none">
        {day}, {month}
      </div>

      {/* Two-line Stacked Year */}
      <div className="relative -left-1.5 -top-1 flex flex-col text-xl font-black leading-[80%] tracking-wider text-coffee-dark font-serif scale-130">
        <span>{yearTop}</span>
        <span>{yearBottom}</span>
      </div>
    </div>
  );
}
