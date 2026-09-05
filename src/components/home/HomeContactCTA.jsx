"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/data/constants";
import ContactForm from "@/components/ui/ContactForm";

const contactCards = [
  {
    label: "Email",
    value: CONTACT_INFO.email.value,
    link: CONTACT_INFO.email.link,
    icon: Mail,
    isLink: true,
  },
  {
    label: "Phone / WhatsApp",
    value: CONTACT_INFO.whatsapp.value,
    link: CONTACT_INFO.whatsapp.link,
    icon: Phone,
    isLink: true,
  },
  {
    label: "Primary Base",
    value: "Lagos, Nigeria (Open to Remote)",
    link: null,
    icon: MapPin,
    isLink: false,
  },
];

export default function HomeContactCTA() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="w-full my-20 px-4 sm:px-8"
    >
      {/* Section Header */}
      <div className="mb-8 ">
        <h2
          id="contact-heading"
          className="font-serif font-bold text-3xl sm:text-4xl text-coffee-cream leading-tight"
        >
          {`Let's`} Work Together
        </h2>
      </div>

      {/* Direct Contact Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {contactCards.map((card, idx) => {
          const Icon = card.icon;
          const content = (
            <>
              <div className="p-2 bg-coffee-base rounded-lg text-coffee-tan group-hover:text-coffee-cream transition-colors shrink-0">
                <Icon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="block font-mono text-[10px] uppercase text-coffee-cream/50">
                  {card.label}
                </span>
                <span className="font-mono text-xs text-white group-hover:text-coffee-tan transition-colors truncate block">
                  {card.value}
                </span>
              </div>
            </>
          );

          const className =
            "flex items-center gap-3 p-4 bg-coffee-dark/40 border border-coffee-medium/20 rounded-xl hover:border-coffee-medium/40 transition-all group";

          return card.isLink ? (
            <a
              key={idx}
              href={card.link}
              target={card.link.startsWith("http") ? "_blank" : undefined}
              rel={
                card.link.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className={className}
            >
              {content}
            </a>
          ) : (
            <div key={idx} className={className}>
              {content}
            </div>
          );
        })}
      </div>

      {/* Full-Width Reusable Contact Form */}
      <ContactForm
        title="Send a Direct Message"
        subtitle="Currently available for full-time Associate Product Manager roles, contract product operations, and cross-functional team coordination."
      />
    </section>
  );
}
