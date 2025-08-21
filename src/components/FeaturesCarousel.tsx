"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeaturesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern online store with advanced features and seamless checkout experience.",
      image: "",
      category: "E-Commerce"
    },
    {
      id: 2,
      title: "Healthcare Dashboard",
      description: "Comprehensive patient management system with real-time analytics.",
      image: "",
      category: "Healthcare"
    },
    {
      id: 3,
      title: "Financial App",
      description: "Secure banking application with advanced security features.",
      image: "",
      category: "Finance"
    },
    {
      id: 4,
      title: "Educational Platform",
      description: "Interactive learning management system for online education.",
      image: "",
      category: "Education"
    },
    {
      id: 5,
      title: "Real Estate Portal",
      description: "Property listing platform with advanced search and filters.",
      image: "",
      category: "Real Estate"
    },
    {
      id: 6,
      title: "Social Media App",
      description: "Modern social networking platform with real-time messaging.",
      image: "",
      category: "Social Media"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(projects.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(projects.length / 3)) % Math.ceil(projects.length / 3));
  };

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-slate-800 shadow-lg rounded-full p-3 btn-hover-effect hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-slate-800 shadow-lg rounded-full p-3 btn-hover-effect hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden mx-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.slice(slideIndex * 3, slideIndex * 3 + 3).map((project) => (
                      <Card key={project.id} className="card-hover-effect overflow-hidden group">
                        <div className="relative h-[260px] overflow-hidden rounded-t-xl">
                          {/* CSS-based Placeholder */}
                          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                            <div className="text-center text-white p-4">
                              <div className="text-xl font-bold mb-1">{project.title}</div>
                              <div className="text-xs opacity-90">{project.category}</div>
                            </div>
                          </div>
                          
                          <div className="absolute top-4 right-4">
                            <span className="bg-white/90 dark:bg-slate-800/90 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full text-xs font-medium">
                              {project.category}
                            </span>
                          </div>
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
                            <svg 
                              className="w-6 h-6 text-gray-600 dark:text-gray-400 transition-transform group-hover:translate-x-1 ml-4 flex-shrink-0" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, index) => (
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
          <a href="/portfolio">
            <Button size="lg" className="btn-hover-effect btn-primary-hover">
              View All Projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
