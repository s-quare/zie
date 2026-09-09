"use client";

import { useState } from "react";
import Link from "@/components/Link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Layers, Filter } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import ContactForm from "@/components/ui/ContactForm";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="w-full pt-18 sm:pt-22">
      {/* Page Header */}
      <header className="mb-12 px-4 sm:px-8">
        <h1 className="font-serif font-bold text-4xl sm:text-5xl text-white leading-tight mb-4">
          Product & Operations Work
        </h1>
        <p className="text-sm sm:text-base text-coffee-cream font-light max-w-2xl leading-relaxed">
          A comprehensive breakdown of live product operations, quality
          assurance testing, usability assessments, and cross-functional sprint
          management across mobile and web platforms.
        </p>
      </header>

      {/* Projects Gallery Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-8 mb-24"
      >
        {projects.map((project, idx) => (
          <motion.article
            key={project.id}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="bg-coffee-base/20 border border-coffee-medium/20 rounded-2xl overflow-hidden hover:border-coffee-medium/40 transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Media Wrapper */}
              <div
                tabIndex={-1}
                aria-hidden="true"
                className="block relative w-full aspect-16/10 overflow-hidden border border-coffee-medium/20 group-hover:scale-[1.01] transition-transform duration-500"
              >
                <SmartImage
                  src={project.images?.primary || "/images/placeholder.webp"}
                  alt={`${project.title} thumbnail`}
                />
                {project.listing?.badge && (
                  <div className="absolute top-3 left-3 backdrop-blur-md border px-3 py-1 rounded-full text-[10px] font-mono text-coffee-tan uppercase tracking-wider">
                    {project.listing.badge}
                  </div>
                )}
              </div>

              <div className='p-6 pb-0'>
                {/* Metadata */}
              <div className="flex items-center gap-2 font-mono text-xs text-white mb-2">
                <span>{project.client}</span>
                <span>•</span>
                <span className="text-coffee-tan">{project.role}</span>
              </div>

              {/* Title */}
              <h2 className="font-serif font-bold text-2xl text-white mb-3 group-hover:text-coffee-tan transition-colors">
                <Link href={`/projects/${project.slug}`}>{project.title}</Link>
              </h2>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-coffee-cream font-light leading-relaxed mb-6">
                {project.listing?.shortDescription || project.teaser?.headline}
              </p>

              {/* Deliverables Checklist */}
              {project.listing?.deliverables && (
                <div className="mb-6 pt-4 border-t border-coffee-medium/10">
                  <span className="block font-mono text-[10px] uppercase text-coffee-cream mb-2">
                    Key Deliverables
                  </span>
                  <ul className="flex flex-wrap gap-2">
                    {project.listing.deliverables.map((item, dIdx) => (
                      <li
                        key={dIdx}
                        className="px-2.5 py-1 bg-coffee-dark/60 text-coffee-cream/90 text-[11px] font-mono rounded-md border border-coffee-medium/20"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              </div>

              
            </div>

            {/* Bottom CTA Card Action */}
            <div className="p-4 border-t border-coffee-medium/10 flex items-center justify-between">
              <span className="font-mono text-[11px] text-coffee-cream/60">
                {project.timeline}
              </span>

              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-coffee-tan hover:text-coffee-cream transition-colors font-semibold group/link"
              >
                <span>View Details</span>
                <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Bottom Section Contact CTA */}
      <section className="overflow-hidden">
        <ContactForm
          title="Interested in collaborating on a product?"
          subtitle="Whether you need product operations support, multi-environment QA testing, or sprint coordination, drop a message below."
        />
      </section>
    </div>
  );
}
