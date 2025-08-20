"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [filter, setFilter] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      category: "Web Development",
      author: "Sarah Johnson",
      date: "December 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Scalable E-commerce Solutions: Best Practices",
      excerpt: "Learn how to create robust e-commerce platforms that can handle growth and provide excellent user experiences.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      category: "E-Commerce",
      author: "Michael Chen",
      date: "December 12, 2024",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "UI/UX Design Principles for Better User Engagement",
      excerpt: "Discover key design principles that can significantly improve user engagement and conversion rates.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      category: "Design",
      author: "Emily Rodriguez",
      date: "December 10, 2024",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Mobile-First Development: Why It Matters More Than Ever",
      excerpt: "Understanding the importance of mobile-first approach in today's digital landscape and how to implement it effectively.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      category: "Mobile Development",
      author: "David Kim",
      date: "December 8, 2024",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "SEO Strategies That Actually Work in 2024",
      excerpt: "Cut through the noise and focus on SEO strategies that deliver real results for your website's visibility.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop",
      category: "SEO",
      author: "Sarah Johnson",
      date: "December 5, 2024",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "The Rise of AI in Web Development: Tools and Applications",
      excerpt: "Explore how artificial intelligence is revolutionizing web development and the tools you should know about.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      category: "AI & Technology",
      author: "Michael Chen",
      date: "December 3, 2024",
      readTime: "6 min read"
    },
    {
      id: 7,
      title: "Performance Optimization: Making Your Website Lightning Fast",
      excerpt: "Learn practical techniques to optimize your website's performance and improve user experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Performance",
      author: "David Kim",
      date: "November 30, 2024",
      readTime: "7 min read"
    },
    {
      id: 8,
      title: "Cybersecurity Best Practices for Web Applications",
      excerpt: "Essential security measures every web developer should implement to protect applications and user data.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
      category: "Security",
      author: "Emily Rodriguez",
      date: "November 28, 2024",
      readTime: "9 min read"
    },
    {
      id: 9,
      title: "Cloud Computing for Small Businesses: A Complete Guide",
      excerpt: "Everything small businesses need to know about leveraging cloud computing for growth and efficiency.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      category: "Cloud Computing",
      author: "Sarah Johnson",
      date: "November 25, 2024",
      readTime: "10 min read"
    }
  ];

  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];
  const filteredPosts = filter === "All" ? blogPosts : blogPosts.filter(post => post.category === filter);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-gray-950 dark:via-slate-950 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Blog
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Stay updated with the latest trends, insights, and best practices in web development, 
              design, and digital marketing. Learn from our experts and grow your business.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(category)}
                  className="btn-hover-effect"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">Featured Post</h2>
              <Card className="card-hover-effect overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={filteredPosts[0].image} 
                      alt={filteredPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 dark:bg-slate-800/90 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full text-sm font-medium">
                        {filteredPosts[0].category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                      {filteredPosts[0].title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <span>By {filteredPosts[0].author}</span>
                      <span>{filteredPosts[0].date}</span>
                      <span>{filteredPosts[0].readTime}</span>
                    </div>
                    <Button className="w-fit btn-hover-effect btn-primary-hover">
                      Read More
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <Card key={post.id} className="card-hover-effect overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 dark:bg-slate-800/90 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <span>By {post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                    <Button variant="outline" size="sm" className="btn-hover-effect btn-outline-hover">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-100 mb-8 text-lg">
            Subscribe to our newsletter and never miss our latest articles, tips, and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button className="bg-white text-gray-800 hover:bg-gray-100 btn-hover-effect px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
