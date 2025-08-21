"use client";

import { useState, useEffect } from "react";
import CounterAnimation from "@/components/CounterAnimation";

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
    {
      name: "Apple",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
      fallback: "🍎"
    },
    {
      name: "Google",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      fallback: "G"
    },
    {
      name: "Microsoft",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
      fallback: "⊞"
    },
    {
      name: "Amazon",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      fallback: "📦"
    },
    {
      name: "Meta",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
      fallback: "f"
    },
    {
      name: "Tesla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
      fallback: "T"
    },
    {
      name: "Netflix",
      logo: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
      fallback: "N"
    },
    {
      name: "Samsung",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
      fallback: "S"
    },
    {
      name: "IBM",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ibm/ibm-original.svg",
      fallback: "IBM"
    },
    {
      name: "Oracle",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      fallback: "○"
    },
    {
      name: "Intel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg",
      fallback: "i"
    },
    {
      name: "Adobe",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adobe/adobe-original.svg",
      fallback: "Ae"
    },
  ];

  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-950/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            We&apos;ve partnered with amazing companies to deliver exceptional results
          </p>
        </div>

        {/* Scrolling Container */}
        <div className="relative">
          {/* Scrolling Animation */}
          <div className="flex animate-scroll">
            {/* First set of logos */}
            <div className="flex space-x-24 animate-scroll-left">
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 flex items-center justify-center min-w-[150px]"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-14 w-auto object-contain opacity-70 filter grayscale brightness-50 border-0"
                    style={{ border: 'none', outline: 'none' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="hidden h-14 w-24 bg-gray-600 rounded items-center justify-center text-white font-bold text-sm">
                    {partner.fallback}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex space-x-24 animate-scroll-left ml-24">
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 flex items-center justify-center min-w-[150px]"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-14 w-auto object-contain opacity-70 filter grayscale brightness-50 border-0"
                    style={{ border: 'none', outline: 'none' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="hidden h-14 w-24 bg-gray-600 rounded items-center justify-center text-white font-bold text-sm">
                    {partner.fallback}
                  </div>
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
          animation: scroll-left 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnerScroll;
