"use client";

import { useState } from "react";
import Link from "@/components/Link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { LiquidGlass } from "@/components/LiquidGlass";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const handleLinkClick = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", href: "/", icon: "bi-house" },
    { name: "Projects", href: "/projects", icon: "bi-grid" },
    { name: "Contact", href: "/contact", icon: "bi-person-lines-fill" },
  ];

  return (
    <header role="banner" className="fixed top-3 left-1/2 -translate-x-1/2 w-full max-w-350 px-4 sm:px-8 z-50 pointer-events-none">
      <div className="flex items-start justify-between w-full">
        
        {/* LEFT SIDE: Brand Name Link */}
        <div className="pointer-events-auto pt-1.5">
          <span 
            href="/" 
            className="relative font-serif font-semibold text-sm sm:text-base tracking-wider text-white hover:text-coffee-tan transition-colors"
          >
            PEACE CHIGOZIE
          </span>
        </div>

        {/* RIGHT SIDE: Interactive Floating Glass Pill inside semantic <nav> */}
        <nav aria-label="Main Navigation" className="pointer-events-auto">
          <div className={` ${isOpen ? 'rounded-lg' : 'rounded-3xl'} relative  overflow-hidden w-auto transition-all duration-400`}>

            <LiquidGlass />
            
            {/* Always-Visible Trigger Row */}
            <div className="relative flex items-center gap-3 px-3.5 h-10">
              {/* Quick Link Toggle (Home vs Contact) */}
              <AnimatePresence mode="wait">
                {pathname !== "/" ? (
                  <motion.div
                    key="home-link"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Link
                      href="/"
                      onClick={handleLinkClick}
                      className="flex items-center gap-1.5 text-xs tracking-wider text-coffee-cream hover:text-coffee-tan transition-colors"
                    >
                      <i className="bi bi-house-fill text-xs"></i>
                      <span>Home</span>
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key="contact-link"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Link
                      href="/contact"
                      onClick={handleLinkClick}
                      className="flex items-center gap-1.5 text-xs tracking-wider text-coffee-cream hover:text-coffee-tan transition-colors"
                    >
                      <i className="bi bi-person-lines-fill text-xs"></i>
                      <span>Contact</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Separator Line */}
              <div className="h-4 w-px bg-white"></div>

              {/* Menu Trigger */}
              <button
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                className="flex items-center gap-1 text-coffee-cream hover:text-coffee-tan transition-colors focus:outline-none cursor-pointer"
              >
                <i className={`bi bi-list text-lg`}></i>
                <motion.i 
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="bi bi-caret-down-fill text-[9px]"
                ></motion.i>
              </button>
            </div>

            {/* Accordion Menu Links */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  key="menu-dropdown"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="relative overflow-hidden border-t border-white/70"
                >
                  <ul className="flex flex-col list-none m-0">
                    {navLinks.map((link, index) => {
                      const isActive = pathname === link.href;
                      return (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={handleLinkClick}
                            className={`
                              flex items-center gap-2 px-3 py-1.5 ${index === navLinks.length - 1 && 'pb-2'} text-xs text-coffee-cream tracking-wider transition-all
                              ${isActive ? " bg-coffee-medium/30" : "hover:text-coffee-cream hover:bg-white/15"}
                            `}
                          >
                            <i className={`bi ${link.icon} text-xs sm:text-sm`}></i>
                            <span>{link.name}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </nav>
      </div>
    </header>
  );
}