"use client";

import { Button } from "@/components/ui/button";
import CounterAnimation from "@/components/CounterAnimation";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=center')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-center items-center">
          {/* Main Content */}
          <div className="space-y-8 text-center max-w-4xl">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Transform Your Ideas</span>
                <br />
                <span className="text-blue-300">Into Digital Reality</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-100 max-w-3xl">
                We craft stunning, high-performance websites and web applications that drive results. 
                From concept to launch, we&apos;re your trusted partner in digital success.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <CounterAnimation
                  value="150+"
                  className="text-2xl md:text-3xl font-bold gradient-text"
                />
                <div className="text-sm text-gray-200">Projects Completed</div>
              </div>
              <div className="text-center">
                <CounterAnimation
                  value="98%"
                  className="text-2xl md:text-3xl font-bold text-white"
                />
                <div className="text-sm text-gray-200">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <CounterAnimation
                  value="5+"
                  className="text-2xl md:text-3xl font-bold text-white"
                />
                <div className="text-sm text-gray-200">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-hover-effect btn-primary-hover">
                Start Your Project
              </Button>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="btn-hover-effect btn-outline-hover">
                  View Our Work
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-200">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Money-back Guarantee</span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
