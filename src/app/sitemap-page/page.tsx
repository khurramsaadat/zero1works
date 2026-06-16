import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const SitemapPage = () => {
  const sitemapSections = [
    {
      title: "Main Pages",
      description: "Core pages of the Zero One Works website",
      links: [
        { name: "Home", href: "/", description: "Welcome page and company overview" },
        { name: "Portfolio", href: "/portfolio", description: "Our completed projects and case studies" },
        { name: "Services", href: "/services", description: "Web development, design, and digital services" },
        { name: "Process", href: "/process", description: "How we work with clients from start to finish" },
        { name: "Blog", href: "/blog", description: "Insights, tips, and industry news" },
        { name: "About", href: "/about", description: "Learn about our team, values, and mission" }
      ]
    },
    {
      title: "Legal",
      description: "Policies and legal information",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy", description: "How we collect and protect your data" },
        { name: "Terms of Service", href: "/terms-of-service", description: "Terms governing use of our services" },
        { name: "Cookie Policy", href: "/cookie-policy", description: "Information about cookies on our site" }
      ]
    },
    {
      title: "Company",
      description: "Careers and site navigation",
      links: [
        { name: "Careers", href: "/careers", description: "Join our team in Manchester, UK" },
        { name: "Sitemap", href: "/sitemap-page", description: "Complete list of all website pages" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-16 pb-12 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&crop=center')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sitemap
            </h1>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto">
              A complete overview of all pages on the Zero One Works Ltd website,
              organised by category for easy navigation.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sitemapSections.map((section, index) => (
              <Card key={index} className="card-hover-effect h-full">
                <CardHeader>
                  <CardTitle className="text-gray-800 dark:text-gray-200">
                    {section.title}
                  </CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {section.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="group block"
                        >
                          <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors flex items-center space-x-2">
                            <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span>{link.name}</span>
                          </span>
                          <p className="text-sm text-gray-500 dark:text-gray-400 ml-6 mt-1">
                            {link.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Access Grid */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold gradient-text mb-8 text-center">
              All Pages at a Glance
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {sitemapSections.flatMap((section) =>
                section.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {link.name}
                    </span>
                  </Link>
                ))
              )}
            </div>
          </div>

          {/* Contact Note */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              Can&apos;t find what you&apos;re looking for?{" "}
              <Link href="/#contact" className="underline hover:text-gray-900 dark:hover:text-white font-medium">
                Contact us
              </Link>
              {" "}or email{" "}
              <a
                href="mailto:khurram@zerooneworks.com"
                className="underline hover:text-gray-900 dark:hover:text-white font-medium"
              >
                khurram@zerooneworks.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SitemapPage;
