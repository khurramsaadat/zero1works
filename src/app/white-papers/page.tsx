import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "White Papers",
  description: "Technical white papers and guides from Zero One Works on web development, performance, and modern architecture.",
  alternates: { canonical: "/white-papers" },
};

const papers = [
  { title: "Static Export vs SSR: Choosing the Right Next.js Rendering Strategy", summary: "A practical comparison of static export, SSR, and ISR for business websites. When to use each, with real performance benchmarks from our portfolio projects.", readTime: "8 min read" },
  { title: "Performance Budget Blueprint for Agency Websites", summary: "How we achieve 90+ Lighthouse scores on every project. Covers image optimisation, font loading, code splitting, and Tailwind CSS purging strategies.", readTime: "6 min read" },
  { title: "The True Cost of Template Websites", summary: "Why custom-built sites outperform WordPress themes and page builders in the long run. TCO analysis including maintenance, security, and SEO.", readTime: "5 min read" },
  { title: "Accessibility as a Competitive Advantage", summary: "Meeting WCAG 2.1 AA is not just compliance - it is a business advantage. How accessible design improves conversion rates and search rankings.", readTime: "7 min read" },
  { title: "Client-Side Security for Static Sites", summary: "Content Security Policy, input sanitisation, and secure form handling without a traditional backend. Techniques we use across 59 production sites.", readTime: "10 min read" },
];

export default function WhitePapersPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main-content">
        <section className="pt-20 pb-12 bg-gray-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Breadcrumbs variant="hero" />
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-4">White Papers</h1>
            <p className="text-gray-400 max-w-2xl">Technical insights and guides from our engineering team.</p>
          </div>
        </section>
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {papers.map((p) => (
              <article key={p.title} className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400">{p.readTime}</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{p.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">{p.summary}</p>
              </article>
            ))}
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center pt-4">
              New papers published monthly. Contact us for early access.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
