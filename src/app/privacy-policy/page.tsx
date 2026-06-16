import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "We collect information that you provide directly to us when you use our website, contact us, request a quote, subscribe to our newsletter, or apply for a position. This may include your name, email address, phone number, company name, job title, and any other details you choose to provide in messages or forms.",
        "We automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits. This data helps us understand how visitors use our site and improve our services.",
        "If you engage us for web development or related services, we may also collect project-related information necessary to deliver those services, such as business requirements, branding assets, and account credentials provided by you for integration purposes."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "We use the information we collect to respond to your enquiries, provide quotations, deliver our web development and digital services, and communicate with you about projects, updates, and support.",
        "We use technical and usage data to maintain and improve our website, analyse trends, monitor site performance, and enhance user experience.",
        "With your consent where required, we may send you marketing communications about our services, blog updates, and company news. You can opt out of marketing emails at any time by clicking the unsubscribe link in any email or contacting us directly.",
        "We may use your information to comply with legal obligations, enforce our terms, protect our rights, and prevent fraud or misuse of our services."
      ]
    },
    {
      title: "Data Sharing",
      content: [
        "We do not sell your personal data. We may share your information with trusted third-party service providers who assist us in operating our website and delivering our services, such as hosting providers, email platforms, analytics tools, and payment processors. These providers are contractually required to protect your data and use it only for the purposes we specify.",
        "We may disclose your information if required by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect the rights, property, or safety of Zero One Works Ltd, our clients, or others.",
        "In the event of a merger, acquisition, or sale of assets, your personal data may be transferred as part of that transaction, subject to the same privacy protections described in this policy."
      ]
    },
    {
      title: "Your Rights (GDPR)",
      content: [
        "If you are located in the United Kingdom or European Economic Area, you have rights under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. These rights include:",
        "The right to access - you can request a copy of the personal data we hold about you.",
        "The right to rectification - you can ask us to correct inaccurate or incomplete data.",
        "The right to erasure - you can request deletion of your personal data in certain circumstances.",
        "The right to restrict processing - you can ask us to limit how we use your data.",
        "The right to data portability - you can request your data in a structured, commonly used format.",
        "The right to object - you can object to processing based on legitimate interests or for direct marketing.",
        "The right to withdraw consent - where processing is based on consent, you may withdraw it at any time.",
        "To exercise any of these rights, please contact us using the details below. We will respond within one month. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk."
      ]
    },
    {
      title: "Cookies",
      content: [
        "Our website uses cookies and similar technologies to enhance your browsing experience, analyse site traffic, and understand user behaviour. Cookies are small text files stored on your device when you visit a website.",
        "We use essential cookies required for the website to function, analytics cookies to understand how visitors interact with our site, and preference cookies to remember your settings.",
        "For full details on the cookies we use and how to manage them, please see our Cookie Policy."
      ]
    },
    {
      title: "Data Retention",
      content: [
        "We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements.",
        "Contact form submissions and enquiry data are typically retained for up to three years unless a business relationship is established, in which case data is retained for the duration of the relationship and for up to six years thereafter for legal and accounting purposes.",
        "Website analytics data is generally retained in aggregated form. Individual session data is retained according to our analytics provider's standard retention periods.",
        "When personal data is no longer required, we securely delete or anonymise it."
      ]
    },
    {
      title: "Contact",
      content: [
        "If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us:",
        "Zero One Works Ltd",
        "1791 Holmcroft Rd, Manchester M18 7WQ, United Kingdom",
        "Email: khurram@zerooneworks.com",
        "We aim to respond to all privacy-related enquiries within 30 days."
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=1080&fit=crop&crop=center')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto">
              How Zero One Works Ltd collects, uses, and protects your personal information.
            </p>
            <p className="text-sm text-gray-300 mt-4">
              Last updated: 2026-01-01
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Zero One Works Ltd (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your personal information when you visit our website at zerooneworks.com or engage our
              services. We are registered in the United Kingdom and operate from Manchester.
            </p>
          </div>

          <div className="space-y-10">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-gray-600 dark:text-gray-300 leading-relaxed"
                    >
                      {paragraph.startsWith("The right to") ? (
                        <span className="flex items-start space-x-2">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{paragraph}</span>
                        </span>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                </div>
                {section.title === "Cookies" && (
                  <Link
                    href="/cookie-policy"
                    className="inline-block mt-4 text-gray-700 dark:text-gray-300 underline hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Read our full Cookie Policy
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
