"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  Kanban as Trello,
  CheckSquare,
  BookOpen,
  Layout,
  Sigma as Figma,
  BarChart3,
  FileSpreadsheet,
  MessageSquare,
  Users,
  Workflow,
  Kanban,
} from "lucide-react";

export default function AboutSection() {
  // Core tech & PM competencies mapped directly from data
  const coreCompetencies = [
    "Product Management & Ops",
    "Agile", "Cross-Functionality",
    "Jira", "Trello", "Confluence", 
    "Asana","Notion", "Miro", 
    "Figma",
    "APK Staging", "Quality Assessment", " IOS Testing",
    "User Research & Feedback Loops",
    "Google Analytics",
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full my-16 px-6 sm:p-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* LEFT COLUMN: Fully Rounded Headshot Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4 flex flex-col items-center justify-center text-center gap-4"
        >
          <div className="relative w-42 sm:w-54 aspect-square rounded-full overflow-hidden border-4 border-coffee-cream/80 shadow-xl bg-coffee-dark">
            <Image
              src="/images/zie-image2.webp"
              alt="Peace Chinagorom Chigozie"
              fill
              sizes="(max-width: 640px) 192px, 240px"
              className="object-contain object-top"
            />
          </div>

          <div className="flex flex-col items-center">
            <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              Peace Chinagorom Chigozie
            </span>
            <span className="text-xs text-coffee-cream font-light">
              Associate Product Manager & Operations
            </span>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Editorial Content, Philosophy, Stack Tags, & Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-8 flex flex-col gap-6"
        >
          <h2
            id="about-heading"
            className="font-serif font-bold text-2xl sm:text-4xl text-coffee-cream leading-tight"
          >
            Turning Product Strategy into Crisp, Dependable Execution.
          </h2>

          <p className="text-sm sm:text-base text-coffee-cream leading-relaxed font-light">
            With hands-on technical background in modern web engineering and
            product workflows, I sit right at the intersection of strategy and
            execution. Whether it’s driving sprint progress, conducting manual
            quality testing on mobile builds, or analyzing user feedback on the
            ground, my focus remains on keeping delivery momentum high and
            software quality flawless.
          </p>

          {/* Technical Alignment & Tooling Tags */}
          <div className="flex flex-col gap-2 pt-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-coffee-tan font-semibold">
              Core Capabilities & Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {coreCompetencies.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-coffee-dark/80 text-coffee-cream text-xs border border-coffee-medium/30 rounded-full font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <ToolStackMarquee />

          {/* Actions: Resume Download & Contact Link */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-coffee-medium/20 mt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-coffee-tan hover:bg-coffee-cream text-coffee-dark font-bold text-[10px] uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
            >
              <i className="bi bi-file-earmark-arrow-down-fill"></i>
              <span>My Resume</span>
            </a>

            <Link
              href="/contact"
              className="px-4 py-3 bg-transparent hover:bg-coffee-medium/10 text-coffee-cream border border-coffee-medium/40 font-semibold text-[10px] uppercase tracking-wider transition-all"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ToolStackMarquee() {
  // Tools & technology mapped directly from Peace's resume with matching Lucide icons
  const tools = [
    { name: "Jira", icon: Kanban },
    { name: "Trello", icon: Trello },
    { name: "Confluence", icon: Workflow },
    { name: "Asana", icon: CheckSquare },
    { name: "Notion", icon: BookOpen },
    { name: "Miro", icon: Layout },
    { name: "Figma", icon: Figma },
    { name: "Google Analytics", icon: BarChart3 },
    { name: "MS Excel / Sheets", icon: FileSpreadsheet },
    { name: "Slack", icon: MessageSquare },
    { name: "MS Teams", icon: Users },
  ];

  return (
    <div className="relative w-full overflow-hidden py-4 my-3 select-none">
      <div className="animate-marquee flex items-center gap-8">
        {/* Render twice for seamless loop */}
        {[...tools, ...tools].map((tool, index) => {
          const Icon = tool.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-black border border-coffee-medium/20 text-white shrink-0"
            >
              <Icon className="w-4 h-4 text-white shrink-0" />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          );
        })}
      </div>
      {["left-0 bg-linear-to-r", "right-0 bg-linear-to-l"].map(
        (position, index) => (
          <div
            key={index}
            className={`absolute top-0 bottom-0 ${position} from-coffee-dark to-transparent w-12 sm:w-15 h-full z-10 pointer-events-none`}
          />
        ),
      )}
    </div>
  );
}
