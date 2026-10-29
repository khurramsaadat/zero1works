import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";
import { blogCategoryImages } from "@/components/illustrations/HeroIllustrations";

/* Shared blog data - keep in sync with /blog/page.tsx */
const blogPosts = [
  { id: 31, title: "Building Accessible Websites in 2026 - A Practical Guide", excerpt: "Accessibility is no longer optional. Learn how WCAG 2.2 compliance benefits your users and your search rankings.", category: "Accessibility", date: "October 15, 2026", readTime: "7 min read",
    body: "Web accessibility has moved from a best-practice recommendation to a legal and competitive necessity. With WCAG 2.2 now the standard, businesses that ignore accessibility risk losing customers, facing lawsuits, and hurting their search rankings.\n\nThe good news is that most accessibility wins are straightforward. Semantic HTML, sufficient colour contrast, keyboard navigability, and proper ARIA labels cover the majority of issues. Start by auditing your site with tools like axe DevTools or Lighthouse, then address the flagged items systematically.\n\nScreen readers rely on heading hierarchy, landmark roles, and alt text. Ensure your site flows logically when CSS is disabled. Forms need visible labels, error messages must be announced, and focus indicators should never be removed.\n\nAccessibility also improves SEO. Search engines reward well-structured content, descriptive link text, and fast-loading pages. An accessible site is inherently more crawlable and indexable." },
  { id: 30, title: "Server Components vs Client Components - When to Use Each", excerpt: "A clear decision framework for choosing between React Server Components and Client Components in Next.js applications.", category: "Web Development", date: "September 10, 2026", readTime: "8 min read",
    body: "React Server Components fundamentally change how we think about rendering. They execute on the server, send only HTML to the client, and never ship their JavaScript bundle to the browser. This dramatically reduces your client-side bundle size.\n\nUse Server Components for data fetching, accessing backend resources, and rendering static or infrequently changing content. They are the default in the Next.js App Router, so you get their benefits automatically.\n\nClient Components are marked with the 'use client' directive. Use them when you need interactivity: event handlers, useState, useEffect, browser APIs, or third-party libraries that depend on the DOM.\n\nThe key insight is composability. A Server Component can render Client Components as children, but not the other way around. Structure your component tree so interactive elements are leaf nodes, keeping the parent tree server-rendered." },
  { id: 29, title: "The Real Cost of a Slow Website - Performance Metrics That Matter", excerpt: "How Core Web Vitals directly impact your conversion rates and what you can do to fix poor scores today.", category: "Performance", date: "August 18, 2026", readTime: "6 min read",
    body: "Google has made it clear: page speed is a ranking factor. But beyond SEO, performance directly impacts your bottom line. Amazon found that every 100ms of latency cost them 1% in sales. Your site is no different.\n\nCore Web Vitals measure the three things users care about most. Largest Contentful Paint (LCP) measures loading speed - aim for under 2.5 seconds. Interaction to Next Paint (INP) measures responsiveness - aim for under 200ms. Cumulative Layout Shift (CLS) measures visual stability - aim for under 0.1.\n\nCommon fixes include optimising images with modern formats (WebP, AVIF), implementing proper caching headers, lazy-loading below-the-fold content, and reducing JavaScript bundle sizes. Static site generation eliminates server response time entirely.\n\nMeasure before optimising. Use Google PageSpeed Insights, WebPageTest, and real user monitoring to identify your actual bottlenecks rather than guessing." },
  { id: 28, title: "AI-Powered Customer Support - Implementation Without the Hype", excerpt: "Practical approaches to integrating AI chatbots and support tools that actually help your customers.", category: "AI & Technology", date: "July 22, 2026", readTime: "9 min read",
    body: "AI customer support has matured beyond the frustrating chatbots of a few years ago. Modern large language models can understand context, handle nuanced questions, and know when to escalate to a human.\n\nStart with a clear scope. Define exactly which questions your AI should handle and which should go to your team. Train your model on your actual FAQ data, product documentation, and past support conversations.\n\nImplementation options range from simple to complex. Embedding a pre-built solution like Intercom or Zendesk AI is the fastest path. Building a custom RAG (Retrieval-Augmented Generation) pipeline gives you more control but requires engineering investment.\n\nThe most important feature is graceful handoff. When the AI cannot help, it should seamlessly connect the customer to a human agent with full conversation context. Nothing frustrates customers more than repeating themselves." },
  { id: 27, title: "Mobile Commerce Trends Driving Sales in 2026", excerpt: "From one-tap checkout to AR product previews, the mobile commerce features that convert browsers into buyers.", category: "E-Commerce", date: "June 14, 2026", readTime: "6 min read",
    body: "Mobile commerce now accounts for over 70% of e-commerce traffic globally. Yet conversion rates on mobile still lag behind desktop by 50% or more. The gap represents an enormous opportunity.\n\nOne-tap checkout with saved payment methods (Apple Pay, Google Pay) has proven to increase mobile conversion rates by 10-15%. If you are not offering these, you are leaving money on the table.\n\nAR product previews let customers see how furniture, clothing, or accessories look in their space or on them before purchasing. The technology has matured significantly and can be implemented with existing APIs.\n\nPage speed remains the single biggest factor. A mobile site that loads in under 2 seconds converts at twice the rate of one that takes 5 seconds. Invest in performance before adding features." },
  { id: 26, title: "Designing for Dark Mode - Beyond Inverting Colours", excerpt: "A complete guide to implementing dark mode that looks intentional, not like an afterthought.", category: "Design", date: "May 20, 2026", readTime: "5 min read",
    body: "Dark mode is not just about swapping white backgrounds for black ones. A well-designed dark theme requires careful attention to contrast, depth, and colour adjustments.\n\nUse dark greys (like slate-900 or gray-950) instead of pure black. Pure black creates excessive contrast with white text and causes visual fatigue. Slightly lighter backgrounds feel more natural and maintain readability.\n\nReduce the saturation of your brand colours for dark mode. Bright, saturated colours on dark backgrounds appear to glow and can be uncomfortable to read. Desaturated variants feel more comfortable.\n\nCreate depth through subtle elevation rather than shadows. In light mode, shadows push elements back. In dark mode, lighter surface colours bring elements forward. Use this to establish visual hierarchy." },
  { id: 25, title: "Why Your Business Needs a Progressive Web App in 2026", excerpt: "PWAs deliver app-like experiences without app store friction. Here is when they make sense for your business.", category: "Mobile Development", date: "April 8, 2026", readTime: "7 min read",
    body: "Progressive Web Apps combine the reach of the web with the engagement of native apps. They install on home screens, work offline, and send push notifications, yet require no app store approval process.\n\nPWAs make sense when your users visit frequently but would not install a native app. Think news sites, e-commerce stores, SaaS dashboards, and utility tools. If your audience is primarily mobile and engagement matters, a PWA is worth considering.\n\nThe technical requirements are straightforward: HTTPS, a service worker for offline capability, and a web app manifest for installation. Modern frameworks like Next.js support PWA features out of the box with minimal configuration.\n\nThe ROI can be significant. Twitter Lite (PWA) saw a 65% increase in pages per session and a 75% increase in tweets sent. Starbucks doubled daily active users after launching their PWA." },
  { id: 24, title: "Local SEO for UK Small Businesses - A Step-by-Step Guide", excerpt: "Rank higher in your local area with these proven local SEO strategies tailored for the UK market.", category: "SEO", date: "March 12, 2026", readTime: "8 min read",
    body: "Local SEO helps your business appear in search results when people nearby search for your services. For UK small businesses, this is often the most impactful marketing investment you can make.\n\nStart with Google Business Profile. Claim and verify your listing, add complete business information, upload quality photos, and post regular updates. Respond to every review, positive or negative, within 24 hours.\n\nEnsure your NAP (Name, Address, Phone) is consistent across all online directories. Inconsistencies confuse search engines and reduce your local ranking. Focus on UK-specific directories like Yell, Thomson Local, and Yelp UK.\n\nCreate location-specific content on your website. A dedicated page for each area you serve, with unique content about how you help customers in that specific location, signals relevance to local searches." },
  { id: 23, title: "Zero Trust Security for Web Applications", excerpt: "How to implement zero trust architecture in your web applications without slowing down your development team.", category: "Security", date: "February 5, 2026", readTime: "10 min read",
    body: "Zero trust means never trusting, always verifying. Every request, whether from inside or outside your network, must be authenticated and authorised before accessing any resource.\n\nFor web applications, this starts with strong authentication. Implement multi-factor authentication, use short-lived tokens, and validate sessions on every request. JWTs should have short expiry times with refresh token rotation.\n\nApply the principle of least privilege everywhere. Database connections should use service accounts with minimal permissions. API endpoints should validate not just authentication but authorisation for each specific resource.\n\nInput validation and output encoding remain critical. Every piece of user input is a potential attack vector. Use parameterised queries, validate on the server side regardless of client-side validation, and encode output based on context." },
  { id: 22, title: "Serverless vs Traditional Hosting - A 2026 Cost Comparison", excerpt: "Real numbers comparing serverless platforms, VPS hosting, and managed services for different project sizes.", category: "Cloud Computing", date: "January 18, 2026", readTime: "7 min read",
    body: "Choosing the right hosting approach can save you thousands of pounds annually. The decision depends on your traffic patterns, technical requirements, and team capabilities.\n\nServerless platforms like Vercel and Netlify excel for static sites and JAMstack applications. For a site with under 100,000 page views per month, free tiers often suffice. At 500,000 views, expect to pay around 15-25 pounds per month.\n\nA VPS from providers like DigitalOcean or Hetzner costs 4-20 pounds per month and gives you full control. However, you are responsible for security updates, SSL certificates, and server maintenance. Factor in the time cost.\n\nFor static exports like this site, the answer is simple: deploy to a CDN. The hosting cost is minimal, security surface is tiny, and performance is excellent globally." },
  { id: 21, title: "Year in Review - What We Learned Building 20 Websites in 2025", excerpt: "Our team reflects on the patterns, tools, and lessons from a year of shipping client projects.", category: "Business", date: "December 15, 2025", readTime: "6 min read",
    body: "2025 was a pivotal year for our agency. We shipped 20 client websites across hospitality, finance, education, and e-commerce. Here are the patterns that emerged.\n\nNext.js with static export became our default stack. The performance is unbeatable, hosting costs are near zero, and the developer experience keeps improving. We moved away from traditional CMS platforms for most projects.\n\nClient communication is the make-or-break factor. Projects with weekly check-ins and shared design documents shipped on time. Projects with vague briefs and delayed feedback did not. We now require a structured discovery phase before writing any code.\n\nTailwind CSS eliminated our CSS maintenance burden entirely. Combined with a component library, we can deliver consistent, responsive designs in half the time compared to custom CSS." },
  { id: 20, title: "CI/CD Pipelines for Static Sites - Automate Your Deployments", excerpt: "Set up automated testing, building, and deployment for your Next.js static export in under an hour.", category: "DevOps", date: "November 20, 2025", readTime: "8 min read",
    body: "Manual deployments are error-prone and slow. A proper CI/CD pipeline ensures every change is tested, built, and deployed automatically when you push to your main branch.\n\nFor static Next.js sites, the pipeline is simple: install dependencies, run linting, run the build, and deploy the output directory. GitHub Actions can handle this in a free workflow that runs in under two minutes.\n\nAdd type checking with TypeScript and linting with ESLint as mandatory checks. These catch bugs before they reach production and enforce code quality across your team.\n\nPreview deployments for pull requests let you review changes in a live environment before merging. Both Vercel and Netlify offer this automatically. It is the single most impactful quality assurance tool for web projects." },
  { id: 19, title: "E-Commerce Checkout Optimisation - Reducing Cart Abandonment", excerpt: "Data-driven strategies to streamline your checkout flow and recover lost sales.", category: "E-Commerce", date: "October 10, 2025", readTime: "7 min read",
    body: "The average cart abandonment rate is 70%. That means for every 10 customers who add items to their cart, 7 leave without buying. Even small improvements to your checkout flow can dramatically increase revenue.\n\nReduce form fields to the absolute minimum. Every additional field increases abandonment. Use address autocomplete, auto-detect the card type, and pre-fill information wherever possible.\n\nOffer guest checkout. Forcing account creation before purchase is the number one reason customers abandon carts. Let them buy first and optionally create an account afterward.\n\nDisplay all costs upfront. Unexpected shipping charges at checkout are the second most common reason for abandonment. Show estimated totals on the product page and cart page before the customer reaches checkout." },
  { id: 18, title: "The Complete Guide to Web Fonts and Performance", excerpt: "How to load custom fonts without hurting your page speed - font-display, subsetting, and variable fonts explained.", category: "Performance", date: "September 22, 2025", readTime: "6 min read",
    body: "Custom fonts add personality to your brand but can significantly impact page load times. A single font family with multiple weights can add 200-500KB to your page, causing layout shifts and slow rendering.\n\nUse font-display: swap to show fallback text immediately while fonts load. This prevents invisible text (FOIT) and gives users content to read while the custom font downloads.\n\nSubset your fonts to include only the characters you need. Latin-only subsets are typically 70% smaller than full Unicode fonts. Tools like glyphhanger automate this process.\n\nVariable fonts combine multiple weights and styles into a single file. A variable font is often smaller than two static fonts, while giving you infinite weight variations. Most modern browsers support them." },
  { id: 17, title: "Building a Design System from Scratch with Tailwind CSS", excerpt: "Create a consistent, reusable component library that scales with your product and team.", category: "Design", date: "August 14, 2025", readTime: "9 min read",
    body: "A design system is not a component library. It is a shared language between designers and developers that ensures consistency across every page and feature of your product.\n\nStart with design tokens: colours, spacing, typography, border radius, and shadows. In Tailwind CSS, define these in your theme configuration. Every component should reference these tokens rather than using arbitrary values.\n\nBuild components from the smallest atoms up. A Button component uses your colour tokens, spacing tokens, and typography tokens. A Card component composes multiple atoms. A page layout composes multiple molecules.\n\nDocument every component with its variants, states, and usage guidelines. Storybook or a dedicated docs page ensures your team uses components consistently and knows when to create new ones versus extending existing ones." },
  { id: 16, title: "React 19 - What Changed and How to Migrate", excerpt: "A practical migration guide covering Server Components, Actions, and the new hooks in React 19.", category: "Web Development", date: "July 8, 2025", readTime: "10 min read",
    body: "React 19 introduced several significant changes. Server Components are now stable, Actions simplify form handling, and new hooks like useFormStatus and useOptimistic streamline common patterns.\n\nThe migration path depends on your current setup. If you are already using Next.js App Router, you are likely using Server Components already. The main changes are in how you handle forms and state updates.\n\nActions replace the pattern of creating API endpoints for form submissions. Instead of POST requests to an API route, you write server functions that run on the server and can be called directly from client components.\n\nThe useSyncExternalStore hook becomes more important with the new set-state-in-effect lint rule. If you were using useState with useEffect to sync external state, refactor to useSyncExternalStore to avoid the warning." },
  { id: 15, title: "API Security - Protecting Your Endpoints from Common Attacks", excerpt: "Rate limiting, input validation, CORS, and authentication patterns every API developer should implement.", category: "Security", date: "June 18, 2025", readTime: "8 min read",
    body: "Your API is only as secure as its weakest endpoint. Every publicly accessible route is a potential attack vector, and attackers actively scan for common vulnerabilities.\n\nRate limiting prevents abuse and DDoS attacks. Implement it at the API gateway level with reasonable limits per IP address and per authenticated user. Consider stricter limits on authentication endpoints.\n\nValidate every input on the server side. Client-side validation is for user experience, not security. Use a schema validation library like Zod to define and enforce the shape of incoming data.\n\nCORS headers should be as restrictive as possible. Only allow the specific origins that need access to your API. Never use the wildcard origin in production with credentials." },
  { id: 14, title: "How AI is Changing Web Design Workflows", excerpt: "From AI-generated layouts to automated testing, the tools that are reshaping how agencies work.", category: "AI & Technology", date: "May 12, 2025", readTime: "6 min read",
    body: "AI is not replacing web designers. It is amplifying their productivity. The agencies that adopt AI tools strategically are delivering higher quality work in less time.\n\nDesign generation tools like Midjourney and DALL-E are useful for mood boards, concept exploration, and placeholder imagery during wireframing. They accelerate the ideation phase without replacing the designer's judgment.\n\nCoding assistants like GitHub Copilot and Cursor reduce the time spent on boilerplate code. They are particularly effective for repetitive tasks like creating responsive layouts, writing utility functions, and generating test cases.\n\nAutomated testing with AI can generate test scenarios from user stories and identify visual regressions across browsers. This frees QA time for exploratory testing where human intuition finds the bugs machines miss." },
  { id: 13, title: "Technical SEO Audit Checklist for 2025", excerpt: "A comprehensive checklist covering crawlability, indexation, structured data, and Core Web Vitals.", category: "SEO", date: "April 22, 2025", readTime: "9 min read",
    body: "A technical SEO audit identifies the infrastructure issues preventing your content from ranking. It should be performed quarterly and after any major site changes.\n\nStart with crawlability. Ensure your robots.txt is not blocking important pages, your sitemap.xml is up to date and submitted to Google Search Console, and your internal linking structure is logical and flat.\n\nCheck indexation. Search for site:yourdomain.com to see what Google has indexed. Look for duplicate content, thin pages, and pages that should be indexed but are not. Use canonical tags to consolidate duplicate content.\n\nStructured data helps search engines understand your content. Implement Organization, WebSite, and BreadcrumbList schemas at minimum. For blogs, add Article schema. Test with Google Rich Results Test." },
  { id: 12, title: "Cross-Platform Mobile Development - React Native vs Flutter", excerpt: "An honest comparison of the two leading cross-platform frameworks based on real project experience.", category: "Mobile Development", date: "March 15, 2025", readTime: "7 min read",
    body: "Both React Native and Flutter can build high-quality cross-platform mobile apps. The right choice depends on your team's skills, your project requirements, and your timeline.\n\nReact Native leverages your existing JavaScript and React knowledge. If your team already builds React web apps, the learning curve is gentle. The ecosystem is mature with extensive third-party libraries.\n\nFlutter uses Dart and provides its own rendering engine, which means pixel-perfect consistency across platforms. Performance is generally better for animation-heavy apps. The widget system encourages composability.\n\nFor agencies, the deciding factor is often team skills. We recommend React Native for teams with web backgrounds and Flutter for teams starting fresh or building highly custom UI experiences." },
  { id: 11, title: "Choosing the Right Cloud Provider for Your Web Application", excerpt: "AWS, Azure, GCP, or a simpler alternative? A decision framework based on your project requirements and budget.", category: "Cloud Computing", date: "February 10, 2025", readTime: "8 min read",
    body: "The big three cloud providers (AWS, Azure, GCP) offer everything you could possibly need. The problem is that everything comes with complexity and cost.\n\nFor small to medium web applications, you often do not need the big three at all. Platforms like Vercel, Netlify, and Railway abstract away infrastructure management and let you focus on building your product.\n\nIf you need a cloud provider, choose based on your specific requirements. AWS has the broadest service catalogue. Azure integrates best with Microsoft ecosystems. GCP offers the best machine learning and data analytics tools.\n\nCost management is critical. Set up billing alerts from day one. Use reserved instances for predictable workloads. Review your bill monthly and shut down unused resources. Cloud bills can grow surprisingly fast without oversight." },
  { id: 10, title: "Static Site Generation - Why Speed and Security Win", excerpt: "How static exports with Next.js deliver faster load times, better security, and lower hosting costs.", category: "Web Development", date: "January 20, 2025", readTime: "6 min read",
    body: "Static site generation pre-renders every page at build time and serves them as plain HTML files from a CDN. There is no server to hack, no database to compromise, and no runtime to slow down.\n\nThe performance benefits are dramatic. A static page served from a CDN loads in under 100ms from anywhere in the world. Compare that to a traditional server-rendered page that needs 200-500ms just for the server response.\n\nSecurity is simplified by default. With no server-side code running in production, the attack surface shrinks to nearly zero. SQL injection, server-side request forgery, and remote code execution are all impossible when there is no server.\n\nThe limitation is dynamic content. But with client-side fetching, serverless functions, and incremental static regeneration, most applications can be built as static sites with selective dynamic features." },
  { id: 9, title: "The Future of Web Development - Trends to Watch", excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.", category: "Web Development", date: "December 15, 2024", readTime: "5 min read",
    body: "The web development landscape evolves rapidly. Staying current with trends helps agencies deliver modern solutions and advise clients effectively.\n\nAI integration is moving from novelty to necessity. Chatbots, content generation, image optimisation, and code assistance are becoming standard features rather than differentiators.\n\nEdge computing brings server-side logic closer to users. Platforms like Cloudflare Workers and Vercel Edge Functions enable sub-millisecond response times for personalised content without the complexity of managing servers.\n\nWeb Components and the platform itself continue to mature. CSS has gained container queries, nesting, and cascade layers. The gap between what requires JavaScript and what the browser handles natively continues to shrink." },
  { id: 8, title: "Building Scalable E-Commerce Solutions", excerpt: "Learn how to create robust e-commerce platforms that can handle growth and provide excellent user experiences.", category: "E-Commerce", date: "December 12, 2024", readTime: "7 min read",
    body: "Scalable e-commerce starts with the right architecture. A headless approach separating your frontend from your commerce engine gives you the flexibility to scale each independently.\n\nUse a proven commerce platform (Shopify, WooCommerce, or Medusa) for the backend. These handle payments, inventory, taxes, and shipping out of the box. Build your custom frontend on top for the unique experience your brand requires.\n\nPerformance is directly tied to revenue. Every second of load time reduces conversions. Use static generation for product listing pages, edge caching for personalized content, and image CDNs for product photos.\n\nPlan for traffic spikes from the start. Sales events and marketing campaigns can increase traffic by 10-50x. Static pages and CDN delivery handle this naturally without infrastructure changes." },
  { id: 7, title: "UI/UX Design Principles for Better User Engagement", excerpt: "Discover key design principles that can significantly improve user engagement and conversion rates.", category: "Design", date: "December 10, 2024", readTime: "6 min read",
    body: "Great UX design is invisible. Users should accomplish their goals without thinking about the interface. When they notice the design, something has gone wrong.\n\nHick's Law tells us that decision time increases with the number of options. Limit choices on each screen. One primary call to action per section. Three pricing tiers maximum. Five navigation items or fewer.\n\nFitts's Law states that the time to reach a target depends on its size and distance. Make important buttons large and place them where users expect them. On mobile, keep primary actions within thumb reach.\n\nConsistency reduces cognitive load. Use the same patterns for similar actions throughout your application. If clicking a card opens a modal in one place, it should open a modal everywhere." },
  { id: 6, title: "Mobile-First Development - Why It Matters More Than Ever", excerpt: "Understanding the importance of mobile-first approach in today's digital landscape and how to implement it effectively.", category: "Mobile Development", date: "December 8, 2024", readTime: "4 min read",
    body: "Mobile traffic accounts for over 60% of web visits globally. Designing for mobile first is no longer a progressive approach; it is the baseline expectation.\n\nMobile-first means starting your design at the smallest viewport and progressively enhancing for larger screens. This forces you to prioritise content and functionality, resulting in cleaner designs at every breakpoint.\n\nIn CSS, mobile-first means writing base styles for mobile and using min-width media queries to add complexity for larger screens. Tailwind CSS follows this pattern by default, making it natural to build responsively.\n\nTest on real devices, not just browser emulators. Touch targets, scroll behaviour, and font rendering differ significantly between actual phones and desktop simulations." },
  { id: 5, title: "SEO Strategies That Actually Work", excerpt: "Cut through the noise and focus on SEO strategies that deliver real results for your website visibility.", category: "SEO", date: "December 5, 2024", readTime: "8 min read",
    body: "SEO has become increasingly complex, but the fundamentals remain simple: create valuable content, make it technically accessible, and earn authoritative backlinks.\n\nContent quality trumps quantity. A single comprehensive, well-researched article outperforms ten thin blog posts. Focus on answering real questions your audience asks, with depth and accuracy.\n\nTechnical SEO is table stakes. Fast load times, mobile responsiveness, clean URL structures, proper heading hierarchy, and structured data are baseline requirements, not competitive advantages.\n\nBacklinks from relevant, authoritative sites remain the strongest ranking signal. Earn them by creating genuinely useful resources, contributing expert insights to industry publications, and building relationships with other businesses in your space." },
  { id: 4, title: "The Rise of AI in Web Development", excerpt: "Explore how artificial intelligence is revolutionising web development and the tools you should know about.", category: "AI & Technology", date: "December 3, 2024", readTime: "6 min read",
    body: "Artificial intelligence is transforming every stage of the web development lifecycle, from design and development to testing and deployment.\n\nAI-powered design tools can generate layout suggestions, colour palettes, and even complete mockups from text descriptions. These are not replacements for designers but powerful starting points that accelerate the ideation process.\n\nCode generation with AI has become remarkably capable. Tools like GitHub Copilot, Cursor, and Claude can write functional components, debug issues, and refactor code. The key is using them as accelerators while maintaining code quality through review.\n\nAI testing tools can automatically generate test cases, identify visual regressions, and even predict which areas of your codebase are most likely to contain bugs based on historical patterns." },
  { id: 3, title: "Performance Optimisation - Making Your Website Lightning Fast", excerpt: "Learn practical techniques to optimise your website performance and improve user experience.", category: "Performance", date: "November 30, 2024", readTime: "7 min read",
    body: "Website performance is a feature. Users expect pages to load in under 3 seconds, and Google uses page speed as a ranking factor. Optimisation is not optional.\n\nStart with the biggest wins: optimise images, eliminate render-blocking resources, and reduce JavaScript bundle sizes. These three changes alone can cut load times in half for most sites.\n\nImages are typically the largest assets on any page. Use modern formats like WebP and AVIF, implement responsive images with srcset, and lazy-load images below the fold. The Next.js Image component handles most of this automatically.\n\nMinimise critical-path CSS by inlining above-the-fold styles and deferring the rest. Remove unused CSS with tree-shaking tools. Consider static generation to eliminate server response time entirely." },
  { id: 2, title: "Cybersecurity Best Practices for Web Applications", excerpt: "Essential security measures every web developer should implement to protect applications and user data.", category: "Security", date: "November 28, 2024", readTime: "9 min read",
    body: "Every web application is a target. The question is not if you will face an attack, but when. Implementing security best practices from the start is far cheaper than recovering from a breach.\n\nUse HTTPS everywhere. There is no excuse for serving any content over plain HTTP. Modern hosting platforms provide free SSL certificates. HSTS headers ensure browsers always use the secure connection.\n\nSanitise all user input. Cross-site scripting (XSS) and SQL injection remain the most common web vulnerabilities because developers trust user input. Never insert user-provided data into HTML, SQL, or shell commands without proper encoding.\n\nKeep dependencies updated. Known vulnerabilities in outdated packages are the easiest attack vector. Run npm audit regularly and set up automated dependency update tools like Dependabot." },
  { id: 1, title: "Cloud Computing for Small Businesses - A Complete Guide", excerpt: "Everything small businesses need to know about leveraging cloud computing for growth and efficiency.", category: "Cloud Computing", date: "November 25, 2024", readTime: "10 min read",
    body: "Cloud computing levels the playing field for small businesses. Services that once required significant capital investment in servers and IT staff are now available on a pay-as-you-go basis.\n\nStart with the basics: cloud email (Google Workspace or Microsoft 365), cloud storage (Google Drive, Dropbox, or OneDrive), and cloud-based productivity tools. These eliminate the need for on-premises servers and enable remote work.\n\nFor your website, cloud hosting through platforms like Vercel, Netlify, or AWS Amplify provides global CDN delivery, automatic scaling, and near-zero maintenance. Static sites can be hosted for free or nearly free.\n\nSecurity in the cloud is often better than on-premises for small businesses. Cloud providers invest heavily in security infrastructure, automated patching, and monitoring that most small businesses could never afford independently." },
];

