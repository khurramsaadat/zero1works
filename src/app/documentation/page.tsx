import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Technical documentation for Zero One Works projects. Stack guides, deployment processes, and client handover documentation.",
  alternates: { canonical: "/documentation" },
};

const docs = [
  { title: "Project Handover Guide", description: "What you receive when a project is delivered - source code, deployment credentials, domain setup, and ongoing maintenance instructions." },
  { title: "Our Tech Stack", description: "Next.js 16, React 19, TypeScript 6, Tailwind CSS 4 - why we chose each technology and how they work together for performance and maintainability." },
  { title: "Deployment Process", description: "How we deploy to Netlify, Vercel, and Hostinger. CI/CD pipelines, preview deployments, and production rollback procedures." },
  { title: "Design System Standards", description: "Our component library conventions - naming, spacing scale, colour tokens, and accessibility requirements that every project follows." },
  { title: "SEO Checklist", description: "The 25-point SEO checklist we run on every project before launch - from meta tags and structured data to Core Web Vitals optimisation." },
  { title: "Security Practices", description: "Content Security Policy, dependency auditing, input validation, and secure form handling - our security baseline for every client project." },
];

export default function DocumentationPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main-content">
        <section className="pt-20 pb-12 bg-gray-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Breadcrumbs />
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-4">Documentation</h1>
            <p className="text-gray-400 max-w-2xl">Technical docs, processes, and standards we follow on every project.</p>
          </div>
        </section>
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {docs.map((d) => (
                <article key={d.title} className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2">{d.title}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{d.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
