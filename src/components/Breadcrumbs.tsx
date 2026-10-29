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

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  const crumbs = segments.map((seg, i) => ({
    label: labelMap[seg] || seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    href: "/" + segments.slice(0, i + 1).join("/"),
    isLast: i === segments.length - 1,
  }));

  return (
    <nav aria-label="Breadcrumb" className="text-xs text-gray-500 dark:text-gray-400">
      <ol className="flex items-center gap-1.5 flex-wrap">
        <li>
          <Link href="/" className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
            Home
          </Link>
        </li>
        {crumbs.map((crumb) => (
          <li key={crumb.href} className="flex items-center gap-1.5">
            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {crumb.isLast ? (
              <span className="text-gray-900 dark:text-gray-100 font-medium" aria-current="page">
                {crumb.label}
              </span>
            ) : (
              <Link href={crumb.href} className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
