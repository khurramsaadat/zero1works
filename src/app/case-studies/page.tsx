import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real project case studies from Zero One Works. See how we helped businesses across hospitality, fintech, education, and more.",
  alternates: { canonical: "/case-studies" },
};

const studies = [
  { title: "Grind Me Fine", industry: "Hospitality", challenge: "A specialty coffee house needed an online presence to showcase their menu, gallery, and customer reviews.", result: "Launched a fully responsive site with integrated Google reviews, resulting in a 40% increase in reservation inquiries.", link: "https://grindme-fine.netlify.app/" },
  { title: "Dubi Developers", industry: "Real Estate", challenge: "A Dubai property developer needed a professional site to showcase 15 active projects with multilingual support.", result: "Delivered a dark-themed, multi-section site with project galleries, floor plans, and a 3-mode theme switcher.", link: "https://dubi-developers.netlify.app/" },
  { title: "PDF Tools Suite", industry: "SaaS / Utilities", challenge: "Users needed a free, browser-based PDF toolkit without uploading files to a server.", result: "Built a client-side PDF suite with merge, split, compress, and convert tools - zero server dependencies, 100% privacy.", link: "https://pdfs-tools.netlify.app/" },
  { title: "StockPulse", industry: "Finance", challenge: "Traders needed a lightweight terminal for global stock data without expensive Bloomberg subscriptions.", result: "Created a real-time stock dashboard with watchlists, charts, and market data from multiple exchanges.", link: "https://stock-pulse-app.netlify.app/" },
  { title: "Solarization", industry: "Education", challenge: "An educator wanted an interactive way to teach the solar system to students.", result: "Built a 3D Three.js experience letting students explore planets, moons, and orbital mechanics interactively.", link: "https://solarization.netlify.app/" },
  { title: "Track My Workout", industry: "Health & Fitness", challenge: "Gym-goers wanted AI-assisted form checking without a personal trainer.", result: "Deployed a TensorFlow.js pose detection app that counts reps and flags incorrect form in real time.", link: "https://track-my-workout.netlify.app/" },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main-content">
        <section className="pt-20 pb-12 bg-gray-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Breadcrumbs />
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-4">Case Studies</h1>
            <p className="text-gray-400 max-w-2xl">Deep dives into real projects - the challenges, solutions, and results.</p>
          </div>
        </section>
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {studies.map((s) => (
              <article key={s.title} className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">{s.industry}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{s.title}</h2>
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <div><span className="font-medium text-gray-800 dark:text-gray-200">Challenge:</span> {s.challenge}</div>
                  <div><span className="font-medium text-gray-800 dark:text-gray-200">Result:</span> {s.result}</div>
                </div>
                <a href={s.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  View live site &rarr;
                </a>
              </article>
            ))}
            <div className="text-center pt-4">
              <Link href="/portfolio" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white underline">See all 59 projects &rarr;</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
