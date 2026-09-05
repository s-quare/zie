"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Building2 } from "lucide-react";

export default function ExperienceTimeline() {
  const experiences = [
    {
      id: "01",
      role: "Associate Product Manager",
      company: "Peakpath Innovation",
      location: "Lagos, Nigeria",
      period: "Jun 2025 – Present",
      type: "Full-Time",
      highlights: [
        "Manage product operations for Servicedey, a live digital services platform available on iOS and Android.",
        "Perform testing across APK, staging, production, and iOS environments to ensure product quality and functionality.",
        "Conduct user research and analyze customer feedback to identify opportunities for platform improvements.",
        "Coordinate cross-functional teams including engineering, design, and business stakeholders to deliver product milestones.",
        "Support customer onboarding initiatives by engaging users with incomplete registrations to improve activation rates.",
      ],
    },
    {
      id: "02",
      role: "Associate Social Media Manager",
      company: "Rankreform Agency",
      location: "Lagos, Nigeria",
      period: "May 2025 – Aug 2025",
      type: "Contract / Role",
      highlights: [
        "Developed digital content strategies and campaigns to improve customer engagement and online visibility.",
        "Analyzed engagement metrics to evaluate campaign performance and inform content decisions.",
        "Managed client communications and supported customer relationship activities.",
      ],
    },
    {
      id: "03",
      role: "Product Manager Intern",
      company: "Deotechnological",
      location: "Lagos, Nigeria",
      period: "Jul 2024 – May 2025",
      type: "Internship",
      highlights: [
        "Supported product development initiatives through customer feedback analysis and usability assessments.",
        "Collaborated with development teams to improve product functionality and user experience.",
        "Assisted in translating business requirements into actionable product improvements and feature prioritization.",
      ],
    },
    {
      id: "04",
      role: "Video Editor Intern",
      company: "Tayari.live",
      location: "Kenya (Remote)",
      period: "Oct 2024 – Dec 2024",
      type: "Remote Internship",
      highlights: [
        "Produced and edited digital media content while collaborating with remote stakeholders across multiple locations.",
        "Demonstrated strong organizational, communication, and project coordination skills in a distributed work environment.",
      ],
    },
  ];

  return (
    <section 
      aria-labelledby="experience-heading"
      className="w-full max-w-[1200px] mx-auto my-20 px-4 sm:px-8"
    >
      {/* Section Header */}
      <div className="mb-12 border-b border-coffee-medium/20 pb-6">
        <span className="font-mono text-xs text-coffee-tan uppercase tracking-widest block mb-2">
          [ 04. PROFESSIONAL TRAJECTORY ]
        </span>
        <h2 
          id="experience-heading"
          className="font-serif font-bold text-3xl sm:text-4xl text-coffee-cream leading-tight"
        >
          Career Experience
        </h2>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l border-coffee-medium/30 ml-4 md:ml-8 pl-6 md:pl-10 flex flex-col gap-18">
        {experiences.map((exp, idx) => (
          <motion.article
            key={exp.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Node Dot on Timeline */}
            <div className="absolute -left-7.5 md:left-[-46.5px] top-1.5 w-3 h-3 rounded-full bg-coffee-tan border-2 border-coffee-dark shadow-md group-hover:scale-125 transition-transform" />

            {/* Container Card */}
            <div className="">
              
              {/* Top Meta Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mb-1">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-white">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5" />
                      {exp.company}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-coffee-cream/60">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-coffee-dark/60  font-mono text-[9px] text-coffee-cream/80">
                  <Calendar className="w-3.5 h-3.5 text-coffee-tan" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Highlights List */}
              <ul className="flex flex-col gap-2.5 mt-4 pt-4 border-t border-coffee-medium/10">
                {exp.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-coffee-cream/80 font-light leading-relaxed">
                    <span className="text-coffee-tan mt-1.5 shrink-0 text-[8px]">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}