"use client";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Why <span className="text-blue-600 dark:text-blue-300">Choose Us?</span>
            </h2>

            <div className="space-y-4 text-gray-700 dark:text-gray-100 leading-relaxed">
              <p>
                You&apos;ve been burned before. Or you&apos;re trying not to be. Building a digital presence
                as a business owner is challenging enough. It&apos;s worse when your developers
                disappear, your designer ghosts, or your timeline keeps slipping into vapor.
              </p>

              <p>
                We&apos;ve seen it all and built a model that fixes it. Our agency is the web development
                partner built for business trust. Multidisciplinary, <span className="text-blue-600 dark:text-blue-300 font-semibold">full-time dedicated teams</span>. Clear
                communication. A mission to make your web development experience
                enjoyable. We&apos;re a <span className="text-blue-600 dark:text-blue-300 font-semibold">team that feels like it&apos;s yours, wholly committed to your
                success.</span>
              </p>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=center"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              {/* Floating Elements - Using your theme colors */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 dark:bg-blue-300 rounded-full opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gray-400 dark:bg-gray-300 rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gray-600 dark:bg-white rounded-full opacity-70"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Our Approach */}
        <div className="mt-20">
          <div className="bg-white/95 backdrop-blur-sm text-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Dedicated development teams: <br />
                  <span className="gradient-text">the trust delivery engine.</span>
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  We don&apos;t rent talent. We build founding squads.
                </p>

                <div className="space-y-4 text-gray-700">
                  <p>
                    Every client gets a dedicated development team assigned full-time:
                  </p>

                  <p>
                    A Project Owner who protects your vision. A Designer who obsesses over
                    UX, not just mockups. Engineers who live in your code, not three others.
                    Quality Assurance that breaks things before your users do.
                  </p>

                  <p>
                    This is what it feels like to have a real co-founding team, without giving up
                    equity. <span className="font-semibold text-gray-900">No excuses. No distractions. Just consistent momentum.</span>
                  </p>
                </div>
              </div>

              {/* Right Diagram */}
              <div className="relative">
                <div className="relative w-80 h-80 mx-auto">
                  {/* Center Circle */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                    Your<br />Project
                  </div>

                  {/* Design Circle */}
                  <div className="absolute top-0 right-8 w-20 h-20 bg-blue-300 rounded-full flex items-center justify-center text-gray-900 font-semibold text-sm opacity-90 shadow-md">
                    Design
                  </div>

                  {/* Engineering Circle */}
                  <div className="absolute top-8 right-0 w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-gray-900 font-semibold text-sm opacity-90 shadow-md">
                    Engineering
                  </div>

                  {/* QA Circle */}
                  <div className="absolute bottom-0 right-8 w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center text-white font-semibold text-sm opacity-90 shadow-md">
                    Quality<br />Assurance
                  </div>

                  {/* Business Circle */}
                  <div className="absolute bottom-8 left-0 w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-900 font-semibold text-sm opacity-90 shadow-md">
                    Business<br />Strategy
                  </div>

                  {/* Project Management Circle */}
                  <div className="absolute top-8 left-0 w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center text-gray-900 font-semibold text-sm opacity-90 shadow-md">
                    Project<br />Management
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
