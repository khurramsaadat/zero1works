import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { notFound } from "next/navigation";

const serviceData: Record<string, {
  title: string;
  description: string;
  metaDescription: string;
  price: string;
  overview: string;
  deliverables: string[];
  process: string[];
  techStack: string[];
  relatedProjects: { title: string; link: string }[];
}> = {
  "web-development": {
    title: "Web Development",
    description: "Custom websites and web applications built with Next.js, React, and modern tooling.",
    metaDescription: "Professional web development services in Manchester. Custom websites built with Next.js, React, and Tailwind CSS. From \u00a3500.",
    price: "From \u00a3500",
    overview: "We build responsive, fast-loading websites that rank well and convert visitors into customers. Every site is custom-built - no templates, no page builders - using the same stack that powers Fortune 500 companies.",
    deliverables: ["Responsive landing page or multi-page site", "SEO-optimised markup and meta tags", "Performance audit (90+ Lighthouse score)", "Cross-browser testing report", "Source code and deployment guide"],
    process: ["Discovery call and requirements gathering", "Wireframes and sitemap approval", "Design mockups in Figma", "Development with weekly progress demos", "Testing, launch, and 30-day support"],
    techStack: ["Next.js / React", "TypeScript", "Tailwind CSS", "Vercel / Netlify / Hostinger"],
    relatedProjects: [{ title: "Grind Me Fine", link: "https://grindme-fine.netlify.app/" }, { title: "Ibex Design", link: "https://ibexdesign.netlify.app/" }, { title: "Dubi Developers", link: "https://dubi-developers.netlify.app/" }],
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    metaDescription: "Mobile app development in Manchester. React Native and Flutter apps for iOS and Android. From \u00a32,500.",
    price: "From \u00a32,500",
    overview: "We deliver polished mobile experiences using React Native and Flutter, sharing code across platforms without sacrificing native feel. From MVP to App Store launch, we handle the full lifecycle.",
    deliverables: ["iOS and Android builds", "App Store / Google Play submission", "Push notification setup", "Analytics integration", "Post-launch monitoring (60 days)"],
    process: ["Product strategy workshop", "UI/UX design and prototyping", "Sprint-based development (2-week cycles)", "QA testing on real devices", "Store submission and launch"],
    techStack: ["React Native", "Flutter", "Firebase", "Expo"],
    relatedProjects: [{ title: "Track My Workout", link: "https://track-my-workout.netlify.app/" }, { title: "IronLog AI", link: "https://ironlog-ai-studio.netlify.app/" }],
  },
  "e-commerce-solutions": {
    title: "E-Commerce Solutions",
    description: "Complete online store solutions with payment integration and inventory management.",
    metaDescription: "E-commerce development in Manchester. Stripe payment integration, inventory management, and admin dashboards. From \u00a31,500.",
    price: "From \u00a31,500",
    overview: "We build conversion-optimised online stores with secure payment processing, real-time inventory management, and admin dashboards that make running your business effortless.",
    deliverables: ["Product catalogue with categories and filters", "Stripe / PayPal payment integration", "Order management dashboard", "Email notifications (order confirmation, shipping)", "Inventory tracking system"],
    process: ["Product catalogue planning", "Payment gateway setup and testing", "Storefront design and development", "Admin panel configuration", "Security audit and launch"],
    techStack: ["Next.js", "Stripe", "Supabase / PostgreSQL", "Tailwind CSS"],
    relatedProjects: [{ title: "SnapFormat", link: "https://snapformat.org/" }, { title: "Utility Tools", link: "https://utility-tools-free.netlify.app/" }],
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description: "User-centred design solutions that create engaging and intuitive digital experiences.",
    metaDescription: "UI/UX design services in Manchester. User research, wireframing, prototyping, and design systems. From \u00a3750.",
    price: "From \u00a3750",
    overview: "Great products start with great design. We conduct user research, create wireframes, build interactive prototypes, and deliver production-ready design systems that your developers can implement pixel-perfectly.",
    deliverables: ["User persona documents", "Wireframes (low and high fidelity)", "Interactive Figma prototype", "Design system with component library", "Developer handoff documentation"],
    process: ["Stakeholder interviews", "Competitive analysis", "Wireframing and information architecture", "Visual design and prototyping", "Usability testing and iteration"],
    techStack: ["Figma", "FigJam", "Maze (usability testing)", "Storybook"],
    relatedProjects: [{ title: "AppSphere", link: "https://app-sphere-app.netlify.app/" }, { title: "Rocket Web", link: "https://rocketweb-vscode-cline-glm53free.netlify.app/" }],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to boost your online presence and growth.",
    metaDescription: "Digital marketing services in Manchester. SEO, social media, content strategy, and analytics. From \u00a3400/month.",
    price: "From \u00a3400/mo",
    overview: "We combine technical SEO, content strategy, and data-driven social media campaigns to grow your organic traffic and convert more leads. Monthly reporting keeps you informed of every metric that matters.",
    deliverables: ["SEO audit and keyword strategy", "On-page optimisation (meta, schema, content)", "Monthly analytics report", "Social media content calendar", "Google Search Console / Analytics setup"],
    process: ["Initial SEO and traffic audit", "Keyword research and competitor analysis", "On-page and technical SEO implementation", "Content calendar creation", "Monthly performance review and adjustment"],
    techStack: ["Google Analytics 4", "Google Search Console", "Ahrefs / SEMrush", "Canva / Figma"],
    relatedProjects: [{ title: "StockPulse", link: "https://stock-pulse-app.netlify.app/" }, { title: "Discovery Monitor", link: "https://discovery-monitor.netlify.app/" }],
  },
  "maintenance-support": {
    title: "Maintenance & Support",
    description: "Ongoing maintenance and technical support to keep your digital assets running smoothly.",
    metaDescription: "Website maintenance and support in Manchester. Security updates, performance monitoring, and bug fixes. From \u00a3200/month.",
    price: "From \u00a3200/mo",
    overview: "Websites need regular upkeep. We handle security patches, performance monitoring, dependency updates, and bug fixes so you can focus on your business. Monthly plans with SLA-backed response times.",
    deliverables: ["Monthly dependency and security updates", "Uptime monitoring (99.9% SLA)", "Performance optimisation report", "Bug fix turnaround within 24 hours", "Priority email support"],
    process: ["Site health assessment", "Monitoring and alerting setup", "Scheduled maintenance windows", "Monthly status report", "Quarterly performance review"],
    techStack: ["Vercel / Netlify monitoring", "Lighthouse CI", "GitHub Actions", "Sentry error tracking"],
    relatedProjects: [{ title: "DFRE Unipoles", link: "https://dfre-report.netlify.app/" }, { title: "DDF Promo", link: "https://ddf-promo-schedule.netlify.app/" }],
  },
};

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = serviceData[params.slug];
  if (!service) return {};
  return {
    title: `${service.title} Services`,
    description: service.metaDescription,
    alternates: { canonical: `/services/${params.slug}` },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug];
  if (!service) notFound();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-20 pb-12 bg-gray-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Breadcrumbs />
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-2">{service.price}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{service.title}</h1>
              <p className="text-lg text-gray-400 max-w-2xl">{service.description}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Overview</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.overview}</p>
            </div>

            {/* Deliverables */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">What You Get</h2>
              <ul className="space-y-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Process</h2>
              <ol className="space-y-4">
                {service.process.map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                    <span className="text-gray-600 dark:text-gray-400 pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Tech stack */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((t) => (
                  <span key={t} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">{t}</span>
                ))}
              </div>
            </div>

            {/* Related projects */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Related Projects</h2>
              <div className="flex flex-wrap gap-3">
                {service.relatedProjects.map((p) => (
                  <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    {p.title} &rarr;
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gray-900 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Ready to start?</h3>
              <p className="text-gray-300 mb-6">Get a free consultation and quote for your {service.title.toLowerCase()} project.</p>
              <Link href="/#contact" className="inline-block bg-white text-gray-900 px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
