import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const openPositions = [
    {
      title: "Frontend Developer",
      type: "Full-time",
      location: "Manchester, UK (Hybrid)",
      department: "Engineering",
      description: "Join our engineering team to build responsive, high-performance web applications using React, Next.js, and TypeScript. You will work on client projects ranging from corporate websites to complex web applications.",
      requirements: [
        "3+ years experience with React and modern JavaScript/TypeScript",
        "Strong knowledge of HTML, CSS, and Tailwind CSS",
        "Experience with Next.js App Router and static site generation",
        "Understanding of responsive design and web accessibility (WCAG)",
        "Familiarity with Git and agile development workflows"
      ]
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Manchester, UK (Hybrid)",
      department: "Design",
      description: "Create intuitive and visually compelling digital experiences for our clients. You will lead user research, wireframing, prototyping, and visual design across web and mobile projects.",
      requirements: [
        "3+ years of UI/UX design experience with a strong portfolio",
        "Proficiency in Figma and design systems",
        "Experience with user research, wireframing, and prototyping",
        "Understanding of web and mobile design constraints",
        "Ability to collaborate closely with developers and clients"
      ]
    },
    {
      title: "Full Stack Developer",
      type: "Full-time",
      location: "Manchester, UK (Remote-friendly)",
      department: "Engineering",
      description: "Build end-to-end web solutions for our diverse client base. You will work across the full stack, from database design and API development to frontend implementation and deployment.",
      requirements: [
        "4+ years of full stack development experience",
        "Strong skills in Node.js, React, and TypeScript",
        "Experience with PostgreSQL or MongoDB and REST/GraphQL APIs",
        "Knowledge of cloud platforms (AWS, Vercel, or similar)",
        "Ability to architect scalable and maintainable solutions"
      ]
    },
    {
      title: "Digital Marketing Specialist",
      type: "Full-time",
      location: "Manchester, UK (Hybrid)",
      department: "Marketing",
      description: "Drive digital growth for our clients and our own brand. You will develop and execute SEO, content, and paid media strategies that deliver measurable results for businesses across the UK.",
      requirements: [
        "2+ years of digital marketing experience",
        "Proven track record in SEO and content strategy",
        "Experience with Google Analytics, Search Console, and Google Ads",
        "Strong written communication and analytical skills",
        "Knowledge of social media marketing and email campaigns"
      ]
    }
  ];

  const benefits = [
    {
      title: "Competitive Salary",
      description: "Market-rate compensation with annual reviews and performance-based bonuses.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Flexible Working",
      description: "Hybrid and remote-friendly arrangements with flexible hours to support work-life balance.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Learning & Development",
      description: "Budget for courses, conferences, and certifications to help you grow your skills.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Modern Tech Stack",
      description: "Work with the latest tools and frameworks including Next.js, React, TypeScript, and Tailwind CSS.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Collaborative Culture",
      description: "A supportive team environment where ideas are valued and every voice is heard.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "25 Days Holiday",
      description: "Generous annual leave plus UK bank holidays and additional days for long service.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const cultureValues = [
    {
      title: "Innovation First",
      description: "We encourage experimentation and staying ahead of technology trends to deliver cutting-edge solutions for our clients."
    },
    {
      title: "Quality Over Quantity",
      description: "We take pride in craftsmanship. Every line of code and every design pixel matters to us and to the businesses we serve."
    },
    {
      title: "Client Partnership",
      description: "We work as an extension of our clients' teams, building long-term relationships based on trust, transparency, and results."
    },
    {
      title: "Continuous Growth",
      description: "We invest in our people. Whether through mentorship, training, or challenging projects, we help you reach your full potential."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-16 pb-12 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&crop=center')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Careers at Zero One Works
            </h1>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto mb-8">
              Join a passionate team of developers, designers, and digital marketers
              building exceptional web experiences from Manchester, UK.
            </p>
            <a href="#open-positions">
              <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100 btn-hover-effect">
                View Open Positions
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Our Culture
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              At Zero One Works Ltd, we believe great digital products come from great teams.
              Here is what defines our workplace culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <Card key={index} className="card-hover-effect text-center">
                <CardContent className="p-6">
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

      {/* Benefits */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Benefits & Perks
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We take care of our team so they can do their best work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our current vacancies and find your next opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="card-hover-effect h-full">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                      {position.type}
                    </span>
                    <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                      {position.department}
                    </span>
                  </div>
                  <CardTitle className="text-gray-800 dark:text-gray-200">
                    {position.title}
                  </CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{position.location}</span>
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {position.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm">
                      Requirements:
                    </h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2 text-sm">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-400">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a href={`mailto:careers@zerooneworks.com?subject=Application for ${encodeURIComponent(position.title)}`}>
                    <Button className="w-full btn-hover-effect btn-primary-hover mt-2">
                      Apply Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              How to Apply
            </h2>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                  1
                </div>
                <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-1">Prepare Your CV</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Update your CV and prepare a portfolio showcasing your best work.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                  2
                </div>
                <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-1">Send Your Application</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Email your CV and cover letter to our careers team.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                  3
                </div>
                <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-1">Interview Process</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Shortlisted candidates will be invited for an interview and skills assessment.
                </p>
              </div>
            </div>

            <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Send your application to:
              </p>
              <a
                href="mailto:careers@zerooneworks.com"
                className="text-lg font-semibold text-gray-800 dark:text-gray-200 underline hover:text-gray-600 dark:hover:text-gray-400"
              >
                careers@zerooneworks.com
              </a>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">
                Please include the job title in your email subject line. We aim to respond within 5 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Don&apos;t See the Right Role?</h2>
          <p className="text-gray-100 mb-8 text-lg">
            We are always interested in hearing from talented people. Send us your CV
            and tell us how you can contribute to Zero One Works Ltd.
          </p>
          <a href="mailto:careers@zerooneworks.com?subject=Speculative Application">
            <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100 btn-hover-effect">
              Send Speculative Application
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
