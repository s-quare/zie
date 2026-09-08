"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Search,
  Users,
  LineChart,
} from "lucide-react";

export default function VersatilityMatrix() {
  const pillars = [
    {
      id: "01",
      title: "Product Operations & QA",
      icon: ShieldCheck,
      description:
        "Safeguarding software stability and release quality across multi-platform environments.",
      skills: [
        "Multi-Environment QA (APK, Staging, iOS)",
        "Regression & Feature Testing",
        "User Onboarding & Drop-off Recovery",
        "Release Flow Monitoring",
      ],
    },
    {
      id: "02",
      title: "User Research & Strategy",
      icon: Search,
      description:
        "Translating qualitative user friction and field research into actionable product improvements.",
      skills: [
        "Usability Assessments & Audits",
        "Customer Feedback Analysis",
        "PRD & Requirements Gathering",
        "Backlog Prioritization & Grooming",
      ],
    },
    {
      id: "03",
      title: "Cross-Functional Execution",
      icon: Users,
      description:
        "Bridging communication between engineering teams, design, and business stakeholders.",
      skills: [
        "Agile & Sprint Coordination",
        "Remote Cross-Border Collaboration",
        "Stakeholder Updates & Documentation",
        "Process Optimization",
      ],
    },
    {
      id: "04",
      title: "Digital Engagement & Analytics",
      icon: LineChart,
      description:
        "Evaluating platform interaction metrics to inform growth strategies and brand presence.",
      skills: [
        "Engagement Performance Metrics",
        "Customer Relationship Management",
        "Data Dashboards & Reporting",
        "Content Strategy & Optimization",
      ],
    },
  ];

  return (
    <section
      aria-labelledby="versatility-matrix-heading"
      className="w-full my-20 px-4 sm:px-8"
    >
      {/* Header */}
      <div className="mb-12">
        <h2
          id="versatility-matrix-heading"
          className="font-serif font-bold text-3xl sm:text-4xl text-coffee-cream leading-tight"
        >
          Versatility & Expertise Matrix
        </h2>
      </div>

      <p className="mb-12 max-w-3xl">
        Product management {`isn't`} just about defining requirements; it is about
        keeping wheels turning. My approach combines systematic QA testing,
        actionable user feedback, and cross-functional coordination to ensure
        software is stable and teams stay aligned.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;

          return (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, }}
              className="bg-coffee-base/20 border border-coffee-medium/20 rounded-2xl px-6 sm:px-8 py-4 hover:border-coffee-medium/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Identifier & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="opacity-0 select-none pointer-events-none font-mono text-xs text-coffee-tan font-bold tracking-widest">
                    [{pillar.id}]
                  </span>
                  <div className="p-2.5 bg-coffee-dark/60 rounded-xl border border-coffee-medium/30 text-coffee-tan group-hover:text-coffee-cream transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Pillar Title */}
                <h3 className="font-serif font-bold text-xl text-white mb-2">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-coffee-cream leading-relaxed font-light mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Skills Checklist */}
              <div className="pt-4 border-t border-coffee-medium/10">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {pillar.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-coffee-cream shrink-0" />
                      <span className="font-mono text-[11px] text-coffee-cream">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
