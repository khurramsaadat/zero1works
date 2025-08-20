"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 12; // 4x3 grid

  const projects = [
    // Original 6 projects from features carousel
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern online store with advanced features and seamless checkout experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center",
      category: "E-Commerce"
    },
    {
      id: 2,
      title: "Healthcare Dashboard",
      description: "Comprehensive patient management system with real-time analytics.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop&crop=center",
      category: "Healthcare"
    },
    {
      id: 3,
      title: "Financial App",
      description: "Secure banking application with advanced security features.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop&crop=center",
      category: "Finance"
    },
    {
      id: 4,
      title: "Educational Platform",
      description: "Interactive learning management system for online education.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=center",
      category: "Education"
    },
    {
      id: 5,
      title: "Real Estate Portal",
      description: "Property listing platform with advanced search and filters.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop&crop=center",
      category: "Real Estate"
    },
    {
      id: 6,
      title: "Social Media App",
      description: "Modern social networking platform with real-time messaging.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop&crop=center",
      category: "Social Media"
    },
    // Additional 18 projects to fill 4x6 grid
    {
      id: 7,
      title: "Restaurant Management",
      description: "Complete restaurant POS system with inventory and staff management.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop&crop=center",
      category: "Restaurant"
    },
    {
      id: 8,
      title: "Fitness Tracking App",
      description: "Personal fitness tracker with workout plans and nutrition guidance.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center",
      category: "Health & Fitness"
    },
    {
      id: 9,
      title: "Travel Booking Platform",
      description: "Comprehensive travel booking system for flights, hotels, and activities.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop&crop=center",
      category: "Travel"
    },
    {
      id: 10,
      title: "Event Management System",
      description: "Complete event planning and management platform with ticketing.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=250&fit=crop&crop=center",
      category: "Events"
    },
    {
      id: 11,
      title: "Inventory Management",
      description: "Advanced warehouse and inventory tracking system for businesses.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop&crop=center",
      category: "Business"
    },
    {
      id: 12,
      title: "Music Streaming App",
      description: "High-quality music streaming platform with personalized playlists.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop&crop=center",
      category: "Entertainment"
    },
    {
      id: 13,
      title: "Job Portal Platform",
      description: "Professional job search and recruitment platform with AI matching.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center",
      category: "Career"
    },
    {
      id: 14,
      title: "Food Delivery App",
      description: "Multi-restaurant food delivery platform with real-time tracking.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop&crop=center",
      category: "Food & Delivery"
    },
    {
      id: 15,
      title: "CRM Dashboard",
      description: "Customer relationship management system with sales analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center",
      category: "Business"
    },
    {
      id: 16,
      title: "Photography Portfolio",
      description: "Stunning portfolio website for professional photographers.",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=250&fit=crop&crop=center",
      category: "Portfolio"
    },
    {
      id: 17,
      title: "Cryptocurrency Exchange",
      description: "Secure crypto trading platform with advanced charting tools.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop&crop=center",
      category: "Finance"
    },
    {
      id: 18,
      title: "News & Media Platform",
      description: "Modern news aggregation and publishing platform.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop&crop=center",
      category: "Media"
    },
    {
      id: 19,
      title: "Gaming Community Hub",
      description: "Social platform for gamers with tournaments and leaderboards.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop&crop=center",
      category: "Gaming"
    },
    {
      id: 20,
      title: "Legal Practice Management",
      description: "Comprehensive case management system for law firms.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop&crop=center",
      category: "Legal"
    },
    {
      id: 21,
      title: "Logistics Tracking System",
      description: "Real-time package tracking and fleet management platform.",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=250&fit=crop&crop=center",
      category: "Logistics"
    },
    {
      id: 22,
      title: "Mental Health App",
      description: "Wellness and mental health support platform with therapy sessions.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center",
      category: "Healthcare"
    },
    {
      id: 23,
      title: "Smart Home Dashboard",
      description: "IoT device management and home automation control center.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center",
      category: "IoT"
    },
    {
      id: 24,
      title: "Nonprofit Donation Platform",
      description: "Fundraising and donation management system for charities.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop&crop=center",
      category: "Nonprofit"
    },
    // Additional 24 projects to reach 48 total
    {
      id: 25,
      title: "Video Streaming Platform",
      description: "High-quality video streaming service with subscription management.",
      image: "https://images.unsplash.com/photo-1489599735734-79b4169c4388?w=400&h=250&fit=crop&crop=center",
      category: "Entertainment"
    },
    {
      id: 26,
      title: "Project Management Tool",
      description: "Collaborative project management platform with team features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&crop=center",
      category: "Business"
    },
    {
      id: 27,
      title: "Online Learning Academy",
      description: "Comprehensive e-learning platform with interactive courses.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=250&fit=crop&crop=center",
      category: "Education"
    },
    {
      id: 28,
      title: "Telemedicine Platform",
      description: "Virtual healthcare consultations and patient management system.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop&crop=center",
      category: "Healthcare"
    },
    {
      id: 29,
      title: "Digital Wallet App",
      description: "Secure mobile payment and digital wallet solution.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&crop=center",
      category: "Finance"
    },
    {
      id: 30,
      title: "Recipe Sharing Community",
      description: "Social platform for sharing and discovering recipes.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop&crop=center",
      category: "Food & Delivery"
    },
    {
      id: 31,
      title: "Car Rental System",
      description: "Vehicle rental platform with booking and fleet management.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop&crop=center",
      category: "Travel"
    },
    {
      id: 32,
      title: "Fashion E-commerce",
      description: "Modern fashion retail platform with AR try-on features.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop&crop=center",
      category: "E-Commerce"
    },
    {
      id: 33,
      title: "Podcast Platform",
      description: "Audio content platform with hosting and analytics.",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=250&fit=crop&crop=center",
      category: "Media"
    },
    {
      id: 34,
      title: "Virtual Event Platform",
      description: "Online event hosting with live streaming and networking.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop&crop=center",
      category: "Events"
    },
    {
      id: 35,
      title: "Freelancer Marketplace",
      description: "Platform connecting freelancers with clients worldwide.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop&crop=center",
      category: "Business"
    },
    {
      id: 36,
      title: "Weather Monitoring App",
      description: "Advanced weather tracking with alerts and forecasting.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop&crop=center",
      category: "Weather"
    },
    {
      id: 37,
      title: "Pet Care Management",
      description: "Comprehensive pet health and care tracking system.",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=250&fit=crop&crop=center",
      category: "Pet Care"
    },
    {
      id: 38,
      title: "Construction Management",
      description: "Project management system for construction companies.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop&crop=center",
      category: "Construction"
    },
    {
      id: 39,
      title: "Language Learning App",
      description: "Interactive language learning platform with AI tutoring.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&crop=center",
      category: "Education"
    },
    {
      id: 40,
      title: "Stock Trading Platform",
      description: "Advanced trading platform with real-time market data.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop&crop=center",
      category: "Finance"
    },
    {
      id: 41,
      title: "Home Automation Hub",
      description: "Central control system for smart home devices.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center",
      category: "IoT"
    },
    {
      id: 42,
      title: "Meditation & Wellness App",
      description: "Mental wellness platform with guided meditation sessions.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center",
      category: "Health & Fitness"
    },
    {
      id: 43,
      title: "Agricultural Management",
      description: "Farm management system with crop monitoring and analytics.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=250&fit=crop&crop=center",
      category: "Agriculture"
    },
    {
      id: 44,
      title: "Art Gallery Platform",
      description: "Digital art showcase and marketplace for artists.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=250&fit=crop&crop=center",
      category: "Art & Culture"
    },
    {
      id: 45,
      title: "Delivery Tracking System",
      description: "Real-time package tracking and logistics management.",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=250&fit=crop&crop=center",
      category: "Logistics"
    },
    {
      id: 46,
      title: "Virtual Reality Training",
      description: "VR-based training platform for various industries.",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=250&fit=crop&crop=center",
      category: "VR/AR"
    },
    {
      id: 47,
      title: "Renewable Energy Monitor",
      description: "Solar and wind energy monitoring and optimization system.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop&crop=center",
      category: "Energy"
    },
    {
      id: 48,
      title: "Community Forum Platform",
      description: "Discussion forum with moderation and community features.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=center",
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

          <div id="portfolio-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {currentProjects.map((project) => (
              <Card key={project.id} className="card-hover-effect overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  {/* Default Category Display */}
                  <div className="h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                    <div className="text-white text-center">
                      <div className="text-xl font-bold mb-2">{project.title}</div>
                      <div className="text-sm opacity-90">{project.category}</div>
                    </div>
                  </div>
                  
                  {/* Hover Image */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 dark:bg-slate-800/90 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                    {project.description}
                  </p>
                  
                  <Button variant="outline" size="sm" className="w-full btn-hover-effect btn-outline-hover">
                    View Project
                  </Button>
                </CardContent>
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
