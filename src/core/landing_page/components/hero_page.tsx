import { Search, MapPin, Home, ChevronRight } from "lucide-react";
import bgImageUrl from "../../../assets/images/image-1.jpg";
import { useNavigate } from "react-router-dom";

const HeroPage = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-700 opacity-50"></div>

      {/* Animated dots pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-32 w-2 h-2 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-40 w-2 h-2 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-2 h-2 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-22">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <Home className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white">
                Nigeria's #1 Student Accommodation Platform
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Find Your Perfect{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500 animate-gradient">
                Student
              </span>{" "}
              Accommodation
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-200 leading-relaxed">
              Search, book, and manage lodges easily — all in one platform.
              Discover verified accommodations near your campus across Nigeria.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-3 shadow-2xl max-w-2xl">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter your university or location"
                    className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400"
                  />
                </div>
                <button className="group px-8 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-gray-300">Verified Lodges</div>
              </div>
              <div className="w-px h-16 bg-white/20"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-gray-300">Universities</div>
              </div>
              <div className="w-px h-16 bg-white/20"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">10k+</div>
                <div className="text-sm text-gray-300">Happy Students</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
               onClick={() => navigate("/auth/user_type")}
               className="px-8 py-4 bg-white text-blue-700 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2">
                <span>Get Started</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button 
              onClick={() => navigate("/auth/user_type")}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                <span>List Your Property</span>
              </button>
            </div>
          </div>

          {/* Right Content - Featured Card */}
          <div className="hidden lg:block animate-fade-in-right">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800"
                  alt="Featured Accommodation"
                  className="w-full h-64 object-cover rounded-2xl mb-6 shadow-lg"
                />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">
                      Premium Student Lodge
                    </h3>
                    <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                      Available
                    </span>
                  </div>
                  <p className="text-gray-200">
                    Modern accommodation with all amenities near campus
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div className="text-white">
                      <span className="text-3xl font-bold">₦250k</span>
                      <span className="text-gray-300">/year</span>
                    </div>
                    <button
                      onClick={() =>
                        navigate(`/view_accommodation/:id`)
                      }
                      className="px-6 py-2 bg-linear-to-r from-yellow-400 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold shadow-xl">
                Top Rated
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
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

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroPage;
