import Link from "@/components/Link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Calendar,
  Wrench,
} from "lucide-react";
import AltImage from "./AltImage";
import ContactForm from "@/components/ui/ContactForm";
import { projects } from "@/data/projects";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  // Find project by slug or ID
  const project = projects.find((p) => p.slug === slug || p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested case study or project could not be found.",
    };
  }

  // Fallback Logic: project.image -> project.image2 -> general og-image.webp
  const ogImage =
    project.images.primary ||
    project.images.secondary ||
    "/images/og-image.webp";

  const title = `${project.title}: ${project.subtitle}`;
  const description =
    project?.listing?.shortDescription ||
    `Explore the project management roadmap, scope execution, and impact metrics for ${project.title}.`;

  return {
    title,
    description,
    openGraph: {
      title: `${project.title}`,
      description,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${project.title} - Peace Chigozie Case Study`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Peace Chigozie`,
      description,
      images: [ogImage],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <div className="w-full bg-black/50 text-white min-h-screen">
      {/* HERO SECTION - BLEEDS TO VERY TOP EDGES */}
      <header className="relative w-full min-h-[85vh] flex flex-col justify-end overflow-hidden">
        {/* Hero Background Image (Spans 2/3 width on Large Screens, Bleeds Right Edge) */}
        <div className="absolute top-0 right-0 w-full h-full z-0 blur-xs">
          <AltImage
            src={project.images?.secondary || "/images/placeholder.webp"}
            alt={`${project.title} hero display`}
            priority
          />

          <div className="absolute inset-0 w-full h-full bg-linear-to-t from-black via-black/70 to-transparent" />

        </div>

        {/* Hero Content Layer */}
        <div className="relative z-10 w-full px-6 sm:px-12 pb-16 pt-32">
          {/* Navigation Back Link */}
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-coffee-cream hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 text-coffee-tan group-hover:-translate-x-1 transition-transform" />
              <span>Back to Index</span>
            </Link>
          </div>

          <div className="max-w-2xl">
            {/* Category Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs text-coffee-tan uppercase tracking-widest">
                [ {project.teaser?.category || "CASE STUDY"} ]
              </span>
              {project.platforms && (
                <span className="font-mono text-xs text-coffee-cream">
                  {project.platforms.join(" • ")}
                </span>
              )}
            </div>

            {/* Main Title */}
            <h1 className="font-serif font-bold text-4xl sm:text-6xl text-white leading-tight mb-6">
              {project.title}
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-lg sm:text-xl text-coffee-cream font-light leading-relaxed mb-8">
              {project.subtitle}
            </p>

            {/* Quick Metadata Line */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-6 border-t border-white/10 font-mono text-xs text-coffee-cream">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-coffee-tan" />
                <span className="text-white">{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-coffee-tan" />
                <span className="text-white">{project.role}</span>
              </div>
              {project.timeline && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-coffee-tan" />
                  <span className="text-white">{project.timeline}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* MAIN STORY CONTENT */}
      <main className="w-full px-6 sm:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column (8 cols): Narrative-driven Story */}
          <div className="lg:col-span-8 space-y-16">
            {/* Executive Narrative / Overview */}
            {caseStudy?.executiveSummary && (
              <section className="space-y-4">
                <span className="font-mono text-xs text-coffee-tan uppercase tracking-widest block">
                  Overview
                </span>
                <p className="text-lg sm:text-xl text-coffee-cream font-light leading-relaxed">
                  {caseStudy.executiveSummary}
                </p>
              </section>
            )}

            {/* The Challenge */}
            {caseStudy?.challenge && (
              <section className="space-y-4">
                <span className="font-mono text-xs text-coffee-tan uppercase tracking-widest block">
                  The Problem
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                  The Operational Challenge
                </h2>
                <p className="text-base sm:text-lg text-coffee-cream font-light leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </section>
            )}

            {/* Secondary Visual Visual Spot */}
            {project.images?.secondary && (
              <div className="relative w-full aspect-video overflow-hidden my-8">
                <AltImage
                  src={project.images.secondary}
                  alt={`${project.title} secondary narrative visual`}
                />
              </div>
            )}

            {/* Execution / Key Responsibilities */}
            {caseStudy?.keyResponsibilities && (
              <section className="space-y-8">
                <div>
                  <span className="font-mono text-xs text-coffee-tan uppercase tracking-widest block mb-2">
                    Execution
                  </span>
                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                    Strategy & Implementation
                  </h2>
                </div>

                <div className="space-y-10">
                  {caseStudy.keyResponsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="space-y-2">
                      <h3 className="font-serif font-bold text-xl text-white flex items-center gap-3">
                        <span className="font-mono text-xs text-coffee-tan">
                          [{String(rIdx + 1).padStart(2, "0")}]
                        </span>
                        {resp.title}
                      </h3>
                      <p className="text-base text-coffee-cream font-light leading-relaxed pl-8">
                        {resp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Results & Impact */}
            {caseStudy?.resultsAndImpact && (
              <section className="space-y-6 pt-6">
                <div>
                  <span className="font-mono text-xs text-coffee-tan uppercase tracking-widest block mb-2">
                    Impact
                  </span>
                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                    Key Outcomes & Metrics
                  </h2>
                </div>

                <ul className="space-y-4">
                  {caseStudy.resultsAndImpact.map((item, resIdx) => (
                    <li key={resIdx} className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-coffee-tan shrink-0 mt-1" />
                      <span className="text-base sm:text-lg text-white font-light leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Right Column (4 cols): Sticky Tool stack Sidebar */}
          <aside className="lg:col-span-4">
            {caseStudy?.toolsUsed && (
              <div className="sticky top-28 space-y-4 p-6 bg-white/5 rounded-2xl">
                <div className="flex items-center gap-2 text-white font-mono text-xs font-bold uppercase tracking-wider pb-3 border-b border-white/10">
                  <Wrench className="w-4 h-4 text-coffee-tan" />
                  <span>Tool stack & Environment</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {caseStudy.toolsUsed.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1.5 bg-white/5 text-coffee-cream text-xs font-mono rounded-lg"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </main>

      {/* CONTACT CTA AT BOTTOM */}
      <section className="w-full px-6 sm:px-12 py-20 border-t border-white/10">
        <ContactForm
          title={`Inquire about ${project.title}`}
          subtitle="Interested in discussing the strategy behind this project or exploring a similar product initiative?"
        />
      </section>
    </div>
  );
}
