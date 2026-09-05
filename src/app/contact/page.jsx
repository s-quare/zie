import {
  Mail,
  MessageCircle,
  BriefcaseBusiness as Linkedin,
  Camera as Instagram,
  Globe,
  Clock,
} from "lucide-react";
import { CONTACT_INFO } from "@/data/constants";
import ContactForm from "@/components/ui/ContactForm";

const iconMap = {
  email: Mail,
  whatsapp: MessageCircle,
  linkedin: Linkedin,
  instagram: Instagram,
};

export default function ContactPage() {
  return (
    <div className="w-full bg-coffee-dark text-white min-h-screen">
      {/* HEADER SECTION */}
      <header className="relative w-full px-6 sm:px-12 pt-24 pb-12">
        <div className="max-w-3xl space-y-4">
          <h1 className="font-serif font-bold text-4xl sm:text-6xl text-white leading-tight">
            Let&apos;s build clarity and drive delivery together.
          </h1>

          <p className="font-sans text-lg sm:text-xl text-coffee-cream font-light leading-relaxed pt-2">
            Whether you need strategic product leadership, end-to-end execution
            on complex technical initiatives, or a dedicated Project Manager to
            align cross-functional teams, {`I'm`} here to make it happen.
          </p>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="w-full px-6 sm:px-12 py-8 pb-20">
        <div className="">
          <div className="space-y-12">
            {/* Direct Channels & Reach */}
            <div className="space-y-6">
              <span className="font-mono text-xs text-coffee-tan uppercase tracking-widest block">
                Get In Touch
              </span>

              <div className="font-mono text-xs grid grid-cols-2 gap-6">
                {/* Dynamic Contact Items from data/contacts.js */}
                {Object.values(CONTACT_INFO).map((item) => {
                  const IconComponent = iconMap[item.key] || Globe;

                  return (
                    <div key={item.key} className="space-y-1">
                      <span className="text-coffee-cream uppercase tracking-wider block">
                        {item.name}
                      </span>
                      <a
                        href={item.link}
                        target={
                          item.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-white text-sm font-semibold hover:text-coffee-tan transition-colors inline-flex items-center gap-2 w-full"
                      >
                        <IconComponent className="w-4 h-4 text-coffee-tan shrink-0" />
                        <span className="truncate">{item.value}</span>
                      </a>
                    </div>
                  );
                })}

                {/* Availability & Scope */}
                <div className="space-y-1">
                  <span className="text-coffee-cream uppercase tracking-wider block">
                    Availability & Scope
                  </span>
                  <div className="text-white text-sm font-semibold inline-flex items-start gap-2">
                    <Globe className="w-4 h-4 text-coffee-tan shrink-0" />
                    <span>Full-Time PM / Contract & Consulting</span>
                  </div>
                </div>

                {/* Expected Response */}
                <div className="space-y-1">
                  <span className="text-coffee-cream uppercase tracking-wider block">
                    Expected Response
                  </span>
                  <div className="text-white text-sm font-semibold inline-flex items-start gap-2">
                    <Clock className="w-4 h-4 text-coffee-tan shrink-0" />
                    <span>Within 24 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story / Intro Paragraphs */}
          <div className="space-y-3 mt-18">
            <span className="font-mono text-xs text-coffee-tan uppercase tracking-widest block">
              My Strategic Approach
            </span>

            <div className="space-y-4 text-base text-coffee-cream font-light leading-relaxed max-w-200">
              <p>
                I partner with leadership, engineering teams, and stakeholders
                to transform ambitious visions into structured, actionable
                roadmaps. From streamlining agile workflows and unblocking
                cross-functional dependencies to driving product launches on
                time and within scope, my focus is always on sustainable
                momentum, clear communication, and measurable outcomes.
              </p>
            </div>
          </div>

          {/* Right Column (7 cols): Contact Form Component */}
          <div className="pt-24">
            <ContactForm
              title="Initiate Contact"
              subtitle="Send a direct message regarding open PM roles, project management consulting, or upcoming product initiatives."
            />
          </div>
        </div>
      </main>
    </div>
  );
}
