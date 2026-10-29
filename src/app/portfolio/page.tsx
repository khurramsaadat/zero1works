"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { PortfolioHeroSvg } from "@/components/illustrations/HeroIllustrations";

/* Skeleton card shown while images are loading */
function SkeletonCard() {
  return (
    <div className="rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 animate-pulse">
      <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-800" />
      <div className="px-3 py-2.5 space-y-1.5">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
        <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-full" />
      </div>
    </div>
  );
}

function PortfolioCoverImage({
  src,
  alt,
  title,
  index,
}: {
  src: string;
  alt: string;
  title: string;
  index: number;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
        <div className="text-center text-white p-3">
          <div className="text-sm font-semibold">{title}</div>
        </div>
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={`${alt} - project screenshot`}
      width={800}
      height={520}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      priority={index < 4}
      loading={index < 4 ? "eager" : "lazy"}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      onError={() => setFailed(true)}
    />
  );
}

type SortOption = "newest" | "az" | "category";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("newest");
  const gridRef = useRef<HTMLDivElement>(null);
  const projectsPerPage = 12;

  const projects = [
    { id: 1, title: "Grind Me Fine", description: "Specialty coffee house with menu, reviews, and gallery", image: "/images/portfolio/grind-me-fine.jpg", category: "Hospitality", link: "https://grindme-fine.netlify.app/" },
    { id: 2, title: "Roastery Station", description: "Premium coffee brand with multi-location reviews", image: "/images/portfolio/roastery-station.jpg", category: "Hospitality", link: "https://roasterysta.netlify.app/" },
    { id: 3, title: "UNO Espresso", description: "Family cafe with Google reviews and online ordering", image: "/images/portfolio/uno-espresso.jpg", category: "Hospitality", link: "https://uno-espresso.netlify.app/" },
    { id: 4, title: "TumaCafe", description: "Restaurant site with menu and multi-platform ordering", image: "/images/portfolio/tumacafe.jpg", category: "Hospitality", link: "https://tumacaferest.netlify.app/" },
    { id: 5, title: "Lunar Beauty", description: "Premium ladies salon with booking via Fresha", image: "/images/portfolio/lunar-beauty.jpg", category: "Hospitality", link: "https://lunarbeauty-lounge.netlify.app/" },
    { id: 6, title: "Black Beared", description: "Gents salon with services, pricing, and reviews", image: "/images/portfolio/black-beared.jpg", category: "Hospitality", link: "https://black-beared.netlify.app/" },
    { id: 7, title: "Take My Trip", description: "Tour booking platform for safaris and city tours", image: "/images/portfolio/take-my-trip.jpg", category: "Travel", link: "https://take-mytrip.netlify.app/" },
    { id: 8, title: "Dubai Bikes", description: "Motorcycle dealership with test ride booking", image: "/images/portfolio/dubai-bikes.jpg", category: "Automotive", link: "https://dubaibikes.netlify.app/" },
    { id: 9, title: "Ibex Design", description: "Design agency showcasing brand and web services", image: "/images/portfolio/ibex-design.jpg", category: "Design Agency", link: "https://ibexdesign.netlify.app/" },
    { id: 10, title: "PDF Tools", description: "All-in-one browser-based PDF suite", image: "/images/portfolio/pdf-tools.jpg", category: "PDF Tools", link: "https://pdfs-tools.netlify.app/" },
    { id: 11, title: "PDF Merger", description: "Merge PDFs and images into a single document", image: "/images/portfolio/pdf-image-merger.jpg", category: "PDF Tools", link: "https://pdf-images-doc-merger.netlify.app/" },
    { id: 12, title: "SnapFormat", description: "Batch image converter for 10+ formats", image: "/images/portfolio/snapformat.jpg", category: "Utilities", link: "https://snapformat.org/" },
    { id: 13, title: "Files & Folders", description: "Batch rename, resize, and folder tree viewer", image: "/images/portfolio/files-folders.jpg", category: "Utilities", link: "https://filesfolders.netlify.app/" },
    { id: 14, title: "FavOG", description: "Favicon and Open Graph meta tag generator", image: "/images/portfolio/favog.jpg", category: "Utilities", link: "https://favog.netlify.app/" },
    { id: 15, title: "Image Resizer", description: "Free online image resizer and converter", image: "/images/portfolio/image-resizer.jpg", category: "Utilities", link: "https://image-conver.netlify.app/" },
    { id: 16, title: "Map Explorer", description: "Interactive map with data layers and discovery", image: "/images/portfolio/map-explorer.jpg", category: "Utilities", link: "https://mapexplorer.netlify.app/" },
    { id: 17, title: "VidEnc", description: "Client-side video encoder with H.264 support", image: "/images/portfolio/videnc.jpg", category: "Video Tools", link: "https://videnc.netlify.app/" },
    { id: 18, title: "VidCon", description: "E2E encrypted video communication platform", image: "/images/portfolio/vid-conn.jpg", category: "Video Tools", link: "https://vid-conn.netlify.app/" },
    { id: 19, title: "BatchMark", description: "Bulk watermark and resize studio for photos", image: "/images/portfolio/batchmark.jpg", category: "Creative Tools", link: "https://batchmark.netlify.app/" },
    { id: 20, title: "Memories in Motion", description: "Cinematic photo slideshow creator", image: "/images/portfolio/memories-in-motion.jpg", category: "Creative Tools", link: "https://album-slideshow.netlify.app/" },
    { id: 21, title: "Zenote", description: "Minimal note-taking workspace with nested folders", image: "/images/portfolio/zenote.jpg", category: "Productivity", link: "https://zenote-live.netlify.app/" },
    { id: 22, title: "Project Board", description: "Kanban-style task management workspace", image: "/images/portfolio/proj-manage.jpg", category: "Productivity", link: "https://proj-manage.netlify.app/" },
    { id: 23, title: "DFRE Unipoles", description: "Media campaigns tracking with analytics", image: "/images/portfolio/dfre-report.jpg", category: "Business Tools", link: "https://dfre-report.netlify.app/" },
    { id: 24, title: "Layouts Dashboard", description: "Digital display format management system", image: "/images/portfolio/layouts-dashboard.jpg", category: "Business Tools", link: "https://layouts-dashboard.netlify.app/" },
    { id: 25, title: "DM Gallery", description: "Airport digital media screen management", image: "/images/portfolio/dm-gallery.jpg", category: "Business Tools", link: "https://digital-media-gallery.netlify.app/" },
    { id: 26, title: "Vendor Gallery", description: "Digital signage screens for luxury brands", image: "/images/portfolio/vendor-lib.jpg", category: "Business Tools", link: "https://vendor-lib.netlify.app/" },
    { id: 27, title: "DDF Promo", description: "Real-time promo scheduling dashboard", image: "/images/portfolio/ddf-promo.jpg", category: "Business Tools", link: "https://ddf-promo-schedule.netlify.app/" },
    { id: 28, title: "Solarization", description: "Interactive 3D Solar System explorer", image: "/images/portfolio/solarization.jpg", category: "Education", link: "https://solarization.netlify.app/" },
    { id: 29, title: "Al-Qari", description: "Quran recitation and memorization app", image: "/images/portfolio/al-qari.jpg", category: "Education", link: "https://recitation-alqari.netlify.app/" },
    { id: 30, title: "Playback & Learn", description: "Video player with A/B loop and speed control", image: "/images/portfolio/playback-learn.jpg", category: "Education", link: "https://playbacks.netlify.app/" },
    { id: 31, title: "Track My Workout", description: "AI workout tracker with pose detection", image: "/images/portfolio/track-my-workout.jpg", category: "Health & Fitness", link: "https://track-my-workout.netlify.app/" },
    { id: 32, title: "UAE Gratuity", description: "End-of-service gratuity calculator for UAE", image: "/images/portfolio/uae-gratuity.jpg", category: "Finance", link: "https://my-gratuity.netlify.app/" },
    { id: 33, title: "StockPulse", description: "Global stock terminal with live market data", image: "/images/portfolio/stock-pulse.jpg", category: "Finance", link: "https://stock-pulse-app.netlify.app/" },
    { id: 34, title: "FalconCity", description: "Community service charges payment guide", image: "/images/portfolio/falconcity.jpg", category: "Real Estate", link: "https://falconcity.netlify.app/" },
    { id: 35, title: "Personality360", description: "Big Five personality assessment platform", image: "/images/portfolio/personality-app.jpg", category: "Psychology", link: "https://personalityapp.netlify.app/" },
    { id: 36, title: "Pacman", description: "Classic arcade game with ghost AI", image: "/images/portfolio/pacman.jpg", category: "Games", link: "https://pacmans.netlify.app/" },
    { id: 37, title: "Tic Tac Toe", description: "Multi-mode game with adaptive AI opponent", image: "/images/portfolio/tic-tac-toe.jpg", category: "Games", link: "https://khurram-tic-tac-toe.netlify.app/" },
    { id: 38, title: "N-Place", description: "Name, Place, Animal, Thing word game", image: "/images/portfolio/n-place.jpg", category: "Games", link: "https://n-place.netlify.app/" },
    { id: 39, title: "Flappy Bird", description: "Tap-to-fly clone with score tracking", image: "/images/portfolio/flappy-bird.jpg", category: "Games", link: "https://flappy-birrd.netlify.app/" },
    { id: 40, title: "FolderVault", description: "Browser-based local file backup tool", image: "/images/portfolio/foldervault.jpg", category: "Utilities", link: "https://drive-archive.netlify.app/" },
    { id: 41, title: "3D Chess", description: "Three.js chess with engine mode and camera views", image: "/images/portfolio/chess-3d.jpg", category: "Games", link: "https://chess-3d-chess.netlify.app/" },
    { id: 42, title: "KS Portfolio", description: "Creative Manager and Digital Strategist portfolio", image: "/images/portfolio/portfolio-khurram.jpg", category: "Design Agency", link: "https://portfolio-test-me1.netlify.app/" },
    { id: 43, title: "BBC FM Radio", description: "Interactive radio UI with multiple BBC channels", image: "/images/portfolio/bbc-fm.jpg", category: "Entertainment", link: "https://bbc-fm.netlify.app/" },
    { id: 44, title: "Discovery Monitor", description: "Healthcare market intelligence dashboard", image: "/images/portfolio/discovery-monitor.jpg", category: "Finance", link: "https://discovery-monitor.netlify.app/" },
    { id: 45, title: "Tarteel Hifz", description: "Quran memorization companion with progress tracking", image: "/images/portfolio/tarteel-hifz.jpg", category: "Education", link: "https://tarteel-hifz.netlify.app/" },
    { id: 46, title: "Rocket Web", description: "Conversion-focused web agency template", image: "/images/portfolio/rocketweb.jpg", category: "Templates", link: "https://rocketweb-vscode-cline-glm53free.netlify.app/" },
    { id: 47, title: "KH Estate", description: "Luxury real estate agency template", image: "/images/portfolio/estate-website.jpg", category: "Templates", link: "https://vscode-cline-test-estate-website.netlify.app/" },
    { id: 48, title: "Formula 1 Race", description: "3D Three.js car racing experience", image: "/images/portfolio/formula1.jpg", category: "Games", link: "https://formula1race.netlify.app/" },
    { id: 49, title: "Grand Prix", description: "Browser-based 3D racing with lap timing", image: "/images/portfolio/grandprix.jpg", category: "Games", link: "https://grandprix-race.netlify.app/" },
    { id: 50, title: "Snake AI", description: "Terminal snake with AI mode and hacker aesthetic", image: "/images/portfolio/snake-ai.jpg", category: "Games", link: "https://snake-z-dot-ai.netlify.app/" },
    { id: 51, title: "IronLog AI", description: "AI gym workout logger with Google AI Studio", image: "/images/portfolio/ironlog.jpg", category: "Health & Fitness", link: "https://ironlog-ai-studio.netlify.app/" },
    { id: 52, title: "DumbbellHome", description: "Home dumbbell workout dashboard", image: "/images/portfolio/dumbbell.jpg", category: "Health & Fitness", link: "https://dumbbell-home.netlify.app/" },
    { id: 53, title: "Playland", description: "Kids arcade with 15 fun browser games", image: "/images/portfolio/playland.jpg", category: "Games", link: "https://baba-games.netlify.app/" },
    { id: 54, title: "Solitaire", description: "Classic card solitaire with Draw 1 and Draw 3", image: "/images/portfolio/solitaire.jpg", category: "Games", link: "https://baba-solitaire.netlify.app/" },
    { id: 55, title: "AppSphere", description: "Modern SaaS landing page template", image: "/images/portfolio/appsphere.jpg", category: "Templates", link: "https://app-sphere-app.netlify.app/" },
    { id: 56, title: "Utility Tools", description: "50+ free browser-based dev and productivity tools", image: "/images/portfolio/utility-tools.jpg", category: "Utilities", link: "https://utility-tools-free.netlify.app/" },
    { id: 57, title: "Dubi Developers", description: "Dubai property developer with 15 live projects", image: "/images/portfolio/dubi-developers.jpg", category: "Real Estate", link: "https://dubi-developers.netlify.app/" },
    { id: 58, title: "Pomodoro", description: "Focus timer with task queue and daily goals", image: "/images/portfolio/pomodoro.jpg", category: "Productivity", link: "https://po-modoro.netlify.app/" },
    { id: 59, title: "PomoFlow", description: "Minimal Pomodoro with Focus and Break modes", image: "/images/portfolio/pomoflow.jpg", category: "Productivity", link: "https://pomoflow-ticking.netlify.app/" },
  ];

  /* imagesLoaded is always true (skeleton removed to avoid set-state-in-effect) */
  const imagesLoaded = true;

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  /* Search filter */
  const searchFiltered = search.trim()
    ? projects.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase()) ||
          p.category.toLowerCase().includes(search.toLowerCase())
      )
    : projects;

  /* Category filter */
  const categoryFiltered = filter === "All" ? searchFiltered : searchFiltered.filter((p) => p.category === filter);

  /* Sort */
  const sorted = [...categoryFiltered].sort((a, b) => {
    if (sort === "az") return a.title.localeCompare(b.title);
    if (sort === "category") return a.category.localeCompare(b.category) || a.title.localeCompare(b.title);
    return b.id - a.id; // newest first (highest ID)
  });

  const totalPages = Math.ceil(sorted.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = sorted.slice(startIndex, endIndex);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    gridRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero - mesh gradient with SVG illustration */}
      <section className="pt-16 pb-8 relative overflow-hidden min-h-[260px]">
        <div className="absolute inset-0 bg-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,rgba(78,78,96,0.12),transparent)]" />
        <PortfolioHeroSvg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="mb-4">
            <Breadcrumbs />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-3">
              {sorted.length} Projects
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Work</h1>
            <p className="text-base text-gray-400 max-w-2xl mx-auto mb-6">
              Real projects across {categories.length - 1} industries. Every card links to a live site.
            </p>

            {/* Search bar */}
            <div className="max-w-md mx-auto mb-6">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                  className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                  aria-label="Search portfolio projects"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => { setSearch(""); setCurrentPage(1); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    aria-label="Clear search"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {categories.map((category) => {
                const count = category === "All" ? projects.length : projects.filter((p) => p.category === category).length;
                return (
                  <button
                    key={category}
                    onClick={() => handleFilterChange(category)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      filter === category
                        ? "bg-white text-gray-900 shadow-sm"
                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                    }`}
                  >
                    {category}
                    <span className={`ml-1.5 ${filter === category ? "text-gray-500" : "text-gray-600"}`}>{count}</span>
                  </button>
                );
              })}
            </div>

            {/* Sort */}
            <div className="flex justify-center">
              <select
                value={sort}
                onChange={(e) => { setSort(e.target.value as SortOption); setCurrentPage(1); }}
                className="bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-white/30 cursor-pointer"
                aria-label="Sort projects"
              >
                <option value="newest">Newest First</option>
                <option value="az">A - Z</option>
                <option value="category">By Category</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section id="main-content" className="py-10 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Showing {sorted.length === 0 ? 0 : startIndex + 1}-{Math.min(endIndex, sorted.length)} of {sorted.length}
              {filter !== "All" && ` in ${filter}`}
              {search && ` matching "${search}"`}
            </p>
          </div>

          {/* Skeleton or real grid */}
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
            {!imagesLoaded
              ? Array.from({ length: Math.min(projectsPerPage, sorted.length) }).map((_, i) => <SkeletonCard key={i} />)
              : currentProjects.map((project, index) => (
                  <a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700 hover:-translate-y-0.5"
                    aria-label={`${project.title} - ${project.description}. Opens in new tab.`}
                  >
                    {/* Image - ~80% of card */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {project.image ? (
                        <PortfolioCoverImage src={project.image} alt={project.title} title={project.title} index={index} />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                          <span className="text-sm text-white font-medium">{project.title}</span>
                        </div>
                      )}

                      {/* Category pill on image */}
                      <div className="absolute bottom-2 left-2">
                        <span className="inline-block px-2.5 py-1 bg-gray-900/80 backdrop-blur-sm text-white text-[10px] font-medium rounded-full tracking-wide uppercase">
                          {project.category}
                        </span>
                      </div>

                      {/* Hover overlay with "View Live Site" tooltip */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                          <svg className="w-3.5 h-3.5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          <span className="text-xs font-medium text-gray-900">View Live Site</span>
                        </div>
                      </div>
                    </div>

                    {/* Slim footer */}
                    <div className="px-3 py-2.5">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">{project.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">{project.description}</p>
                    </div>
                  </a>
                ))}
          </div>

          {/* No results */}
          {sorted.length === 0 && imagesLoaded && (
            <div className="text-center py-16">
              <p className="text-gray-500 dark:text-gray-400 mb-2">No projects found</p>
              <button
                type="button"
                onClick={() => { setSearch(""); setFilter("All"); setCurrentPage(1); }}
                className="text-sm text-gray-700 dark:text-gray-300 underline hover:no-underline"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="h-8 px-3 text-xs">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                <span className="hidden sm:inline">Prev</span>
              </Button>
              <div className="hidden sm:flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`h-8 w-8 rounded-lg text-xs font-medium transition-colors ${
                      currentPage === page
                        ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    aria-label={`Page ${page}`}
                    aria-current={currentPage === page ? "page" : undefined}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <div className="sm:hidden text-xs text-gray-500 px-3">{currentPage} / {totalPages}</div>
              <Button variant="outline" size="sm" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="h-8 px-3 text-xs">
                <span className="hidden sm:inline">Next</span>
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
