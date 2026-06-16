import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const CookiePolicy = () => {
  const cookieTypes = [
    {
      title: "Strictly Necessary Cookies",
      description: "These cookies are essential for the website to function correctly. They enable core features such as page navigation, security, and access to secure areas. The website cannot function properly without these cookies, and they cannot be disabled.",
      examples: ["Session management", "Security tokens", "Cookie consent preferences"],
      duration: "Session or up to 1 year"
    },
    {
      title: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This data allows us to improve our website structure, content, and user experience.",
      examples: ["Google Analytics", "Page view tracking", "Traffic source analysis"],
      duration: "Up to 2 years"
    },
    {
      title: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalisation, such as remembering your preferences and settings. They may be set by us or by third-party providers whose services we use on our pages.",
      examples: ["Language preferences", "Theme settings (dark/light mode)", "Form auto-fill preferences"],
      duration: "Up to 1 year"
    },
    {
      title: "Marketing Cookies",
      description: "These cookies may be set through our site by advertising partners to build a profile of your interests and show you relevant content on other sites. They do not store directly personal information but are based on uniquely identifying your browser and device.",
      examples: ["Social media pixels", "Retargeting cookies", "Campaign tracking"],
      duration: "Up to 1 year"
    }
  ];

  const manageSteps = [
    {
      title: "Browser Settings",
      description: "Most web browsers allow you to control cookies through their settings. You can typically find these options in the 'Settings', 'Preferences', or 'Privacy' section of your browser. You can block all cookies, accept only certain cookies, or delete cookies when you close your browser."
    },
    {
      title: "Cookie Consent Banner",
      description: "When you first visit our website, you will see a cookie consent banner allowing you to accept or reject non-essential cookies. You can change your preferences at any time by clearing your browser cookies and revisiting our site."
    },
    {
      title: "Opt-Out Tools",
      description: "For analytics cookies, you can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on. For advertising cookies, visit youronlinechoices.eu to manage preferences across participating companies."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-16 pb-12 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&h=1080&fit=crop&crop=center')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto">
              How Zero One Works Ltd uses cookies and similar technologies on our website.
            </p>
            <p className="text-sm text-gray-300 mt-4">
              Last updated: 2026-01-01
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              This Cookie Policy explains what cookies are, how Zero One Works Ltd uses them on
              our website, and how you can manage your cookie preferences. This policy should be
              read alongside our{" "}
              <Link href="/privacy-policy" className="underline hover:text-gray-900 dark:hover:text-white">
                Privacy Policy
              </Link>.
            </p>
            <p>
              Cookies are small text files placed on your device when you visit a website. They
              are widely used to make websites work efficiently, provide a better user experience,
              and give website owners useful information about how their site is used.
            </p>
            <p>
              Under UK GDPR and the Privacy and Electronic Communications Regulations (PECR),
              we are required to inform you about the cookies we use and obtain your consent
              before placing non-essential cookies on your device.
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Types of Cookies We Use
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We categorise cookies based on their purpose to help you understand how we use them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((cookie, index) => (
              <Card key={index} className="card-hover-effect h-full">
                <CardHeader>
                  <CardTitle className="text-gray-800 dark:text-gray-200">
                    {cookie.title}
                  </CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Duration: {cookie.duration}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {cookie.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm">
                      Examples:
                    </h4>
                    <ul className="space-y-1">
                      {cookie.examples.map((example, exIndex) => (
                        <li key={exIndex} className="flex items-center space-x-2 text-sm">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-400">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Manage Cookies */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              How to Manage Cookies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              You have control over which cookies are stored on your device.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {manageSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Please note that blocking or deleting cookies may affect the functionality of our
              website. Strictly necessary cookies cannot be disabled as they are required for
              the site to operate. If you disable analytics or functional cookies, some features
              may not work as intended.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Questions About Cookies?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            If you have any questions about our use of cookies, please contact us.
          </p>
          <div className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
            <p>Zero One Works Ltd</p>
            <p>1791 Holmcroft Rd, Manchester M18 7WQ, United Kingdom</p>
            <p>
              Email:{" "}
              <a
                href="mailto:khurram@zerooneworks.com"
                className="underline hover:text-gray-900 dark:hover:text-white"
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

export default CookiePolicy;