function getPost(id: number) {
  return blogPosts.find((p) => p.id === id);
}

/* Generate static pages for all 31 posts */
export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: String(post.id) }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const post = getPost(Number(params.id));
  return {
    title: post?.title || "Blog Post",
    description: post?.excerpt || "",
    alternates: { canonical: `/blog/${params.id}` },
  };
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = getPost(Number(params.id));

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 underline">Back to Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  /* Find adjacent posts for navigation */
  const currentIndex = blogPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  /* Related posts - same category, excluding current */
  const related = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero with category image */}
      <section className="pt-16 pb-12 relative overflow-hidden bg-gray-900">
        <Image
          src={blogCategoryImages[post.category] || "/images/blog/web-development.jpg"}
          alt={post.category}
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          priority
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <Breadcrumbs />
          <div className="mt-6">
            <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-200">
              <span>Zero One Works</span>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 font-medium leading-relaxed border-l-4 border-gray-300 dark:border-gray-600 pl-6">
            {post.excerpt}
          </p>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.body.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      {/* Post navigation */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-start gap-8">
            {prevPost ? (
              <Link href={`/blog/${prevPost.id}`} className="group flex-1">
                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Previous</span>
                <p className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors line-clamp-2 mt-1">
                  {prevPost.title}
                </p>
              </Link>
            ) : <div className="flex-1" />}
            {nextPost ? (
              <Link href={`/blog/${nextPost.id}`} className="group flex-1 text-right">
                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Next</span>
                <p className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors line-clamp-2 mt-1">
                  {nextPost.title}
                </p>
              </Link>
            ) : <div className="flex-1" />}
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((r) => (
                <Link key={r.id} href={`/blog/${r.id}`}>
                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <div className="relative h-40">
                      <Image
                        src={blogCategoryImages[r.category] || "/images/blog/web-development.jpg"}
                        alt={r.category}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2 line-clamp-2">{r.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{r.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to blog CTA */}
      <section className="py-12 bg-gray-900 text-center">
        <Link href="/blog" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          Back to All Posts
        </Link>
      </section>

      <Footer />
    </div>
  );
}
