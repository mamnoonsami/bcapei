"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Directory", href: "/directory" },
  { name: "Events", href: "/events" },
  { name: "About", href: "/about" },
  { name: "Resources", href: "/resources" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        
        // Hide when scrolling down, show when scrolling up (Standard convention)
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling DOWN
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling UP
          setIsVisible(true);
        }

        // Always show if at the very top
        if (currentScrollY <= 50) {
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav 
        className={`animate-drop-in fixed left-0 w-full border-b border-white/40 dark:border-primary/20 z-50 bg-white/90 dark:bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,106,78,0.12)] flex justify-between items-center px-4 md:px-8 lg:px-12 h-16 md:h-20 transition-all duration-500 ease-in-out ${
          isVisible ? "top-0" : "-top-32"
        }`}
      >
        <div className="flex items-center gap-md">
          <Link href="/">
            <span className="text-lg md:text-xl font-bold text-primary dark:text-primary font-serif tracking-tight">
              PEI Bangladeshi Community
            </span>
          </Link>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-primary/80 dark:text-primary/80 font-medium font-serif tracking-tight hover:text-primary dark:hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-sm">
          <button
            aria-label="Search"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/10 dark:hover:bg-primary/10 transition-colors scale-95 active:scale-90 text-primary dark:text-primary"
          >
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="bg-primary dark:bg-primary text-white dark:text-white font-label-sm text-label-sm px-6 py-3 rounded-full shadow-md hover:bg-primary/90 dark:hover:bg-primary/90 transition-colors scale-95 active:scale-90">
            Join Us
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            aria-label="Search"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/10 text-primary"
          >
            <span className="material-symbols-outlined">search</span>
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary transition-colors"
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 dark:bg-emerald-950/95 backdrop-blur-md pt-28 px-6 pb-6 flex flex-col md:hidden">
          <div className="flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl text-primary dark:text-primary font-bold font-serif tracking-tight hover:text-primary/80 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="w-full h-px bg-primary/20 my-4" />
            <button className="w-full bg-primary text-white font-label-sm text-label-sm px-6 py-4 rounded-full shadow-md hover:bg-primary/90 transition-colors">
              Join Us
            </button>
          </div>
        </div>
      )}
    </>
  );
}
