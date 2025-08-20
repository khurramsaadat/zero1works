"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-gray-950 dark:via-slate-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Let's Start Your Project
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with us today for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-hover-effect">
            <CardHeader>
              <CardTitle className="text-blue-800 dark:text-blue-200">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-blue-700 dark:text-blue-300 font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input-focus-effect"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-blue-700 dark:text-blue-300 font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input-focus-effect"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-blue-700 dark:text-blue-300 font-medium">
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="input-focus-effect"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-blue-700 dark:text-blue-300 font-medium">
                    Project Details *
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-blue-200 dark:border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-slate-800 text-blue-900 dark:text-blue-100 input-focus-effect"
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full btn-hover-effect btn-primary-hover">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="card-hover-effect">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-blue-800 dark:text-blue-200">Email</div>
                      <div className="text-blue-600 dark:text-blue-400">hello@webdevagency.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-blue-800 dark:text-blue-200">Phone</div>
                      <div className="text-blue-600 dark:text-blue-400">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-blue-800 dark:text-blue-200">Office</div>
                      <div className="text-blue-600 dark:text-blue-400">
                        123 Tech Street, Suite 100<br />
                        San Francisco, CA 94105
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="card-hover-effect">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-600 dark:text-blue-400">Monday - Friday</span>
                    <span className="text-blue-800 dark:text-blue-200">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-600 dark:text-blue-400">Saturday</span>
                    <span className="text-blue-800 dark:text-blue-200">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-600 dark:text-blue-400">Sunday</span>
                    <span className="text-blue-800 dark:text-blue-200">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response */}
            <div className="bg-blue-600 dark:bg-blue-700 rounded-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Quick Response Guarantee</h3>
              <p className="text-blue-100 text-sm">
                We respond to all inquiries within 24 hours. For urgent projects, 
                call us directly for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
