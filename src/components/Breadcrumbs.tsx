"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const labelMap: Record<string, string> = {
  portfolio: "Portfolio",
  services: "Services",
  process: "Our Process",
  about: "About Us",
  blog: "Blog",
  careers: "Careers",
  "privacy-policy": "Privacy Policy",
  "terms-of-service": "Terms of Service",
  "cookie-policy": "Cookie Policy",
  "sitemap-page": "Sitemap",
  "case-studies": "Case Studies",
  "white-papers": "White Papers",
  documentation: "Documentation",
  "api-reference": "API Reference",
  "web-development": "Web Development",
  "mobile-app-development": "Mobile App Development",
  "e-commerce-solutions": "E-Commerce Solutions",
  "ui-ux-design": "UI/UX Design",
  "digital-marketing": "Digital Marketing",
  "maintenance-support": "Maintenance & Support",
};

interface BreadcrumbsProps {
  /** Use "hero" when placed on dark hero backgrounds for white text */
  variant?: "default" | "hero";
  /** Override label for the last breadcrumb segment */
  lastLabel?: string;
}

export default function Breadcrumbs({ variant = "default", lastLabel }: BreadcrumbsProps) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  const crumbs = segments.map((seg, i) => ({
    label: i === segments.length - 1 && lastLabel
      ? lastLabel
      : labelMap[seg] || seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    href: "/" + segments.slice(0, i + 1).join("/"),
    isLast: i === segments.length - 1,
  }));

  const isHero = variant === "hero";

  /* Colour tokens based on variant */
  const linkColor = isHero
    ? "text-gray-300 hover:text-white"
    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200";
  const activeColor = isHero
    ? "text-white font-medium"
    : "text-gray-900 dark:text-gray-100 font-medium";
  const chevronColor = isHero ? "text-gray-400" : "text-gray-400";

  return (
    <nav aria-label="Breadcrumb" className="text-xs">
      <ol className="flex items-center gap-1.5 flex-wrap">
        <li>
          <Link href="/" className={`${linkColor} transition-colors`}>
            Home
          </Link>
        </li>
        {crumbs.map((crumb) => (
          <li key={crumb.href} className="flex items-center gap-1.5">
            <svg className={`w-3 h-3 ${chevronColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {crumb.isLast ? (
              <span className={activeColor} aria-current="page">
                {crumb.label}
              </span>
            ) : (
              <Link href={crumb.href} className={`${linkColor} transition-colors`}>
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
