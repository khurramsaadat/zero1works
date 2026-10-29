"use client";

import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import CounterAnimation from "@/components/CounterAnimation";
import Link from "next/link";

/* Mobile detection via useSyncExternalStore to comply with React 19.3 rules */
function subscribeMobile(cb: () => void) {
  const mq = window.matchMedia("(max-width: 767px)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
function getMobileSnapshot() {
  return window.matchMedia("(max-width: 767px)").matches;
}
function getMobileServerSnapshot() {
  return false;
}

const Hero = () => {
  const isMobile = useSyncExternalStore(subscribeMobile, getMobileSnapshot, getMobileServerSnapshot);

  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Video background - desktop only; mobile uses static gradient */}
      {!isMobile ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          className="absolute inset-1 w-full h-full object-cover z-0"
        >
          <source src="/earth-rotating.webm" type="video/webm" />
          <source src="/earth-rotating.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 z-0" />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-1 bg-gradient-to-r from-black/80 via-black/70 to-black/10 z-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
        <div className="flex justify-center items-center">
          <div className="space-y-8 text-center max-w-4xl">

            {/* Headline - staggered fade-up */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white text-shadow-lg animate-fade-up">
                  59 Live Projects.
                </span>
                <br />
                <span className="text-gray-300 text-shadow-lg animate-fade-up animate-delay-200">
                  Zero Excuses.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-100 max-w-3xl text-shadow-md animate-fade-up animate-delay-300">
                We build high-performance websites and web applications that convert visitors into customers.
                From concept to launch, every project ships live.
              </p>
            </div>

            {/* Stats - real numbers */}
            <div className="grid grid-cols-3 gap-6 py-6 animate-fade-up animate-delay-400">
              <div className="text-center">
                <CounterAnimation
                  value="59"
                  className="text-2xl md:text-3xl font-bold text-white text-shadow-lg"
                />
                <div className="text-sm text-gray-200 text-shadow-sm">Live Projects</div>
              </div>
              <div className="text-center">
                <CounterAnimation
                  value="18"
                  className="text-2xl md:text-3xl font-bold text-white text-shadow-lg"
                />
                <div className="text-sm text-gray-200 text-shadow-sm">Industries Served</div>
              </div>
              <div className="text-center">
                <CounterAnimation
                  value="98%"
                  className="text-2xl md:text-3xl font-bold text-white text-shadow-lg"
                />
                <div className="text-sm text-gray-200 text-shadow-sm">Client Satisfaction</div>
              </div>
            </div>

            {/* Single CTA */}
            <div className="animate-fade-up animate-delay-500">
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="btn-hover-effect btn-outline-hover">
                  See Our Latest Project
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-200 text-shadow-sm animate-fade-up animate-delay-600">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Manchester, UK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
