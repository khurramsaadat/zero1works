"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const FeaturesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);

  // Curated featured work aligned with /portfolio (real shipped projects and live links).
  const projects = [
    {
      id: 1,
      title: "Grind Me Fine",
      description:
        "Specialty coffee house website for a women-owned cafe in Al Barsha, Dubai. Features menu, real Google reviews, gallery, and location details.",
      image: "/images/portfolio/grind-me-fine.jpg",
      category: "Hospitality",
      link: "https://grind-me-fine.netlify.app/",
    },
    {
      id: 2,
      title: "Take My Trip",
      description:
        "Dubai tour and adventure booking platform covering desert safaris, city tours, dhow cruises, and top attraction tickets.",
      image: "/images/portfolio/take-my-trip.jpg",
      category: "Travel",
      link: "https://take-my-trip.netlify.app/",
    },
    {
      id: 3,
      title: "Ibex Design",
      description:
        "Award-winning design agency website showcasing brand identity, web design, UI/UX, and corporate communications services.",
      image: "/images/portfolio/ibex-design.jpg",
      category: "Design Agency",
      link: "https://ibexdesign.netlify.app/",
    },
    {
      id: 4,
      title: "PDF Tools Platform",
      description:
        "All-in-one PDF suite with merge, split, compress, and convert capabilities. Fully browser-based with no uploads required.",
      image: "/images/portfolio/pdf-tools.jpg",
      category: "PDF Tools",
      link: "https://pdfs-tools.netlify.app/",
    },
    {
      id: 5,
      title: "Files & Folders",
      description:
        "Free browser-based file tools - batch rename files with pattern support, bulk resize images, and visualize folder structures as interactive trees.",
      image: "/images/portfolio/files-folders.jpg",
      category: "Utilities",
      link: "https://filesfolders.netlify.app/",
    },
    {
      id: 6,
      title: "Personality360",
      description:
        "Comprehensive psychological assessment platform with Big Five personality, empathy mapping, and cognitive ability tests.",
      image: "/images/portfolio/personality-app.jpg",
      category: "Psychology",
      link: "https://personalityapp.netlify.app/",
    },
  ];

  // Check viewport size for responsive layout
  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setIsDesktop(width >= 1024); // lg breakpoint (desktop only)
      setIsMobileLandscape(width > height && width < 1024); // mobile landscape
    };
    
    checkViewport();
    window.addEventListener('resize', checkViewport);
    
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Determine cards per slide based on viewport
  const cardsPerSlide = isDesktop ? 2 : (isMobileLandscape ? 2 : 1);
  const totalSlides = Math.ceil(projects.length / cardsPerSlide);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-none lg:max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
            Our Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our latest work and see how we&apos;ve helped businesses transform their digital presence
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-slate-800 shadow-lg rounded-full p-3 btn-hover-effect hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-slate-800 shadow-lg rounded-full p-3 btn-hover-effect hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden mx-12 lg:mx-20">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className={`grid gap-10 ${isDesktop || isMobileLandscape ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {projects.slice(slideIndex * cardsPerSlide, slideIndex * cardsPerSlide + cardsPerSlide).map((project) => (
                                              <Card key={project.id} className="card-hover-effect overflow-hidden group mx-2 lg:mx-0">
                        {project.link ? (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                            <div className="relative h-[240px] lg:h-[380px] overflow-hidden rounded-t-xl">
                              {/* Conditional Image Display */}
                              {project.image ? (
                                <Image
                                  src={project.image}
                                  alt={project.title}
                                  width={800}
                                  height={520}
                                  className="w-full h-full object-cover"
                                  priority={slideIndex === 0}
                                  loading={slideIndex === 0 ? "eager" : "lazy"}
                                  sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                              ) : (
                                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                                  <div className="text-center text-white p-4">
                                    <div className="text-xl font-bold mb-1">{project.title}</div>
                                    <div className="text-xs opacity-90">{project.category}</div>
                                  </div>
                                </div>
                              )}
                            </div>
                            
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">
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
                            <div className="relative h-[240px] lg:h-[380px] overflow-hidden rounded-t-xl">
                              {/* Conditional Image Display */}
                              {project.image ? (
                                <Image
                                  src={project.image}
                                  alt={project.title}
                                  width={800}
                                  height={520}
                                  className="w-full h-full object-cover"
                                  priority={slideIndex === 0}
                                  loading={slideIndex === 0 ? "eager" : "lazy"}
                                  sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                              ) : (
                                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                                  <div className="text-center text-white p-4">
                                    <div className="text-xl font-bold mb-1">{project.title}</div>
                                    <div className="text-xs opacity-90">{project.category}</div>
                                  </div>
                                </div>
                              )}
                            </div>
                            
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">
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
                          </>
                        )}
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentSlide === index
                    ? 'bg-gray-600 dark:bg-gray-400'
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link href="/portfolio">
            <Button size="lg" className="btn-hover-effect btn-primary-hover">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
