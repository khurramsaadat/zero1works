"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Toast from "@/components/Toast";

/* Replace YOUR_FORM_ID with your Formspree form ID from https://formspree.io */
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const budgetRanges = [
  "Select a budget range",
  "Under \u00a31,000",
  "\u00a31,000 - \u00a35,000",
  "\u00a35,000 - \u00a310,000",
  "\u00a310,000 - \u00a325,000",
  "\u00a325,000+",
];

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", budget: "", message: "" });
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error"; visible: boolean }>({
    message: "",
    type: "success",
    visible: false,
  });

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim()) errs.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Please enter a valid email";
    if (!formData.message.trim()) errs.message = "Project details are required";
    else if (formData.message.trim().length < 20) errs.message = "Please provide at least 20 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] || null;
    if (f && f.size > 10 * 1024 * 1024) {
      setToast({ message: "File must be under 10MB", type: "error", visible: true });
      return;
    }
    setFile(f);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const body = new FormData();
      body.append("name", formData.name);
      body.append("email", formData.email);
      body.append("company", formData.company);
      body.append("budget", formData.budget);
      body.append("message", formData.message);
      if (file) body.append("attachment", file);

      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setToast({ message: "Message sent successfully. We will get back to you within 24 hours.", type: "success", visible: true });
        setFormData({ name: "", email: "", company: "", budget: "", message: "" });
        setFile(null);
        setErrors({});
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      setToast({ message: "Failed to send message. Please try again or email us directly.", type: "error", visible: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeToast = useCallback(() => setToast((t) => ({ ...t, visible: false })), []);

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-gray-950 dark:via-slate-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Let&apos;s Start Your Project</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get in touch for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="text-gray-800 dark:text-gray-200">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`input-focus-effect ${errors.name ? "border-red-500 focus:ring-red-500" : ""}`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && <p id="name-error" className="text-xs text-red-500 mt-0.5">{errors.name}</p>}
                  </div>
                  {/* Email */}
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`input-focus-effect ${errors.email ? "border-red-500 focus:ring-red-500" : ""}`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && <p id="email-error" className="text-xs text-red-500 mt-0.5">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Company */}
                  <div className="space-y-1.5">
                    <Label htmlFor="company" className="text-gray-700 dark:text-gray-300 font-medium">Company Name</Label>
                    <Input id="company" name="company" type="text" placeholder="Your company" value={formData.company} onChange={handleInputChange} className="input-focus-effect" />
                  </div>
                  {/* Budget */}
                  <div className="space-y-1.5">
                    <Label htmlFor="budget" className="text-gray-700 dark:text-gray-300 font-medium">Project Budget</Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    >
                      {budgetRanges.map((r) => (
                        <option key={r} value={r === budgetRanges[0] ? "" : r}>{r}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 font-medium">Project Details *</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 input-focus-effect ${
                      errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-200 dark:border-gray-700 focus:ring-gray-500"
                    }`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && <p id="message-error" className="text-xs text-red-500 mt-0.5">{errors.message}</p>}
                </div>

                {/* File upload */}
                <div className="space-y-1.5">
                  <Label htmlFor="attachment" className="text-gray-700 dark:text-gray-300 font-medium">
                    Attach a File <span className="text-gray-400 font-normal">(optional, max 10MB)</span>
                  </Label>
                  <input
                    id="attachment"
                    type="file"
                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.figma,.sketch,.zip"
                    onChange={handleFileChange}
                    className="block w-full text-sm text-gray-600 dark:text-gray-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-gray-100 dark:file:bg-gray-800 file:text-gray-700 dark:file:text-gray-300 hover:file:bg-gray-200 dark:hover:file:bg-gray-700 file:cursor-pointer"
                  />
                  {file && <p className="text-xs text-gray-500">{file.name} ({(file.size / 1024).toFixed(0)} KB)</p>}
                </div>

                <Button type="submit" size="lg" className="w-full btn-hover-effect btn-primary-hover" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact info */}
          <div className="space-y-8">
            <Card className="rounded-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 dark:text-gray-200">Email</div>
                      <a href="mailto:khurram@zerooneworks.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
                        khurram@zerooneworks.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 dark:text-gray-200">Office</div>
                      <div className="text-gray-600 dark:text-gray-400">1791 Holmcroft Rd,<br />Manchester M18 7WQ, UK</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-400">Monday - Friday</span><span className="text-gray-800 dark:text-gray-200">9:00 AM - 6:00 PM</span></div>
                  <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-400">Saturday</span><span className="text-gray-800 dark:text-gray-200">10:00 AM - 4:00 PM</span></div>
                  <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-400">Sunday</span><span className="text-gray-800 dark:text-gray-200">Closed</span></div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gray-600 dark:bg-gray-700 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Quick Response Guarantee</h3>
              <p className="text-gray-100 text-sm">
                We respond to all inquiries within 24 hours. For urgent projects,
                email us directly for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Toast message={toast.message} type={toast.type} visible={toast.visible} onClose={closeToast} />
    </section>
  );
};

export default ContactUs;
