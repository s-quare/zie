"use client";

import { motion } from "framer-motion";

export default function MetricsStrip() {
  const metrics = [
    {
      id: "01",
      value: "3+",
      label: "Years Experience",
      subtext: "Freelance & client delivery",
    },
    {
      id: "02",
      value: "100%",
      label: "Sprint Delivery",
      subtext: "Milestone & execution focus",
    },
    {
      id: "03",
      value: "End-to-End",
      label: "Lifecycle Ops",
      subtext: "Strategy to manual APK QA",
    },
    {
      id: "04",
      value: "Full-Stack",
      label: "Tech Alignment",
      subtext: "Seamless dev collaboration",
    },
  ];

  return (
    <section 
      aria-label="Key Performance Indicators"
      className="w-full bg-coffee-base/40 backdrop-blur-md border-coffee-medium/20"
    >
      <div className="grid grid-cols-2 md:grid-cols-4">
        {metrics.map((metric, idx) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className={`flex flex-col justify-between p-4 md:px-6 transition-colors hover:bg-coffee-medium/10 border-[0.25px] border-coffee-medium/20`}
          >

            {/* Metric Value */}
            <h3 className="font-serif font-extrabold text-2xl sm:text-4xl text-white tracking-tight mb-1">
              {metric.value}
            </h3>

            {/* Label & Subtext */}
            <div>
              <p className="font-sans font-semibold text-xs uppercase tracking-wider text-coffee-cream">
                {metric.label}
              </p>
              <p className="font-sans font-light text-[11px] text-coffee-cream mt-0.5">
                {metric.subtext}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}