import React, { useState } from "react";
import {
  Quote,
  Star,
  Heart,
  CheckCircle2,
  Users,
  Building2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      type: "student",
      name: "Chioma Okafor",
      role: "Computer Science Student",
      university: "University of Nigeria, Nsukka",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      quote:
        "I found my safe and affordable apartment near UNN in less than a day! The payment was secure, and the process was smooth. I can't believe how easy it was compared to the stress I had last year.",
      rating: 5,
      achievement: "Found apartment in 24 hours",
      icon: Users,
      linear: "from-blue-500 to-purple-500",
    },
    {
      id: 2,
      type: "owner",
      name: "Mr. Adebayo Johnson",
      role: "Property Owner",
      location: "Abuja",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      quote:
        "This system has saved me so much time. I've doubled my occupancy rate since I started using it to manage my lodges in Abuja. The automated notifications and payment tracking are game-changers!",
      rating: 5,
      achievement: "2x Occupancy Rate",
      icon: Building2,
      linear: "from-orange-500 to-red-500",
    },
    {
      id: 3,
      type: "student",
      name: "Blessing Eze",
      role: "Medical Student",
      university: "University of Lagos",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
      quote:
        "As a busy medical student, I didn't have time to search for accommodation. This platform made it incredibly easy. Verified listings gave me peace of mind, and I found the perfect place close to campus!",
      rating: 5,
      achievement: "Saved 2 weeks of searching",
      icon: Users,
      linear: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      type: "owner",
      name: "Mrs. Grace Nwankwo",
      role: "Lodge Manager",
      location: "Port Harcourt",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      quote:
        "Managing 15 properties used to be overwhelming. Now with the dashboard and automated reports, I have complete control. My tenants love the easy payment system, and I love the financial insights!",
      rating: 5,
      achievement: "Manages 15 properties effortlessly",
      icon: Building2,
      linear: "from-purple-500 to-pink-500",
    },
  ];

  const stats = [
    { value: "10,000+", label: "Happy Students", icon: Users },
    { value: "500+", label: "Property Owners", icon: Building2 },
    { value: "98%", label: "Satisfaction Rate", icon: Heart },
    { value: "4.9/5", label: "Average Rating", icon: Star },
  ];

  const currentTestimonial = testimonials[activeTestimonial];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 px-4 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 animate-float-delayed" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{ animation: "fadeInDown 0.6s ease-out" }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Success Stories
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-700">
              Users Say
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real stories from students and property owners who transformed their
            accommodation experience with our platform.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-5xl mx-auto mb-16">
          <div
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
            style={{ animation: "scaleIn 0.6s ease-out 0.2s both" }}
          >
            {/* Decorative Top Bar */}
            <div
              className={`h-2 bg-linear-to-r ${currentTestimonial.linear}`}
            />

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Left Side - Profile */}
              <div className="flex flex-col items-center text-center md:border-r border-gray-200">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${currentTestimonial.linear} rounded-full blur-xl opacity-40`}
                  />
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
                  />

                  {/* Type Badge */}
                  <div
                    className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-linear-to-r ${currentTestimonial.linear} text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1`}
                  >
                    {React.createElement(currentTestimonial.icon, { size: 12 })}
                    {currentTestimonial.type === "student"
                      ? "Student"
                      : "Owner"}
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {currentTestimonial.name}
                </h3>
                <p className="text-gray-600 mb-2">{currentTestimonial.role}</p>
                <p className="text-sm text-gray-500 mb-4">
                  {currentTestimonial.type === "student"
                    ? currentTestimonial.university
                    : currentTestimonial.location}
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-400"
                      fill="currentColor"
                    />
                  ))}
                </div>

                {/* Achievement Badge */}
                <div className="bg-linear-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl px-4 py-3 inline-flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-600" />
                  <span className="text-sm font-semibold text-green-800">
                    {currentTestimonial.achievement}
                  </span>
                </div>
              </div>

              {/* Right Side - Quote */}
              <div className="flex flex-col justify-center">
                {/* Quote Icon */}
                <Quote
                  size={48}
                  className={`text-gray-200 mb-4 bg-linear-to-br ${currentTestimonial.linear} bg-clip-text`}
                />

                {/* Quote Text */}
                <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Verified Badge */}
                <div className="inline-flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-blue-600" />
                  <span className="font-medium">Verified Review</span>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 border border-gray-200"
              >
                <ChevronLeft size={24} className="text-gray-600" />
              </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 border border-gray-200"
              >
                <ChevronRight size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 pb-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeTestimonial
                      ? `w-8 h-2 bg-linear-to-r ${currentTestimonial.linear}`
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-700 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-16"
          style={{ animation: "fadeInUp 0.6s ease-out 0.6s both" }}
        >
          <div className="inline-flex flex-col items-center gap-4 bg-linear-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Ready to Join Them?
            </h3>
            <p className="text-gray-600 mb-4">Start your success story today</p>
            <button className="px-8 py-4 bg-linear-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Get Started Now
            </button>
          </div>
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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
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
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
