import  { useState } from "react";
import {
  ShieldCheck,
  CreditCard,
  Search,
  LayoutDashboard,
  Bell,
  TrendingUp,
  Users,
  Building2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Lock,
  Zap,
  Target,
} from "lucide-react";

const KeyFeaturesBenefits = () => {
  const [activeTab, setActiveTab] = useState<"students" | "owners">("students");
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const studentFeatures = [
    {
      icon: ShieldCheck,
      title: "Verified Listings",
      description:
        "Every property is thoroughly checked for authenticity and quality standards.",
      details:
        "Our verification team inspects each property to ensure safety and accuracy.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description:
        "Your money is safe with our integrated payment gateway and escrow system.",
      details:
        "Bank-level encryption and secure transaction processing for peace of mind.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: Search,
      title: "Easy Search & Filter",
      description:
        "Find the perfect room near your campus with advanced search filters.",
      details:
        "Search by location, price, amenities, and more with instant results.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: Lock,
      title: "Privacy Protected",
      description:
        "Your personal information is encrypted and never shared without consent.",
      details:
        "GDPR-compliant data protection and secure communication channels.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      icon: Zap,
      title: "Instant Booking",
      description:
        "Book your accommodation instantly with real-time availability updates.",
      details: "No waiting, no hassle - secure your room in minutes.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      icon: Target,
      title: "Perfect Match",
      description:
        "Get personalized recommendations based on your preferences and budget.",
      details:
        "AI-powered suggestions to find your ideal student accommodation.",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
    },
  ];

  const ownerFeatures = [
    {
      icon: LayoutDashboard,
      title: "Dashboard Management",
      description:
        "Manage properties, bookings, and finances from one centralized portal.",
      details:
        "Real-time overview of all your properties and transactions in one place.",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Bell,
      title: "Automated Notifications",
      description:
        "Get instant alerts for new bookings, messages, and payment updates.",
      details:
        "Never miss an opportunity with real-time push notifications and emails.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: TrendingUp,
      title: "Financial Reports",
      description:
        "Track your earnings, performance, and occupancy rates with detailed analytics.",
      details:
        "Generate comprehensive reports and insights to optimize your revenue.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: Users,
      title: "Tenant Management",
      description: "Screen, communicate, and manage your tenants efficiently.",
      details: "Automated tenant verification and digital contract management.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description:
        "Automated rent collection with multiple payment methods supported.",
      details:
        "Get paid on time with automatic reminders and recurring payments.",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
    },
    {
      icon: Sparkles,
      title: "Marketing Tools",
      description:
        "Promote your properties with built-in marketing and listing optimization.",
      details:
        "Reach more students with featured listings and targeted advertising.",
      color: "from-pink-500 to-purple-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
  ];

  const currentFeatures =
    activeTab === "students" ? studentFeatures : ownerFeatures;

  return (
    <section className="py-20 px-4 bg-linear-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{ animation: "fadeInDown 0.6s ease-out" }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-blue-600 animate-pulse" size={24} />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Why Choose Us
            </span>
            <Sparkles className="text-purple-600 animate-pulse" size={24} />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Key Features &{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
              Benefits
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover what makes our platform the most reliable and efficient
            solution for student accommodation management.
          </p>
        </div>

        {/* Tab Switcher */}
        <div
          className="flex justify-center mb-12"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
        >
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-xl border border-gray-200">
            <button
              onClick={() => setActiveTab("students")}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "students"
                  ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Users size={20} />
              For Students
            </button>
            <button
              onClick={() => setActiveTab("owners")}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "owners"
                  ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Building2 size={20} />
              For Owners
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredFeature === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${
                    0.3 + index * 0.1
                  }s both`,
                }}
              >
                {/* Card */}
                <div
                  className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-500 h-full ${
                    isHovered
                      ? `${feature.borderColor} shadow-2xl -translate-y-2`
                      : "border-gray-200"
                  }`}
                >
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 bg-linear-to-br ${
                        feature.color
                      } rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${
                        isHovered ? "scale-110 rotate-6" : ""
                      }`}
                    >
                      <Icon size={32} className="text-white" />
                    </div>

                    {/* Checkmark Badge */}
                    <div
                      className={`absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                        isHovered ? "scale-100" : "scale-0"
                      }`}
                    >
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3
                    className={`text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 ${
                      isHovered
                        ? "text-transparent bg-clip-text bg-linear-to-r " +
                          feature.color
                        : ""
                    }`}
                  >
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Details - Show on Hover */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isHovered ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className={`pt-4 border-t ${feature.borderColor}`}>
                      <p className="text-sm text-gray-500 italic">
                        {feature.details}
                      </p>
                    </div>
                  </div>

                  {/* Learn More Link */}
                  <div
                    className={`flex items-center gap-2 text-sm font-semibold transition-all duration-300 mt-4 ${
                      isHovered
                        ? "text-blue-600 translate-x-2"
                        : "text-gray-400"
                    }`}
                  >
                    Learn more
                    <ArrowRight size={16} />
                  </div>

                  {/* Background Glow */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${
                      feature.color
                    } opacity-0 ${
                      isHovered ? "opacity-5" : ""
                    } rounded-2xl transition-opacity duration-500 pointer-events-none`}
                  />

                  {/* Corner Accent */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${
                      feature.color
                    } opacity-0 ${
                      isHovered ? "opacity-10" : ""
                    } rounded-bl-full transition-opacity duration-500`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-16"
          style={{ animation: "fadeInUp 0.6s ease-out 0.8s both" }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <button className="group px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
              {activeTab === "students"
                ? "Find Accommodation"
                : "List Your Property"}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform duration-300"
              />
            </button>

            <button className="px-8 py-4 bg-white border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-bold rounded-xl transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            Join <span className="font-bold text-blue-600">10,000+</span>{" "}
            satisfied users
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default KeyFeaturesBenefits;
