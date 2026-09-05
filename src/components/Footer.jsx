import Link from "next/link";
import { CONTACT_INFO } from "@/data/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const contactItems = Object.values(CONTACT_INFO);

  return (
    <footer role="contentinfo" className="w-full border-t border-coffee-medium/20 bg-coffee-base/40 py-8 sm:py-10 mt-auto">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-6">
        
        {/* Top Row: Brand & Dynamic Contact Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-coffee-medium/15">
          <div>
            <p className="font-serif font-bold text-base text-coffee-cream tracking-tight">PEACE CHIGOZIE</p>
            <p className="text-xs text-coffee-medium mt-0.5">Associate Product Manager & Operations Specialist</p>
          </div>

          {/* Icon Navigation mapped from CONTACT_INFO */}
          <div className="flex items-center gap-4 text-coffee-cream text-lg">
            {contactItems.map((item) => (
              <a
                key={item.key}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : "_self"}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                title={item.name}
                aria-label={item.name}
                className="hover:text-coffee-tan transition-colors"
              >
                <i className={`bi ${item.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Row: Legal & Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-coffee-medium">
          <p>© {currentYear} Peace Chinagorom Chigozie. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-coffee-tan transition-colors">Home</Link>
            <Link href="/projects" className="hover:text-coffee-tan transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-coffee-tan transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}