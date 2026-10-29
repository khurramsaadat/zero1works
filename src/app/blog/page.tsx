"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BlogHeroSvg, BlogCardSvg } from "@/components/illustrations/HeroIllustrations";

/* Category-to-gradient map for card headers (charcoal/slate palette) */
const categoryGradients: Record<string, string> = {
  "Web Development": "from-slate-700 to-gray-900",
  "E-Commerce": "from-gray-800 to-slate-600",
  "Design": "from-slate-600 to-gray-800",
  "Mobile Development": "from-gray-700 to-slate-900",
  "SEO": "from-slate-800 to-gray-700",
  "AI & Technology": "from-gray-900 to-slate-700",
  "Performance": "from-slate-700 to-gray-800",
  "Security": "from-gray-800 to-slate-800",
  "Cloud Computing": "from-slate-900 to-gray-700",
  "Business": "from-gray-700 to-slate-800",
  "Accessibility": "from-slate-600 to-gray-700",
  "DevOps": "from-gray-800 to-slate-700",
};

const POSTS_PER_PAGE = 12;

/* All blog posts - newest first */
const blogPosts = [
  // 2026
  {
    id: 31,
    title: "Building Accessible Websites in 2026 - A Practical Guide",
    excerpt: "Accessibility is no longer optional. Learn how WCAG 2.2 compliance benefits your users and your search rankings.",
    category: "Accessibility",
    date: "October 15, 2026",
    readTime: "7 min read",
  },
  {
    id: 30,
    title: "Server Components vs Client Components - When to Use Each",
    excerpt: "A clear decision framework for choosing between React Server Components and Client Components in Next.js applications.",
    category: "Web Development",
    date: "September 10, 2026",
    readTime: "8 min read",
  },
  {
    id: 29,
    title: "The Real Cost of a Slow Website - Performance Metrics That Matter",
    excerpt: "How Core Web Vitals directly impact your conversion rates and what you can do to fix poor scores today.",
    category: "Performance",
    date: "August 18, 2026",
    readTime: "6 min read",
  },
  {
    id: 28,
    title: "AI-Powered Customer Support - Implementation Without the Hype",
    excerpt: "Practical approaches to integrating AI chatbots and support tools that actually help your customers.",
    category: "AI & Technology",
    date: "July 22, 2026",
    readTime: "9 min read",
  },
  {
    id: 27,
    title: "Mobile Commerce Trends Driving Sales in 2026",
    excerpt: "From one-tap checkout to AR product previews, the mobile commerce features that convert browsers into buyers.",
    category: "E-Commerce",
    date: "June 14, 2026",
    readTime: "6 min read",
  },
  {
    id: 26,
    title: "Designing for Dark Mode - Beyond Inverting Colours",
    excerpt: "A complete guide to implementing dark mode that looks intentional, not like an afterthought.",
    category: "Design",
    date: "May 20, 2026",
    readTime: "5 min read",
  },
  {
    id: 25,
    title: "Why Your Business Needs a Progressive Web App in 2026",
    excerpt: "PWAs deliver app-like experiences without app store friction. Here is when they make sense for your business.",
    category: "Mobile Development",
    date: "April 8, 2026",
    readTime: "7 min read",
  },
  {
    id: 24,
    title: "Local SEO for UK Small Businesses - A Step-by-Step Guide",
    excerpt: "Rank higher in your local area with these proven local SEO strategies tailored for the UK market.",
    category: "SEO",
    date: "March 12, 2026",
    readTime: "8 min read",
  },
  {
    id: 23,
    title: "Zero Trust Security for Web Applications",
    excerpt: "How to implement zero trust architecture in your web applications without slowing down your development team.",
    category: "Security",
    date: "February 5, 2026",
    readTime: "10 min read",
  },
  {
    id: 22,
    title: "Serverless vs Traditional Hosting - A 2026 Cost Comparison",
    excerpt: "Real numbers comparing serverless platforms, VPS hosting, and managed services for different project sizes.",
    category: "Cloud Computing",
    date: "January 18, 2026",
    readTime: "7 min read",
  },
  // 2025
  {
    id: 21,
    title: "Year in Review - What We Learned Building 20 Websites in 2025",
    excerpt: "Our team reflects on the patterns, tools, and lessons from a year of shipping client projects.",
    category: "Business",
    date: "December 15, 2025",
    readTime: "6 min read",
  },
  {
    id: 20,
    title: "CI/CD Pipelines for Static Sites - Automate Your Deployments",
    excerpt: "Set up automated testing, building, and deployment for your Next.js static export in under an hour.",
    category: "DevOps",
    date: "November 20, 2025",
    readTime: "8 min read",
  },
  {
    id: 19,
    title: "E-Commerce Checkout Optimisation - Reducing Cart Abandonment",
    excerpt: "Data-driven strategies to streamline your checkout flow and recover lost sales.",
    category: "E-Commerce",
    date: "October 10, 2025",
    readTime: "7 min read",
  },
  {
    id: 18,
    title: "The Complete Guide to Web Fonts and Performance",
    excerpt: "How to load custom fonts without hurting your page speed - font-display, subsetting, and variable fonts explained.",
    category: "Performance",
    date: "September 22, 2025",
    readTime: "6 min read",
  },
  {
    id: 17,
    title: "Building a Design System from Scratch with Tailwind CSS",
    excerpt: "Create a consistent, reusable component library that scales with your product and team.",
    category: "Design",
    date: "August 14, 2025",
    readTime: "9 min read",
  },
  {
    id: 16,
    title: "React 19 - What Changed and How to Migrate",
    excerpt: "A practical migration guide covering Server Components, Actions, and the new hooks in React 19.",
    category: "Web Development",
    date: "July 8, 2025",
    readTime: "10 min read",
  },
  {
    id: 15,
    title: "API Security - Protecting Your Endpoints from Common Attacks",
    excerpt: "Rate limiting, input validation, CORS, and authentication patterns every API developer should implement.",
    category: "Security",
    date: "June 18, 2025",
    readTime: "8 min read",
  },
  {
    id: 14,
    title: "How AI is Changing Web Design Workflows",
    excerpt: "From AI-generated layouts to automated testing, the tools that are reshaping how agencies work.",
    category: "AI & Technology",
    date: "May 12, 2025",
    readTime: "6 min read",
  },
  {
    id: 13,
    title: "Technical SEO Audit Checklist for 2025",
    excerpt: "A comprehensive checklist covering crawlability, indexation, structured data, and Core Web Vitals.",
    category: "SEO",
    date: "April 22, 2025",
    readTime: "9 min read",
  },
  {
    id: 12,
    title: "Cross-Platform Mobile Development - React Native vs Flutter",
    excerpt: "An honest comparison of the two leading cross-platform frameworks based on real project experience.",
    category: "Mobile Development",
    date: "March 15, 2025",
    readTime: "7 min read",
  },
  {
    id: 11,
    title: "Choosing the Right Cloud Provider for Your Web Application",
    excerpt: "AWS, Azure, GCP, or a simpler alternative? A decision framework based on your project requirements and budget.",
    category: "Cloud Computing",
    date: "February 10, 2025",
    readTime: "8 min read",
  },
  {
    id: 10,
    title: "Static Site Generation - Why Speed and Security Win",
    excerpt: "How static exports with Next.js deliver faster load times, better security, and lower hosting costs.",
    category: "Web Development",
    date: "January 20, 2025",
    readTime: "6 min read",
  },
  // Nov-Dec 2024 (original posts - cleaned up)
  {
    id: 9,
    title: "The Future of Web Development - Trends to Watch",
    excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
    category: "Web Development",
    date: "December 15, 2024",
    readTime: "5 min read",
  },
  {
    id: 8,
    title: "Building Scalable E-Commerce Solutions",
    excerpt: "Learn how to create robust e-commerce platforms that can handle growth and provide excellent user experiences.",
    category: "E-Commerce",
    date: "December 12, 2024",
    readTime: "7 min read",
  },
  {
    id: 7,
    title: "UI/UX Design Principles for Better User Engagement",
    excerpt: "Discover key design principles that can significantly improve user engagement and conversion rates.",
    category: "Design",
    date: "December 10, 2024",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "Mobile-First Development - Why It Matters More Than Ever",
    excerpt: "Understanding the importance of mobile-first approach in today's digital landscape and how to implement it effectively.",
    category: "Mobile Development",
    date: "December 8, 2024",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "SEO Strategies That Actually Work",
    excerpt: "Cut through the noise and focus on SEO strategies that deliver real results for your website visibility.",
    category: "SEO",
    date: "December 5, 2024",
    readTime: "8 min read",
  },
  {
    id: 4,
    title: "The Rise of AI in Web Development",
    excerpt: "Explore how artificial intelligence is revolutionising web development and the tools you should know about.",
    category: "AI & Technology",
    date: "December 3, 2024",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Performance Optimisation - Making Your Website Lightning Fast",
    excerpt: "Learn practical techniques to optimise your website performance and improve user experience.",
    category: "Performance",
    date: "November 30, 2024",
    readTime: "7 min read",
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices for Web Applications",
    excerpt: "Essential security measures every web developer should implement to protect applications and user data.",
    category: "Security",
    date: "November 28, 2024",
    readTime: "9 min read",
  },
  {
    id: 1,
    title: "Cloud Computing for Small Businesses - A Complete Guide",
    excerpt: "Everything small businesses need to know about leveraging cloud computing for growth and efficiency.",
    category: "Cloud Computing",
    date: "November 25, 2024",
    readTime: "10 min read",
  },
];

