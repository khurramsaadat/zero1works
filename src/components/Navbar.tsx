"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ];

  /* Smart navbar - hide on scroll down, show on scroll up */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 100) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }
      if (currentScrollY > lastScrollY && isVisible) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY && !isVisible) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, lastScrollY]);

  /* Smooth scroll for anchor links */
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-md">
            <Image
              src="/images/ZeroOne logo.png"
              alt="Zero One Works Ltd - Home"
              width={200}
              height={64}
              className="h-16 w-auto invert dark:invert-0"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  pathname === link.href + "/" ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-200 relative group rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${
                      isActive
                        ? "text-gray-900 dark:text-gray-100"
                        : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                        isActive
                          ? "w-full bg-gray-900 dark:bg-gray-100"
                          : "w-0 bg-gray-900 dark:bg-gray-100 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex lg:items-center">
            <Link href="#contact">
              <Button className="btn-hover-effect btn-primary-hover focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? "Close main menu" : "Open main menu"}</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with backdrop blur */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                pathname === link.href + "/" ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 text-base font-medium transition-all duration-200 relative group rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 ${
                    isActive
                      ? "text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="px-3 py-2">
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full btn-hover-effect btn-primary-hover">Get Started</Button>
              </Link>
            </div>
            {/* Copyright in mobile menu */}
            <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-3 px-3">
              <p className="text-xs text-gray-400 text-center">
                &copy; {new Date().getFullYear()} Zero One Works Ltd by Khurram
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
