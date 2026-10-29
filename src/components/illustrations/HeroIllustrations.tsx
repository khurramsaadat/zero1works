/* Image paths for page heroes, blog cards, and process steps.
   All images are from Pexels (free license) stored in public/images/. */

/* Hero background image paths */
export const heroImages = {
  portfolio: "/images/pages/hero-portfolio.jpg",
  services: "/images/pages/hero-services.jpg",
  process: "/images/pages/hero-process.jpg",
  blog: "/images/pages/hero-blog.jpg",
  about: "/images/pages/hero-about.jpg",
} as const;

/* Blog category-to-image map */
export const blogCategoryImages: Record<string, string> = {
  "Web Development": "/images/blog/web-development.jpg",
  "E-Commerce": "/images/blog/e-commerce.jpg",
  "Design": "/images/blog/design.jpg",
  "Mobile Development": "/images/blog/mobile-development.jpg",
  "SEO": "/images/blog/seo.jpg",
  "AI & Technology": "/images/blog/ai-technology.jpg",
  "Performance": "/images/blog/performance.jpg",
  "Security": "/images/blog/security.jpg",
  "Cloud Computing": "/images/blog/cloud-computing.jpg",
  "Business": "/images/blog/business.jpg",
  "Accessibility": "/images/blog/accessibility.jpg",
  "DevOps": "/images/blog/devops.jpg",
};

/* Process step images */
export const processStepImages = [
  "/images/pages/process-audit.jpg",
  "/images/pages/process-ux.jpg",
  "/images/pages/process-ui.jpg",
  "/images/pages/process-launch.jpg",
] as const;

/* WhyChooseUs image */
export const whyChooseUsImage = "/images/pages/why-choose-us.jpg";

/* Per-post image - cycles through all category images so related posts look different */
const allBlogImages = Object.values(blogCategoryImages);
export function getPostImage(postIndex: number): string {
  return allBlogImages[postIndex % allBlogImages.length];
}

/* Generate a URL-friendly slug from a title */
export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
