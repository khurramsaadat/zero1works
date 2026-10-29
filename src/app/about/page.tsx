import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import CounterAnimation from "@/components/CounterAnimation";
import Link from "next/link";
import { heroImages } from "@/components/illustrations/HeroIllustrations";

export const metadata: Metadata = {
  title: "About Us",
  description: "Zero One Works Ltd is a Manchester-based web design agency with 59 live projects across 18 industries. Established in 2024.",
  alternates: { canonical: "/about" },
};

export default function About() {
  const stats = [
    { number: "59", label: "Live Projects" },
    { number: "18", label: "Industries Served" },
    { number: "2+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-16 pb-12 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.1),transparent)]" />
        <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none" style={{ backgroundImage: `url('${heroImages.about}')` }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <Breadcrumbs variant="hero" />
          <div className="text-center mt-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              A trusted web design and development company based in Manchester, UK
            </p>
          </div>
        </div>
      </section>

      {/* Company description */}
      <section id="main-content" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">
              Established in 2024, Built for Trust
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                Zero One Works Ltd is a web design company based in Manchester with a team of designers and developers
                who are experts in their respective fields. We have been providing web design and development services to clients
                across the globe since 2024, with 59 live projects spanning 18 industries.
              </p>
              <p>
                Our services are tailored to meet the specific needs of each client. We work closely with businesses to understand
                their requirements and deliver solutions that drive measurable results. From startups to established enterprises,
                our team is committed to exceeding expectations.
              </p>
              <p>
                We specialise in responsive web design, e-commerce development, mobile app development, and digital marketing.
                Our developers are proficient in Next.js, React, TypeScript, Tailwind CSS, and modern deployment platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Web Development Experts</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Scalable, secure, and high-performance websites using Next.js, React, TypeScript, and Tailwind CSS.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Fast Turnaround</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Streamlined development process ensures quick delivery without compromising on quality or functionality.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">59 Live Projects</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every project we build ships live. Browse our portfolio to see real work across 18 industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <CounterAnimation value={stat.number} className="text-3xl md:text-4xl font-bold gradient-text mb-2" />
                <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-12 text-center">Vision and Mission</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                To be the leading web development company that empowers businesses worldwide with innovative digital solutions,
                helping them achieve sustainable growth in the digital landscape.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                To deliver exceptional web development services that combine cutting-edge technology with creative design,
                providing our clients with powerful digital tools that drive their business forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 text-center">Our Values</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center mb-16">
            These core values guide everything we do and shape how we work with our clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Innovation", desc: "We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage." },
              { title: "Quality", desc: "We maintain the highest standards in everything we do, from code quality to customer service and project delivery." },
              { title: "Collaboration", desc: "We work closely with our clients as partners, ensuring their vision is realised through transparent communication." },
              { title: "Growth", desc: "We are committed to continuous learning and improvement, both for ourselves and for the businesses we serve." },
            ].map((v) => (
              <Card key={v.title} className="rounded-xl text-center">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">{v.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 text-center">Our Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center mb-16">
            A dedicated group of professionals committed to delivering exceptional digital solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { role: "Project Leadership", desc: "Strategic project oversight ensuring every deliverable aligns with your business objectives and timeline." },
              { role: "Frontend Development", desc: "Pixel-perfect, responsive interfaces built with React, Next.js, and modern CSS frameworks." },
              { role: "Backend Engineering", desc: "Robust server architectures, APIs, and database solutions that scale with your growth." },
              { role: "UI/UX Design", desc: "User-centred design that balances aesthetics with usability, backed by research and testing." },
            ].map((m) => (
              <Card key={m.role} className="rounded-xl text-center">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">{m.role}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{m.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Work Together?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            We would love to hear about your project and discuss how we can help you achieve your digital goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Get Started Today
            </Link>
            <Link href="/portfolio" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
