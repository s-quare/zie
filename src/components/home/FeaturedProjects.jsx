"use client";

import Link from "@/components/Link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Layers } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import { projects } from "@/data/projects";
import { LiquidGlass } from "@/components/LiquidGlass";

export default function FeaturedProjects() {
  // Select the top 2 featured projects for the homepage teaser
  const featuredTeasers = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <section
      aria-labelledby="featured-projects-heading"
      className="w-full my-20 px-4 sm:px-8"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-6">
        <h2
          id="featured-projects-heading"
          className="font-mono font-bold text-3xl sm:text-4xl text-coffee-cream leading-tight tracking-wide"
        >
          Projects and collaborations
        </h2>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-coffee-tan hover:text-coffee-cream transition-colors group"
        >
          <span>Explore All Projects</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <p className="mb-12 max-w-3xl">
        Here are some of the products, platforms, and features I’ve contributed to, to move
        from the planning board to production. These case studies highlight
        hands-on execution, rigorous quality assurance, and real user impact.
      </p>

      {/* Featured Teasers Grid/Stack */}
      <div className="flex flex-col gap-12 lg:gap-16">
        {featuredTeasers.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`grid grid-cols-1 lg:grid-cols-12  items-center bg-coffee-base/20 border border-coffee-medium/20 rounded-2xl overflow-hidden hover:border-coffee-medium/40 transition-all group`}
            >
              {/* Media Column (Alternates side on desktop) */}
              <div
                className={`lg:col-span-7 w-full lg:h-full ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div
                  tabIndex={-1}
                  aria-hidden="true"
                  className="block relative w-full aspect-16/10 sm:aspect-video lg:aspect-auto lg:h-full overflow-hidden border border-coffee-medium/20"
                >
                  <SmartImage
                    src={project.images.primary}
                    alt={`${project.title} case study thumbnail`}
                  />
                  {/* Glassmorphic Badge Overlay */}
                  <div className="absolute top-4 left-4 bg-coffee-dark/80 backdrop-blur-md border border-coffee-medium/30 px-3 py-1 rounded-full text-[10px] font-mono text-white uppercase tracking-wider">
                    <LiquidGlass />
                    <span className="relative">{project.teaser.category}</span>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div
                className={`lg:col-span-5 flex flex-col justify-between gap-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="p-5 lg:p-8">
                  {/* Client & Role Meta */}
                  <div className="flex items-center gap-2 font-mono text-xs text-coffee-cream mb-2">
                    <span>{project.client}</span>
                    <span>•</span>
                    <span className="text-coffee-tan">{project.role}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-3 group-hover:text-coffee-tan transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Headline Teaser */}
                  <p className="text-sm text-coffee-cream leading-relaxed font-light mb-6">
                    {project.teaser.headline}
                  </p>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-2 gap-4 bg-coffee-dark/50 border border-coffee-medium/20 px-2 py-3.5 rounded-lg mb-6">
                    {project.teaser.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className={`text-center ${mIdx % 2 === 0 && "border-r border-coffee-medium/20"} pr-2`}
                      >
                        <span className="block font-sans text-[10px] uppercase tracking-wider text-coffee-cream">
                          {metric.label}
                        </span>
                        <span className="font-mono text-[10px] text-coffee-tan mt-0.5 block">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.teaser.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 bg-coffee-base/60 text-coffee-cream/80 text-[11px] font-mono rounded-md border border-coffee-medium/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="w-fit flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-coffee-cream hover:text-coffee-tan transition-colors font-semibold group/link"
                  >
                    <span>View Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4 text-coffee-tan group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-400" />
                  </Link>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Bottom CTA Banner */}
      <div className="mt-12 text-center pb-8 border-b border-coffee-medium/10">
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 px-6 py-3 bg-coffee-dark hover:bg-coffee-base border border-coffee-medium/30 text-coffee-cream font-mono text-xs uppercase tracking-wider rounded-lg transition-all shadow-md group"
        >
          <Layers className="w-4 h-4 text-coffee-tan" />
          <span>
            View All Product Works{" "}
            <span className="hidden sm:inline"> & Case Studies</span>
          </span>
          <ArrowRight className="w-4 h-4 text-coffee-tan group-hover:translate-x-1 transition-transform duration-500" />
        </Link>
      </div>
    </section>
  );
}
