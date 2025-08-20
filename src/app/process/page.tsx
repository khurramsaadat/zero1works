import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Process = () => {
  const processSteps = [
    {
      id: 1,
      title: "UX Audit",
      subtitle: "Discovery & Understanding",
      storyTitle: "🔍 The Detective Phase",
      storyDescription: "Like a detective solving a mystery, we dive deep into your digital world to uncover hidden insights, user pain points, and untapped opportunities.",
      description: "We endeavor to outline the reasons, understand the metrics, reveal user pains and business goals to plan and conduct the redesign process wisely & systematically.",
      illustration: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      phases: [
        {
          name: "🔎 Product Audit",
          description: "Like examining evidence at a crime scene, we assess every aspect of your current digital presence to identify what's working and what needs improvement.",
          icon: "🔍"
        },
        {
          name: "📊 Research & Analysis",
          description: "We become data detectives, gathering clues from user behavior, analytics, and feedback to build a complete picture of your users' journey.",
          icon: "📈"
        },
        {
          name: "💡 Ideation",
          description: "Armed with insights, we brainstorm solutions like inventors in a workshop, mapping out the perfect user experience blueprint.",
          icon: "🧠"
        }
      ],
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
      textColor: "text-gray-900"
    },
    {
      id: 2,
      title: "UX Design",
      subtitle: "Crafting the Experience",
      storyTitle: "🏗️ The Architect Phase",
      storyDescription: "Like architects designing a beautiful building, we create the blueprint for your digital experience, ensuring every interaction feels natural and delightful.",
      description: "We aim to design user-friendly digital products that create seamless interactions and improve user satisfaction. Our user-centered approach involves extensive research to understand user needs and preferences.",
      illustration: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop&crop=center",
      phases: [
        {
          name: "🎨 Prototyping",
          description: "Like building a scale model before constructing a skyscraper, we create interactive prototypes to test and refine ideas before development.",
          icon: "🔧"
        },
        {
          name: "👥 User Testing",
          description: "We invite real users to test-drive our prototypes, like letting people walk through a model home to ensure it feels just right.",
          icon: "🧪"
        },
        {
          name: "📐 Wireframing",
          description: "Creating the structural blueprint of your digital experience, like an architect's floor plan that shows where everything belongs.",
          icon: "📋"
        }
      ],
      bgColor: "bg-gradient-to-br from-purple-600 to-blue-700",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "UI Design",
      subtitle: "Bringing Beauty to Life",
      storyTitle: "🎨 The Artist Phase",
      storyDescription: "Like a master painter bringing a canvas to life, we transform wireframes into stunning visual experiences that captivate and inspire your users.",
      description: "We create visually appealing and intuitive interfaces that align with your brand identity while ensuring optimal user experience across all devices and platforms.",
      illustration: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&crop=center",
      phases: [
        {
          name: "🎭 Moodboards",
          description: "Like an artist's palette, we gather colors, textures, and inspiration to set the emotional tone and visual direction of your digital masterpiece.",
          icon: "🎨"
        },
        {
          name: "✨ Design Concept",
          description: "We paint the first strokes on the canvas, transforming wireframes into beautiful, branded interfaces that tell your unique story.",
          icon: "🖌️"
        },
        {
          name: "🏆 Final Design",
          description: "The masterpiece is complete! Every pixel is perfected, every detail polished, ready to amaze your users and developers alike.",
          icon: "💎"
        }
      ],
      bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
      textColor: "text-white"
    },
    {
      id: 4,
      title: "Hand-off",
      subtitle: "Launch & Beyond",
      storyTitle: "🚀 The Launch Phase",
      storyDescription: "Like mission control launching a rocket to the stars, we carefully orchestrate your project's journey from code to live website, ensuring a perfect launch and smooth flight.",
      description: "We ensure smooth transition from design to development with comprehensive documentation, assets, and ongoing support to bring your vision to life.",
      illustration: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop&crop=center",
      phases: [
        {
          name: "⚙️ Development",
          description: "Like skilled engineers building a spacecraft, our developers transform designs into powerful, responsive digital experiences using cutting-edge technology.",
          icon: "💻"
        },
        {
          name: "🔍 Quality Assurance",
          description: "Every system is tested like a pre-flight check, ensuring your website performs flawlessly across all devices and browsers before takeoff.",
          icon: "✅"
        },
        {
          name: "🌟 Launch & Support",
          description: "3, 2, 1... Launch! Your website soars live to the world, with our mission control team providing ongoing support for a successful journey.",
          icon: "🚀"
        }
      ],
      bgColor: "bg-gradient-to-br from-green-600 to-emerald-700",
      textColor: "text-white"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-16 pb-12 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&crop=center')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Process
            </h1>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto mb-12">
              We engage disruptive innovation in the space where business goals meet customer delight.
              Our systematic approach ensures every project delivers exceptional results.
            </p>

            {/* Process Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <div key={step.id} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-3 backdrop-blur-sm border border-white/30">
                    {step.id}
                  </div>
                  <h3 className="text-white font-semibold text-sm">{step.title}</h3>
                  <p className="text-gray-300 text-xs mt-1">{step.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-0 relative">
        {/* Connecting Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-gray-500 to-green-500 transform -translate-x-1/2 z-10 hidden lg:block" />

        {processSteps.map((step, index) => (
          <div key={step.id} className={`${step.bgColor} ${step.textColor} py-20 relative overflow-hidden`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="mb-8">
                    {/* Story Title */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2 flex items-center">
                        {step.storyTitle}
                      </h3>
                      <p className={`text-lg italic ${step.textColor === 'text-white' ? 'text-gray-200' : 'text-gray-600'}`}>
                        {step.storyDescription}
                      </p>
                    </div>

                    {/* Main Title */}
                    <div className="flex items-center mb-4">
                      <div className={`w-16 h-16 rounded-full ${step.textColor === 'text-white' ? 'bg-white/20 text-white border-2 border-white/30' : 'bg-gray-900 text-white'} flex items-center justify-center font-bold text-2xl mr-6 shadow-lg`}>
                        {step.id}
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">{step.title}</h2>
                        <p className={`text-lg ${step.textColor === 'text-white' ? 'text-gray-200' : 'text-gray-600'}`}>
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className={`text-lg leading-relaxed ${step.textColor === 'text-white' ? 'text-gray-100' : 'text-gray-700'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Illustration & Phases */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {/* Illustration */}
                  <div className="mb-8">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={step.illustration}
                        alt={`${step.title} illustration`}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-white text-lg font-semibold">
                          {step.storyTitle}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phases */}
                  <div className="space-y-4">
                    {step.phases.map((phase, phaseIndex) => (
                      <Card key={phaseIndex} className={`${step.textColor === 'text-white' ? 'bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15' : 'bg-white border-gray-200 hover:shadow-lg'} border transition-all duration-300 card-hover-effect`}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className={`text-3xl ${step.textColor === 'text-white' ? 'filter brightness-110' : ''}`}>
                              {phase.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className={`text-xl font-bold mb-3 ${step.textColor === 'text-white' ? 'text-white' : 'text-gray-900'}`}>
                                {phase.name}
                              </h3>
                              <p className={`${step.textColor === 'text-white' ? 'text-gray-100' : 'text-gray-600'} leading-relaxed`}>
                                {phase.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-100 mb-8 text-lg">
            Let's work together to bring your vision to life through our proven process. 
            Contact us today to discuss your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact">
              <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 btn-hover-effect">
                Start Your Project
              </button>
            </a>
            <a href="/portfolio">
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-200 btn-hover-effect">
                View Our Work
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;
