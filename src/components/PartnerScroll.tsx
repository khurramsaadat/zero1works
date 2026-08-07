"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CounterAnimation from "@/components/CounterAnimation";

function PartnerBrandLogo({
  name,
  logo,
  fallback,
}: {
  name: string;
  logo: string;
  fallback: string;
}) {
  const [useFallback, setUseFallback] = useState(false);
  if (!logo || useFallback) {
    return (
      <div className="flex h-12 min-w-[80px] items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2 text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase whitespace-nowrap">
        {fallback}
      </div>
    );
  }
  return (
    <Image
      src={logo}
      alt={`${name} logo`}
      width={140}
      height={48}
      className="h-12 w-auto max-w-[130px] object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 border-0"
      onError={() => setUseFallback(true)}
    />
  );
}

const PartnerScroll = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Closeloop delivered a fully functional eCommerce app that essentially operates as a virtual closet, allowing our consumers to interact and understand how to put outfits together. We were highly impressed with their unique onshore and offshore model.",
      author: "Ben Baum",
      position: "Former Chief Digital Officer, Tailored Brands Inc."
    },
    {
      quote: "The team's expertise in modern web technologies and their commitment to delivering high-quality solutions exceeded our expectations. They transformed our digital presence completely.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Solutions"
    },
    {
      quote: "Working with this agency was a game-changer for our business. Their innovative approach and attention to detail resulted in a 300% increase in our online conversions.",
      author: "Michael Chen",
      position: "Marketing Director, GrowthCorp"
    },
    {
      quote: "Professional, reliable, and incredibly talented. They delivered our project on time and within budget while maintaining the highest quality standards throughout the process.",
      author: "Emily Rodriguez",
      position: "Founder, Digital Innovations Ltd."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const partners = [
    { name: "Grind Me Fine", logo: "/images/logos/grind-me-fine.png", fallback: "GMF" },
    { name: "Roastery Station", logo: "", fallback: "Roastery Station" },
    { name: "UNO Espresso", logo: "/images/logos/uno-espresso.jpg", fallback: "UNO" },
    { name: "TumaCafe", logo: "/images/logos/tumacafe.webp", fallback: "TumaCafe" },
    { name: "Lunar Beauty", logo: "/images/logos/lunar-beauty.jpg", fallback: "Lunar Beauty" },
    { name: "Black Beared", logo: "/images/logos/black-beared.jpeg", fallback: "Black Beared" },
    { name: "Take My Trip", logo: "/images/logos/take-my-trip.png", fallback: "Take My Trip" },
    { name: "Dubai Bikes", logo: "", fallback: "Dubai Bikes" },
    { name: "Ibex Design", logo: "/images/logos/ibex-design.svg", fallback: "IBEX" },
    { name: "PDF Tools", logo: "", fallback: "PDF Tools" },
    { name: "PDF Merger", logo: "", fallback: "PDF Merger" },
    { name: "SnapFormat", logo: "/images/logos/snapformat.svg", fallback: "SnapFormat" },
    { name: "Files & Folders", logo: "", fallback: "Files & Folders" },
    { name: "FavOG", logo: "", fallback: "FavOG" },
    { name: "Image Resizer", logo: "/images/logos/image-resizer.webp", fallback: "Resizer" },
    { name: "Map Explorer", logo: "", fallback: "Map Explorer" },
    { name: "VidEnc", logo: "", fallback: "VidEnc" },
    { name: "VidCon", logo: "", fallback: "VidCon" },
    { name: "BatchMark", logo: "/images/logos/batchmark.png", fallback: "BatchMark" },
    { name: "Memories in Motion", logo: "/images/logos/memories-in-motion.png", fallback: "MiM" },
    { name: "Zenote", logo: "/images/logos/zenote.png", fallback: "Zenote" },
    { name: "PMB", logo: "", fallback: "PMB" },
    { name: "DFRE Unipoles", logo: "", fallback: "DFRE" },
    { name: "Layouts Dashboard", logo: "/images/logos/layouts-dashboard.png", fallback: "Layouts" },
    { name: "DM Gallery", logo: "/images/logos/dm-gallery.svg", fallback: "DM Gallery" },
    { name: "Vendor Gallery", logo: "", fallback: "Vendor Gallery" },
    { name: "DDF Promo", logo: "/images/logos/ddf-promo.png", fallback: "DDF" },
    { name: "Solarization", logo: "", fallback: "Solarization" },
    { name: "Al-Qari", logo: "", fallback: "Al-Qari" },
    { name: "Playback & Learn", logo: "", fallback: "Playback" },
    { name: "Track My Workout", logo: "", fallback: "TMW" },
    { name: "UAE Gratuity", logo: "", fallback: "Gratuity" },
    { name: "StockPulse", logo: "", fallback: "StockPulse" },
    { name: "FalconCity", logo: "", fallback: "FalconCity" },
    { name: "Personality360", logo: "/images/logos/personality360.svg", fallback: "P360" },
    { name: "Pacman", logo: "", fallback: "Pacman" },
    { name: "Tic Tac Toe", logo: "", fallback: "TTT" },
    { name: "N-Place", logo: "", fallback: "N-Place" },
    { name: "Flappy Bird", logo: "/images/logos/flappy-bird.png", fallback: "Flappy" },
    { name: "FolderVault", logo: "", fallback: "FolderVault" },
    { name: "3D Chess", logo: "", fallback: "3D Chess" },
  ];

  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-950/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Brands We Have Built
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            A selection of the digital products and brands we&apos;ve brought to life
          </p>
        </div>

        {/* Scrolling Container */}
        <div className="relative">
          {/* Scrolling Animation */}
          <div className="flex animate-scroll">
            {/* First set of logos */}
            <div className="flex space-x-16 animate-scroll-left">
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 flex items-center justify-center min-w-[120px]"
                >
                  <PartnerBrandLogo
                    name={partner.name}
                    logo={partner.logo}
                    fallback={partner.fallback}
                  />
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex space-x-16 animate-scroll-left ml-16">
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 flex items-center justify-center min-w-[120px]"
                >
                  <PartnerBrandLogo
                    name={partner.name}
                    logo={partner.logo}
                    fallback={partner.fallback}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <CounterAnimation
              value="50+"
              className="text-3xl font-bold text-gray-800 dark:text-white drop-shadow-lg mb-2"
            />
            <div className="text-sm text-gray-700 dark:text-white font-medium">Happy Clients</div>
          </div>
          <div className="text-center">
            <CounterAnimation
              value="150+"
              className="text-3xl font-bold text-gray-800 dark:text-white drop-shadow-lg mb-2"
            />
            <div className="text-sm text-gray-700 dark:text-white font-medium">Projects Delivered</div>
          </div>
          <div className="text-center">
            <CounterAnimation
              value="99%"
              className="text-3xl font-bold text-gray-800 dark:text-white drop-shadow-lg mb-2"
            />
            <div className="text-sm text-gray-700 dark:text-white font-medium">Success Rate</div>
            </div>
          <div className="text-center">
            <CounterAnimation
              value="24/7"
              className="text-3xl font-bold text-gray-800 dark:text-white drop-shadow-lg mb-2"
            />
            <div className="text-sm text-gray-700 dark:text-white font-medium">Support</div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-24">
          <div className="bg-gray-800 dark:bg-gray-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-8 text-6xl text-gray-600 opacity-30">
              &ldquo;
            </div>
            <div className="absolute bottom-6 right-8 text-6xl text-gray-600 opacity-30 rotate-180">
              &rdquo;
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-8 min-h-[120px] flex items-center justify-center">
                {testimonials[currentTestimonial].quote}
              </blockquote>

              <div className="text-white">
                <div className="font-semibold text-lg mb-1">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-gray-300 text-sm">
                  {testimonials[currentTestimonial].position}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-300 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-300 transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial
                      ? 'bg-blue-400'
                      : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnerScroll;
