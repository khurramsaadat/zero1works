"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9; // 3x3 grid

  const projects = [
    // Original 6 projects from features carousel
    {
      id: 1,
      title: "Financial App",
      description: "Offers professional course management and educational resources.",
      image: "/images/portfolio/finance-platform.jpg",
      category: "Finance",
      link: "https://taimur-finance.netlify.app/"
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
      description: "Offers professional course management and educational resources.",
      image: "/images/portfolio/finance-platform.jpg",
      category: "Finance",
      link: "https://taimur-finance.netlify.app/"
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
    },
    // Additional 18 projects to fill 4x6 grid
    {
      id: 7,
      title: "Restaurant Management",
      description: "Complete restaurant POS system with inventory and staff management.",
      image: "",
      category: "Restaurant"
    },
    {
      id: 8,
      title: "Fitness Tracking App",
      description: "Personal fitness tracker with workout plans and nutrition guidance.",
      image: "",
      category: "Health & Fitness"
    },
    {
      id: 9,
      title: "Travel Booking Platform",
      description: "Comprehensive travel booking system for flights, hotels, and activities.",
      image: "",
      category: "Travel"
    },
    {
      id: 10,
      title: "Event Management System",
      description: "Complete event planning and management platform with ticketing.",
      image: "",
      category: "Events"
    },
    {
      id: 11,
      title: "Inventory Management",
      description: "Advanced warehouse and inventory tracking system for businesses.",
      image: "",
      category: "Business"
    },
    {
      id: 12,
      title: "Music Streaming App",
      description: "High-quality music streaming platform with personalized playlists.",
      image: "",
      category: "Entertainment"
    },
    {
      id: 13,
      title: "Job Portal Platform",
      description: "Professional job search and recruitment platform with AI matching.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Job+Portal+Platform",
      category: "Career"
    },
    {
      id: 14,
      title: "Food Delivery App",
      description: "Multi-restaurant food delivery platform with real-time tracking.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Food+Delivery+App",
      category: "Food & Delivery"
    },
    {
      id: 15,
      title: "CRM Dashboard",
      description: "Customer relationship management system with sales analytics.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=CRM+Dashboard",
      category: "Business"
    },
    {
      id: 16,
      title: "Photography Portfolio",
      description: "Stunning portfolio website for professional photographers.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Photography+Portfolio",
      category: "Portfolio"
    },
    {
      id: 17,
      title: "Cryptocurrency Exchange",
      description: "Secure crypto trading platform with advanced charting tools.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Cryptocurrency+Exchange",
      category: "Finance"
    },
    {
      id: 18,
      title: "News & Media Platform",
      description: "Modern news aggregation and publishing platform.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=News+and+Media+Platform",
      category: "Media"
    },
    {
      id: 19,
      title: "Gaming Community Hub",
      description: "Social platform for gamers with tournaments and leaderboards.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Gaming+Community+Hub",
      category: "Gaming"
    },
    {
      id: 20,
      title: "Legal Practice Management",
      description: "Comprehensive case management system for law firms.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Legal+Practice+Management",
      category: "Legal"
    },
    {
      id: 21,
      title: "Logistics Tracking System",
      description: "Real-time package tracking and fleet management platform.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Logistics+Tracking+System",
      category: "Logistics"
    },
    {
      id: 22,
      title: "Mental Health App",
      description: "Wellness and mental health support platform with therapy sessions.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Mental+Health+App",
      category: "Healthcare"
    },
    {
      id: 23,
      title: "Smart Home Dashboard",
      description: "IoT device management and home automation control center.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Smart+Home+Dashboard",
      category: "IoT"
    },
    {
      id: 24,
      title: "Nonprofit Donation Platform",
      description: "Fundraising and donation management system for charities.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Nonprofit+Donation+Platform",
      category: "Nonprofit"
    },
    // Additional 24 projects to reach 48 total
    {
      id: 25,
      title: "Video Streaming Platform",
      description: "High-quality video streaming service with subscription management.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Video+Streaming",
      category: "Entertainment"
    },
    {
      id: 26,
      title: "Project Management Tool",
      description: "Collaborative project management platform with team features.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Project+Management+Tool",
      category: "Business"
    },
    {
      id: 27,
      title: "Online Learning Academy",
      description: "Comprehensive e-learning platform with interactive courses.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Online+Learning+Academy",
      category: "Education"
    },
    {
      id: 28,
      title: "Telemedicine Platform",
      description: "Virtual healthcare consultations and patient management system.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Telemedicine+Platform",
      category: "Healthcare"
    },
    {
      id: 29,
      title: "Digital Wallet App",
      description: "Secure mobile payment and digital wallet solution.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Digital+Wallet+App",
      category: "Finance"
    },
    {
      id: 30,
      title: "Recipe Sharing Community",
      description: "Social platform for sharing and discovering recipes.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Recipe+Sharing+Community",
      category: "Food & Delivery"
    },
    {
      id: 31,
      title: "Car Rental System",
      description: "Vehicle rental platform with booking and fleet management.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Car+Rental+System",
      category: "Travel"
    },
    {
      id: 32,
      title: "Fashion E-commerce",
      description: "Modern fashion retail platform with AR try-on features.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Fashion+E-commerce",
      category: "E-Commerce"
    },
    {
      id: 33,
      title: "Podcast Platform",
      description: "Audio content platform with hosting and analytics.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Podcast+Platform",
      category: "Media"
    },
    {
      id: 34,
      title: "Virtual Event Platform",
      description: "Online event hosting with live streaming and networking.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Virtual+Event+Platform",
      category: "Events"
    },
    {
      id: 35,
      title: "Freelancer Marketplace",
      description: "Platform connecting freelancers with clients worldwide.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Freelancer+Marketplace",
      category: "Business"
    },
    {
      id: 36,
      title: "Weather Monitoring App",
      description: "Advanced weather tracking with alerts and forecasting.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Weather+Monitoring+App",
      category: "Weather"
    },
    {
      id: 37,
      title: "Pet Care Management",
      description: "Comprehensive pet health and care tracking system.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Pet+Care+Management",
      category: "Pet Care"
    },
    {
      id: 38,
      title: "Construction Management",
      description: "Project management system for construction companies.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Construction+Management",
      category: "Construction"
    },
    {
      id: 39,
      title: "Language Learning App",
      description: "Interactive language learning platform with AI tutoring.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Language+Learning+App",
      category: "Education"
    },
    {
      id: 40,
      title: "Stock Trading Platform",
      description: "Advanced trading platform with real-time market data.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Stock+Trading+Platform",
      category: "Finance"
    },
    {
      id: 41,
      title: "Home Automation Hub",
      description: "Central control system for smart home devices.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Smart+Home+Dashboard",
      category: "IoT"
    },
    {
      id: 42,
      title: "Meditation & Wellness App",
      description: "Mental wellness platform with guided meditation sessions.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Meditation+and+Wellness+App",
      category: "Health & Fitness"
    },
    {
      id: 43,
      title: "Agricultural Management",
      description: "Farm management system with crop monitoring and analytics.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Agricultural+Management",
      category: "Agriculture"
    },
    {
      id: 44,
      title: "Art Gallery Platform",
      description: "Digital art showcase and marketplace for artists.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Art+Gallery+Platform",
      category: "Art & Culture"
    },
    {
      id: 45,
      title: "Delivery Tracking System",
      description: "Real-time package tracking and logistics management.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Logistics+Tracking+System",
      category: "Logistics"
    },
    {
      id: 46,
      title: "Virtual Reality Training",
      description: "VR-based training platform for various industries.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=VR+Training",
      category: "VR/AR"
    },
    {
      id: 47,
      title: "Renewable Energy Monitor",
      description: "Solar and wind energy monitoring and optimization system.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Renewable+Energy+Monitor",
      category: "Energy"
    },
    {
      id: 48,
      title: "Community Forum Platform",
      description: "Discussion forum with moderation and community features.",
      image: "https://placehold.co/800x520/2563eb/ffffff/jpg?text=Community+Forum+Platform",
      category: "Community"
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
      <section
        className="pt-16 pb-12 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=center')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          width={800}
                          height={520}
                          className="w-full h-full object-cover"
                          priority={index < 4}
                          loading={index < 4 ? "eager" : "lazy"}
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
                          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-base line-clamp-2">
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
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          width={800}
                          height={520}
                          className="w-full h-full object-cover"
                          priority={index < 4}
                          loading={index < 4 ? "eager" : "lazy"}
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
                          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-base line-clamp-2">
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
                Previous
              </Button>

              {/* Page Numbers */}
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

              {/* Next Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="btn-hover-effect"
              >
                Next
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