const Blog = () => {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];
  const filtered = filter === "All" ? blogPosts : blogPosts.filter((p) => p.category === filter);
  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-16 pb-12 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.1),transparent)]" />
        <BlogHeroSvg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <Breadcrumbs />
          <div className="text-center mt-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Blog</h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              Insights on web development, design, performance, and digital strategy from the Zero One Works team
            </p>

            {/* Filter pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={filter === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => { setFilter(cat); setVisibleCount(POSTS_PER_PAGE); }}
                  className="btn-hover-effect"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured post */}
      {visible.length > 0 && (
        <section id="main-content" className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">Latest Post</h2>
            <Link href={`/blog/${visible[0].id}`}>
              <Card className="card-hover-effect overflow-hidden cursor-pointer">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className={`relative h-64 lg:min-h-[320px] bg-gradient-to-br ${categoryGradients[visible[0].category] || "from-gray-700 to-slate-900"}`}>
                    <BlogCardSvg category={visible[0].category} />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 dark:bg-slate-800/90 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full text-sm font-medium">
                        {visible[0].category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                      {visible[0].title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{visible[0].excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <span>Zero One Works</span>
                      <span>{visible[0].date}</span>
                      <span>{visible[0].readTime}</span>
                    </div>
                    <Button className="w-fit btn-hover-effect btn-primary-hover">Read More</Button>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">
            {filter === "All" ? "All Posts" : filter} ({filtered.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visible.slice(1).map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="card-hover-effect overflow-hidden cursor-pointer h-full">
                  <div className={`relative h-48 bg-gradient-to-br ${categoryGradients[post.category] || "from-gray-700 to-slate-900"}`}>
                    <BlogCardSvg category={post.category} />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 dark:bg-slate-800/90 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                      <span>Zero One Works</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                      <Button variant="outline" size="sm" className="btn-hover-effect btn-outline-hover">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Load more */}
          {hasMore && (
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
                className="btn-hover-effect"
              >
                Load More Posts
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Subscribe to our newsletter and never miss our latest articles, tips, and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button className="bg-white text-gray-800 hover:bg-gray-100 btn-hover-effect px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
