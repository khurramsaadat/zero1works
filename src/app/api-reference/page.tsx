import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "API Reference",
  description: "API and integration reference for Zero One Works client projects. Formspree, Stripe, and third-party service integration guides.",
  alternates: { canonical: "/api-reference" },
};

const apis = [
  { name: "Contact Form (Formspree)", method: "POST", endpoint: "https://formspree.io/f/{form_id}", description: "All contact forms submit via Formspree. Supports file uploads up to 10MB. Responses forwarded to client email.", fields: ["name (required)", "email (required)", "company", "budget", "message (required)", "attachment (file)"] },
  { name: "Stripe Payments", method: "POST", endpoint: "Stripe Checkout Session API", description: "E-commerce projects use Stripe Checkout for secure payment processing. PCI-compliant, supports GBP and 135+ currencies.", fields: ["line_items", "mode (payment/subscription)", "success_url", "cancel_url"] },
  { name: "Google Maps Embed", method: "GET", endpoint: "Maps Embed API", description: "Location pages use the Google Maps Embed API for interactive map display. No API key charges for embed usage.", fields: ["q (address)", "zoom", "maptype"] },
  { name: "Open Graph Protocol", method: "META", endpoint: "HTML <meta> tags", description: "Every page includes og:title, og:description, og:image, and og:url for rich social media previews.", fields: ["og:title", "og:description", "og:image (1200x630)", "og:type", "og:url"] },
];

export default function ApiReferencePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main-content">
        <section className="pt-20 pb-12 bg-gray-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Breadcrumbs variant="hero" />
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-4">API Reference</h1>
            <p className="text-gray-400 max-w-2xl">Integration patterns and third-party services used across our projects.</p>
          </div>
        </section>
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {apis.map((api) => (
              <article key={api.name} className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-mono rounded">{api.method}</span>
                  <h2 className="text-base font-bold text-gray-900 dark:text-gray-100">{api.name}</h2>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-mono mb-3">{api.endpoint}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{api.description}</p>
                <div>
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">Parameters / Fields:</p>
                  <div className="flex flex-wrap gap-2">
                    {api.fields.map((f) => (
                      <span key={f} className="px-2 py-1 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-xs font-mono rounded">{f}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
