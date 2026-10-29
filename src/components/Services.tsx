"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    slug: "web-development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    price: "From \u00a3500",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    features: ["Responsive Design", "SEO Optimised", "Fast Loading", "Cross-browser"],
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    price: "From \u00a32,500",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
  },
  {
    title: "E-Commerce Solutions",
    slug: "e-commerce-solutions",
    description: "Complete online store solutions with payment integration and inventory management.",
    price: "From \u00a31,500",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Admin Dashboard"],
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description: "User-centred design solutions that create engaging and intuitive digital experiences.",
    price: "From \u00a3750",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
      </svg>
    ),
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Comprehensive digital marketing strategies to boost your online presence and growth.",
    price: "From \u00a3400/mo",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    features: ["SEO Optimisation", "Social Media", "Content Strategy", "Analytics"],
  },
  {
    title: "Maintenance & Support",
    slug: "maintenance-support",
    description: "Ongoing maintenance and technical support to keep your digital assets running smoothly.",
    price: "From \u00a3200/mo",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: ["24/7 Monitoring", "Security Updates", "Performance Tuning", "Bug Fixes"],
  },
];

/* Service comparison matrix */
const comparisonFeatures = [
  { name: "Responsive Design", web: true, mobile: true, ecom: true, uiux: true, marketing: false, maint: false },
  { name: "SEO Optimisation", web: true, mobile: false, ecom: true, uiux: false, marketing: true, maint: true },
  { name: "Analytics Dashboard", web: false, mobile: false, ecom: true, uiux: false, marketing: true, maint: true },
  { name: "Payment Integration", web: false, mobile: false, ecom: true, uiux: false, marketing: false, maint: false },
  { name: "User Research", web: false, mobile: false, ecom: false, uiux: true, marketing: true, maint: false },
  { name: "Content Strategy", web: false, mobile: false, ecom: false, uiux: false, marketing: true, maint: false },
  { name: "Performance Monitoring", web: false, mobile: false, ecom: false, uiux: false, marketing: false, maint: true },
  { name: "Security Updates", web: false, mobile: false, ecom: false, uiux: false, marketing: false, maint: true },
];

function AnimatedCard({ children, delay }: { children: React.ReactNode; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <AnimatedCard key={service.slug} delay={index * 100}>
              <Link href={`/services/${service.slug}`} className="block h-full group">
                <Card className="h-full rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-700 rounded-xl flex items-center justify-center text-white mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-gray-800 dark:text-gray-200 group-hover:text-gray-600 dark:group-hover:text-gray-100 transition-colors">
                      {service.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-1">{service.price}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2 text-sm">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      Learn more
                      <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedCard>
          ))}
        </div>

        {/* Comparison table */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">Service Comparison</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="text-left px-4 py-3 font-medium text-gray-700 dark:text-gray-300">Feature</th>
                  <th className="px-3 py-3 font-medium text-gray-700 dark:text-gray-300 text-center">Web</th>
                  <th className="px-3 py-3 font-medium text-gray-700 dark:text-gray-300 text-center">Mobile</th>
                  <th className="px-3 py-3 font-medium text-gray-700 dark:text-gray-300 text-center">E-Com</th>
                  <th className="px-3 py-3 font-medium text-gray-700 dark:text-gray-300 text-center">UI/UX</th>
                  <th className="px-3 py-3 font-medium text-gray-700 dark:text-gray-300 text-center">Marketing</th>
                  <th className="px-3 py-3 font-medium text-gray-700 dark:text-gray-300 text-center">Support</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((f, i) => (
                  <tr key={f.name} className={i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800/50"}>
                    <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{f.name}</td>
                    {[f.web, f.mobile, f.ecom, f.uiux, f.marketing, f.maint].map((v, j) => (
                      <td key={j} className="px-3 py-2.5 text-center">
                        {v ? (
                          <svg className="w-4 h-4 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        ) : (
                          <span className="text-gray-300 dark:text-gray-600">-</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss your project. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                Get Free Consultation
              </Link>
              <Link href="/portfolio" className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-200">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { services };
export default Services;
