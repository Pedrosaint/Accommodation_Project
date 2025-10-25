import {
  Search,
  Eye,
  CreditCard,
  Key,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: Search,
      title: "Search & Filter",
      description:
        "Enter your city, university, and preferences to find the perfect accommodation.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      id: 2,
      icon: Eye,
      title: "View & Compare",
      description:
        "See detailed listings with photos, prices, and amenities to make the best choice.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      id: 3,
      icon: CreditCard,
      title: "Book & Pay Securely",
      description:
        "Reserve your room and pay online with confidence using our secure payment system.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      id: 4,
      icon: Key,
      title: "Move In",
      description:
        "Confirm your booking and get ready to move in! Your new home awaits you.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-4">
            <CheckCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Simple Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find your perfect student accommodation in just 4 simple steps.
            We've made it easy, secure, and stress-free.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connecting Line - Desktop Only */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-linear-to-r from-gray-300 to-transparent z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              )}

              {/* Step Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2 z-10">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-linear-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                  {step.id}
                </div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 ${step.bgColor} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md`}
                  >
                    <step.icon className={`w-10 h-10 ${step.iconColor}`} />
                  </div>
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 w-20 h-20 bg-linear-to-br ${step.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                  ></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>

                {/* Hover Indicator */}
                <div className="mt-6 flex items-center gap-2 text-blue-600 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <span className="text-sm font-semibold">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>

                {/* Bottom Border Accent */}
                <div
                  className={`absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r ${step.color} rounded-b-2xl group-hover:w-full transition-all duration-500`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className="mt-16 text-center animate-fade-in-up"
          style={{ animationDelay: "800ms" }}
        >
          <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Find Your Perfect Home?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of students who have found their ideal
                accommodation through our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2">
                  <span>Start Searching</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
                  <span>List Your Property</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out backwards;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
