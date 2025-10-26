import  { useState } from "react";
import {
  Building2,
  Users,
  Wallet,
  Clock,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Shield,
  BarChart3,
} from "lucide-react";

const LodgeOwnerCTA = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const benefits = [
    {
      icon: Users,
      title: "Reach Thousands of Students",
      description:
        "Connect directly with verified students actively searching for accommodation.",
      linear: "",
    },
    {
      icon: Wallet,
      title: "Manage Bookings & Payments",
      description:
        "Handle all reservations, payments, and transactions in one centralized dashboard.",
      linear: "",
    },
    {
      icon: Clock,
      title: "Save Time & Go Paperless",
      description:
        "Eliminate manual paperwork and streamline your operations with digital tools.",
      linear: "",
    },
    {
      icon: TrendingUp,
      title: "Maximize Your Revenue",
      description:
        "Optimize pricing and occupancy rates with our smart analytics and insights.",
      linear: "",
    },
  ];

  const stats = [
    { label: "Active Students", value: "50K+" },
    { label: "Properties Listed", value: "500+" },
    { label: "Avg. Booking Time", value: "< 48hrs" },
    { label: "Owner Satisfaction", value: "98%" },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-blue-900" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-linear(rgba(255,255,255,.05) 1px, transparent 1px), linear-linear(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div style={{ animation: "fadeInLeft 0.8s ease-out" }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Building2 className="text-yellow-400" size={20} />
              <span className="text-white text-sm font-semibold">
                For Property Owners
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Are You a{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-orange-500 to-pink-500 animate-linear">
                Lodge Owner?
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of successful property owners who are maximizing
              their rental income and simplifying their operations with our
              platform.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const isHovered = hoveredBenefit === index;

                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredBenefit(index)}
                    onMouseLeave={() => setHoveredBenefit(null)}
                    className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 transition-all duration-300 ${
                      isHovered ? "bg-white/10 border-white/30 scale-105" : ""
                    }`}
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 bg-linear-to-br ${
                        benefit.linear
                      } rounded-xl flex items-center justify-center mb-3 shadow-lg transition-transform duration-300 ${
                        isHovered ? "scale-110 rotate-6" : ""
                      }`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-white font-bold mb-2 text-lg">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Hover Glow */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${
                        benefit.linear
                      } opacity-0 ${
                        isHovered ? "opacity-10" : ""
                      } rounded-2xl transition-opacity duration-300 pointer-events-none`}
                    />
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-orange-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  List Your Property Today
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-2 transition-transform duration-300"
                  />
                </span>
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>

              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-green-400" />
                <span>Secure & Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-400" />
                <span>No Hidden Fees</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div
            className="relative"
            style={{ animation: "fadeInRight 0.8s ease-out" }}
          >
            {/* Stats Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12  rounded-xl flex items-center justify-center">
                  <BarChart3 size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">
                    Platform Stats
                  </h3>
                  <p className="text-gray-400 text-sm">Real-time metrics</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    style={{
                      animation: `scaleIn 0.5s ease-out ${
                        0.6 + index * 0.1
                      }s both`,
                    }}
                  >
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {[
                  "Dashboard analytics & insights",
                  "Automated payment processing",
                  "Student verification system",
                  "24/7 customer support",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                    style={{
                      animation: `slideInRight 0.5s ease-out ${
                        0.8 + index * 0.1
                      }s both`,
                    }}
                  >
                    <CheckCircle2
                      size={20}
                      className="text-green-400 shrink-0"
                    />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                    JD
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm italic mb-2">
                      "This platform doubled my occupancy rate in just 3
                      months!"
                    </p>
                    <p className="text-gray-500 text-xs">
                      - John Doe, Property Owner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 6s ease-in-out infinite 3s;
        }

        .animate-linear {
          background-size: 200% auto;
          animation: linear 3s linear infinite;
        }

        @keyframes linear {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default LodgeOwnerCTA;
