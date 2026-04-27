"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function PortfolioCoverImage({
  src,
  alt,
  title,
  category,
  index,
}: {
  src: string;
  alt: string;
  title: string;
  category: string;
  index: number;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
        <div className="text-center text-white p-4">
          <div className="text-2xl font-bold mb-2">{title}</div>
          <div className="text-sm opacity-90">{category}</div>
        </div>
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={520}
      className="w-full h-full object-cover"
      priority={index < 4}
      loading={index < 4 ? "eager" : "lazy"}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      onError={() => setFailed(true)}
    />
  );
}

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9; // 3x3 grid

  const projects = [
    // Hospitality - Real client cafe websites
    {
      id: 1,
      title: "Grind Me Fine",
      description: "Specialty coffee house website for a women-owned cafe in Al Barsha, Dubai. Features menu, real Google reviews, gallery, and location details.",
      image: "/images/portfolio/grind-me-fine.jpg",
      category: "Hospitality",
      link: "https://grind-me-fine.netlify.app/"
    },
    {
      id: 2,
      title: "Roastery Station",
      description: "Premium specialty coffee brand site with 3 Dubai locations. Includes gallery, multi-location reviews, and opening hours.",
      image: "/images/portfolio/roastery-station.jpg",
      category: "Hospitality",
      link: "https://roastery-station.netlify.app/"
    },
    // Travel
    {
      id: 3,
      title: "Take My Trip",
      description: "Dubai tour and adventure booking platform covering desert safaris, city tours, dhow cruises, and top attraction tickets.",
      image: "/images/portfolio/take-my-trip.jpg",
      category: "Travel",
      link: "https://take-my-trip.netlify.app/"
    },
    // Design & Agency
    {
      id: 4,
      title: "Ibex Design",
      description: "Award-winning design agency website showcasing brand identity, web design, UI/UX, and corporate communications services.",
      image: "/images/portfolio/ibex-design.jpg",
      category: "Design Agency",
      link: "https://ibexdesign.netlify.app/"
    },
    // PDF & Document Tools
    {
      id: 5,
      title: "PDF Tools Platform",
      description: "All-in-one PDF suite with merge, split, compress, and convert capabilities. Fully browser-based with no uploads required.",
      image: "/images/portfolio/pdf-tools.jpg",
      category: "PDF Tools",
      link: "https://pdfs-tools.netlify.app/"
    },
    {
      id: 6,
      title: "PDF & Image Merger",
      description: "Browser-based tool to merge PDFs, convert images (JPG, PNG) and documents (Word, Excel, TXT) into a single PDF. 100% private.",
      image: "/images/portfolio/pdf-image-merger.jpg",
      category: "PDF Tools",
      link: "https://pdf-images-doc-merger.netlify.app/"
    },
    // File & Productivity Utilities
    {
      id: 7,
      title: "Files & Folders",
      description: "Free browser-based file tools - batch rename files with pattern support, bulk resize images, and visualize folder structures as interactive trees.",
      image: "/images/portfolio/files-folders.jpg",
      category: "Utilities",
      link: "https://filesfolders.netlify.app/"
    },
    {
      id: 8,
      title: "FavOG",
      description: "Favicon and Open Graph generator tool. Create favicons in all required sizes and generate OG meta tags - all in the browser, no sign-up needed.",
      image: "/images/portfolio/favog.jpg",
      category: "Utilities",
      link: "https://favog.netlify.app/"
    },
    {
      id: 9,
      title: "Image Resizer",
      description: "Free online image resizer supporting JPG, PNG, WebP, and GIF. Resize, convert, and optimize images with multiple processing tools.",
      image: "/images/portfolio/image-resizer.jpg",
      category: "Utilities",
      link: "https://image-conver.netlify.app/"
    },
    // Video Tools
    {
      id: 10,
      title: "VidEnc",
      description: "Client-side video encoder inspired by HandBrake. Supports H.264 encoding, format conversion, and quality settings - files stay on your device.",
      image: "/images/portfolio/videnc.jpg",
      category: "Video Tools",
      link: "https://videnc.netlify.app/"
    },
    {
      id: 11,
      title: "VidCon",
      description: "Video communication platform with E2E encryption. Clean, modern UI for video calling with code-based room joining.",
      image: "/images/portfolio/vid-conn.jpg",
      category: "Video Tools",
      link: "https://vid-conn.netlify.app/"
    },
    // Creative & Media Tools
    {
      id: 12,
      title: "BatchMark",
      description: "Bulk watermark and image resizing studio for photographers. Add text or image watermarks to hundreds of photos instantly - no uploads.",
      image: "/images/portfolio/batchmark.jpg",
      category: "Creative Tools",
      link: "https://batchmark.netlify.app/"
    },
    {
      id: 13,
      title: "Memories in Motion",
      description: "Cinematic photo slideshow creator with immersive transitions. Drag and drop photos to build and export beautiful slideshows.",
      image: "/images/portfolio/memories-in-motion.jpg",
      category: "Creative Tools",
      link: "https://album-slideshow.netlify.app/"
    },
    // Education & Learning
    {
      id: 14,
      title: "Al-Qari",
      description: "Quran recitation and memorization app. Upload surah recordings in chunks for structured practice and review sessions.",
      image: "/images/portfolio/al-qari.jpg",
      category: "Education",
      link: "https://recitation-alqari.netlify.app/"
    },
    {
      id: 15,
      title: "Playback & Learn",
      description: "Video and audio learning player with A/B loop, zoom, and playback speed control. Ideal for language learners and musicians.",
      image: "/images/portfolio/playback-learn.jpg",
      category: "Education",
      link: "https://playbacks.netlify.app/"
    },
    // Health & Fitness
    {
      id: 16,
      title: "Track My Workout",
      description: "AI-powered workout tracker with real-time pose detection and form scoring. Select exercises and let the AI coach guide your reps.",
      image: "/images/portfolio/track-my-workout.jpg",
      category: "Health & Fitness",
      link: "https://track-my-workout.netlify.app/"
    },
    // Finance & Utilities
    {
      id: 17,
      title: "UAE Gratuity Calculator",
      description: "End-of-service gratuity calculator aligned with UAE labor law. Handles resignation, termination, deductions, and additions with PDF export.",
      image: "/images/portfolio/uae-gratuity.jpg",
      category: "Finance",
      link: "https://my-gratuity.netlify.app/"
    },
    // Psychology
    {
      id: 18,
      title: "Personality360",
      description: "Comprehensive psychological assessment platform with Big Five personality, empathy mapping, and cognitive ability tests.",
      image: "/images/portfolio/personality-app.jpg",
      category: "Psychology",
      link: "https://personalityapp.netlify.app/"
    },
    // Games
    {
      id: 19,
      title: "Pacman",
      description: "Classic Pacman arcade game recreation with multiple ghost AI characters (Blinky, Pinky, Inky, Clyde), power pellets, and level progression.",
      image: "/images/portfolio/pacman.jpg",
      category: "Games",
      link: "https://pacmans.netlify.app/"
    },
    {
      id: 20,
      title: "Tic Tac Toe",
      description: "Multi-mode Tic Tac Toe - classic 2-player, 3-marks-each variant, vs system, and an adaptive AI learning opponent.",
      image: "/images/portfolio/tic-tac-toe.jpg",
      category: "Games",
      link: "https://khurram-tic-tac-toe.netlify.app/"
    },
    {
      id: 21,
      title: "N-Place Word Game",
      description: "Browser-based word game where players fill in Name, Place, Animal, and Thing for a random letter within a time limit. Tracks scores and history.",
      image: "/images/portfolio/n-place.jpg",
      category: "Games",
      link: "https://n-place.netlify.app/"
    },
    {
      id: 22,
      title: "Flappy Bird",
      description: "Faithful Flappy Bird clone with responsive tap-to-fly controls, pipe obstacle generation, and score tracking.",
      image: "/images/portfolio/flappy-bird.jpg",
      category: "Games",
      link: "https://flappy-birrd.netlify.app/"
    }
  ];

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // Reset to page 1 when filter changes
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of portfolio section
    document.getElementById('portfolio-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 pb-12 relative overflow-hidden min-h-[280px]">
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=center"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-[1]"
          aria-hidden
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-[2]">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto mb-8">
              Explore our diverse collection of successful projects across various industries. 
              Each project represents our commitment to excellence and innovation in web development.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange(category)}
                  className="btn-hover-effect"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Info */}
          <div className="mb-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredProjects.length)} of {filteredProjects.length} projects
              {filter !== "All" && ` in ${filter}`}
            </p>
          </div>

          <div id="portfolio-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {currentProjects.map((project, index) => (
              <Card key={project.id} className="card-hover-effect overflow-hidden group">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative h-[300px] overflow-hidden rounded-t-xl">
                      {/* Conditional Image Display */}
                      {project.image ? (
                        <PortfolioCoverImage
                          src={project.image}
                          alt={project.title}
                          title={project.title}
                          category={project.category}
                          index={index}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                          <div className="text-center text-white p-4">
                            <div className="text-2xl font-bold mb-2">{project.title}</div>
                            <div className="text-sm opacity-90">{project.category}</div>
                          </div>
                        </div>
                      )}
                      
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                            {project.description}
                          </p>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            {project.category}
                          </span>
                          <svg 
                            className="w-6 h-6 text-gray-600 dark:text-gray-400 transition-transform group-hover:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </CardContent>
                  </a>
                ) : (
                  <>
                    <div className="relative h-[300px] overflow-hidden rounded-t-xl">
                      {/* Conditional Image Display */}
                      {project.image ? (
                        <PortfolioCoverImage
                          src={project.image}
                          alt={project.title}
                          title={project.title}
                          category={project.category}
                          index={index}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                          <div className="text-center text-white p-4">
                            <div className="text-2xl font-bold mb-2">{project.title}</div>
                            <div className="text-sm opacity-90">{project.category}</div>
                          </div>
                        </div>
                      )}
                      
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-sm line-clamp-2">
                            {project.description}
                          </p>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            {project.category}
                          </span>
                          <svg 
                            className="w-6 h-6 text-gray-600 dark:text-gray-400 transition-transform group-hover:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </CardContent>
                  </>
                )}
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              {/* Previous Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="btn-hover-effect"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden md:inline">Previous</span>
              </Button>

              {/* Page Numbers - Hidden on mobile, visible on tablet/desktop */}
              <div className="hidden sm:flex items-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                    className="btn-hover-effect min-w-[40px]"
                  >
                    {page}
                  </Button>
                ))}
              </div>

              {/* Mobile Page Indicator - Simple text showing current page */}
              <div className="sm:hidden text-sm text-gray-600 dark:text-gray-400 px-3 py-2">
                Page {currentPage} of {totalPages}
              </div>

              {/* Next Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="btn-hover-effect"
              >
                <span className="hidden md:inline">Next</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
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
