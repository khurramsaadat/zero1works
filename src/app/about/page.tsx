import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import CounterAnimation from "@/components/CounterAnimation";
import Link from "next/link";

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.",
      icon: "💡"
    },
    {
      title: "Quality",
      description: "We maintain the highest standards in everything we do, from code quality to customer service and project delivery.",
      icon: "⭐"
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring their vision is realized through transparent communication.",
      icon: "🤝"
    },
    {
      title: "Growth",
      description: "We're committed to continuous learning and improvement, both for ourselves and for the businesses we serve.",
      icon: "📈"
    }
  ];

  const stats = [
    { number: "200+", label: "Projects Completed" },
    { number: "80+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section
        className="pt-16 pb-12 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&crop=center')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto">
              A Trusted Web Design and Web Development Company
            </p>
          </div>
        </div>
      </section>

      {/* Company Description Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">
              A Trusted Web Design and Development Company in the UK
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                Zero One Works Ltd is a trusted web design company based in Manchester, UK, with a team of designers and developers
                who are experts in their respective fields. We have been providing web design and development services to clients
                across the globe for over 5 years. Our team is well-versed in the latest technologies and trends in the industry,
                with a proven track record of delivering high-quality digital solutions.
              </p>
              <p>
                Our services are tailored to meet the specific needs of each client. We work closely with businesses to understand
                their requirements and provide the best possible solutions. From startups to established enterprises, our team is
                committed to delivering results that exceed expectations.
              </p>
              <p>
                We offer a wide range of services including responsive web design, e-commerce development, content management systems,
                mobile app development, and digital marketing. Our developers are proficient in modern technologies including React,
                Next.js, TypeScript, Node.js, Tailwind CSS, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Icons Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Web Development Experts</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our team of web developers are experts in various technologies and frameworks. We create scalable,
                secure, and high-performance websites that deliver exceptional user experiences.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Fast Turnaround Projects</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We understand the importance of time in business. Our streamlined development process ensures
                quick delivery without compromising on quality or functionality.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">5 Years of Experience</h3>
              <p className="text-gray-600 dark:text-gray-400">
                With over 5 years of experience in the industry, we have successfully delivered hundreds of
                projects across various industries and business sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <CounterAnimation
                  value={stat.number}
                  className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                />
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">
              Vision & Mission
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                To be the leading web development company that empowers businesses worldwide with innovative digital solutions,
                helping them achieve sustainable growth and success in the digital landscape.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                To deliver exceptional web development services that combine cutting-edge technology with creative design,
                providing our clients with powerful digital tools that drive their business forward and exceed their expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-hover-effect text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A dedicated group of professionals committed to delivering exceptional digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { role: "Project Leadership", icon: "🎯", desc: "Strategic project oversight ensuring every deliverable aligns with your business objectives and timeline." },
              { role: "Frontend Development", icon: "🖥️", desc: "Pixel-perfect, responsive interfaces built with React, Next.js, and modern CSS frameworks." },
              { role: "Backend Engineering", icon: "⚙️", desc: "Robust server architectures, APIs, and database solutions that scale with your growth." },
              { role: "UI/UX Design", icon: "🎨", desc: "User-centred design that balances aesthetics with usability, backed by research and testing." },
            ].map((member, index) => (
              <Card key={index} className="card-hover-effect text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{member.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {member.role}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {member.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&crop=center')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Work Together?</h2>
          <p className="text-gray-100 mb-8 text-lg">
            We would love to hear about your project and discuss how we can help you achieve your digital goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="inline-block">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 btn-hover-effect">
                Get Started Today
              </button>
            </Link>
            <Link href="/portfolio" className="inline-block">
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-800 transition-all duration-200">
                View Our Work
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
