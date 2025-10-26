const About = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 py-22">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            About StudentLodge Nigeria
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming the way students find and manage accommodations across
            Nigerian universities. We're bridging the gap between students and
            quality, affordable housing.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-blue-600 text-4xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To provide Nigerian students with a seamless, secure, and
              efficient platform for finding and booking quality accommodations.
              We aim to eliminate the stress and uncertainty associated with
              traditional accommodation hunting.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-purple-600 text-4xl mb-4">🔭</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To become Nigeria's most trusted student accommodation platform,
              connecting every student with their ideal home away from home
              while empowering lodge owners with modern management tools.
            </p>
          </div>
        </div>

        {/* The Problem We Solve */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            The Challenge We Address
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-4">
                Traditional Problems
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Manual, time-consuming accommodation searches
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Lack of verified and trustworthy listings
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Insecure payment methods and transactions
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Poor communication between students and owners
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Limited access to accommodation information
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-4">
                Our Solution
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Digital platform with real-time availability
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Verified listings with photos and reviews
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Secure online payment gateway integration
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Built-in messaging and notification system
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Comprehensive accommodation details and filters
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔍",
                title: "For Students",
                steps: [
                  "Create your student profile",
                  "Search accommodations near your campus",
                  "Filter by price, amenities, and location",
                  "Book and pay securely online",
                  "Move in with confidence",
                ],
              },
              {
                icon: "🏠",
                title: "For Lodge Owners",
                steps: [
                  "Register your business account",
                  "List your properties with details",
                  "Manage bookings and availability",
                  "Receive secure payments",
                  "Grow your accommodation business",
                ],
              },
              {
                icon: "🛡️",
                title: "Safety & Security",
                steps: [
                  "Verified user profiles",
                  "Secure payment processing",
                  "Transparent review system",
                  "24/7 customer support",
                  "Data protection compliance",
                ],
              },
            ].map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4 text-center">{section.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.steps.map((step, stepIndex) => (
                    <li
                      key={stepIndex}
                      className="flex items-start text-gray-600"
                    >
                      <span className="text-blue-500 mr-2">→</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Features Highlight */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose StudentLodge?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "⚡",
                title: "Fast & Easy",
                desc: "Quick booking process",
              },
              {
                icon: "💰",
                title: "Affordable",
                desc: "Budget-friendly options",
              },
              { icon: "🔒", title: "Secure", desc: "Safe transactions" },
              {
                icon: "📱",
                title: "Convenient",
                desc: "Mobile-friendly platform",
              },
              { icon: "🏆", title: "Verified", desc: "Trusted listings" },
              { icon: "🔄", title: "Efficient", desc: "Time-saving solution" },
              { icon: "💬", title: "Support", desc: "24/7 assistance" },
              {
                icon: "📊",
                title: "Transparent",
                desc: "Clear pricing & reviews",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <div className="text-2xl mb-2">{feature.icon}</div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm opacity-90">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team/Company Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Commitment
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                For Students
              </h3>
              <p className="text-gray-600 mb-4">
                We understand the challenges students face when searching for
                accommodation. Our platform is designed to make this process
                stress-free, secure, and efficient.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Verified and safe accommodations</li>
                <li>• Transparent pricing with no hidden costs</li>
                <li>• Easy-to-use search and booking system</li>
                <li>• Secure online payments</li>
                <li>• Reliable customer support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                For Lodge Owners
              </h3>
              <p className="text-gray-600 mb-4">
                We provide lodge owners with powerful tools to manage their
                properties effectively and reach a wider student market.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Easy property listing and management</li>
                <li>• Automated booking and payment system</li>
                <li>• Increased visibility to students</li>
                <li>• Secure and timely payments</li>
                <li>• Business growth opportunities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students and lodge owners who are already
            benefiting from our platform. Find your perfect accommodation or
            grow your business today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
              Find Accommodation
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
              List Your Property
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "10,000+", label: "Students Served" },
            { number: "2,500+", label: "Properties Listed" },
            { number: "50+", label: "Universities Covered" },
            { number: "98%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
