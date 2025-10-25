/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState } from "react";
import {
  MapPin,
  Wifi,
  Home,
  Users,
  Star,
  ArrowRight,
  Bed,
  Car,
} from "lucide-react";

interface Accommodation {
  id: number;
  image: string;
  title: string;
  location: string;
  price: string;
  priceUnit: string;
  rating: number;
  reviews: number;
  amenities: string[];
  featured?: boolean;
}

const FeaturedAccommodations = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const accommodations: Accommodation[] = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      title: "Modern Self-Con Studio",
      location: "Near University of Lagos",
      price: "₦150,000",
      priceUnit: "Semester",
      rating: 4.8,
      reviews: 124,
      amenities: ["Wi-Fi", "Self-Con", "24/7 Power"],
      featured: true,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1502672260066-6bc35f0cc8a7?w=800",
      title: "Spacious 2-Bedroom Flat",
      location: "Near University of Ibadan",
      price: "₦200,000",
      priceUnit: "Semester",
      rating: 4.9,
      reviews: 89,
      amenities: ["Kitchen", "Parking", "Security"],
      featured: true,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800",
      title: "Cozy Shared Apartment",
      location: "Near University of Benin",
      price: "₦80,000",
      priceUnit: "Semester",
      rating: 4.6,
      reviews: 156,
      amenities: ["Shared Kitchen", "Study Room", "Laundry"],
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      title: "Luxury Student Lodge",
      location: "Near Covenant University",
      price: "₦300,000",
      priceUnit: "Semester",
      rating: 5.0,
      reviews: 67,
      amenities: ["Gym", "Pool", "Wi-Fi", "AC"],
    },
  ];

  const amenityIcons: { [key: string]: any } = {
    "Wi-Fi": Wifi,
    "Self-Con": Home,
    Kitchen: Home,
    "Shared Kitchen": Users,
    Parking: Car,
    Gym: Users,
    Pool: Users,
    "Study Room": Bed,
  };

  return (
    <section className="py-20 px-4 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{ animation: "fadeInDown 0.6s ease-out" }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-full" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Premium Selection
            </span>
            <div className="w-12 h-1 bg-linear-to-r from-purple-600 to-blue-600 rounded-full" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Student{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
              Accommodations
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover top-rated, verified student accommodations near your
            campus. Safe, affordable, and ready for you.
          </p>
        </div>

        {/* Accommodations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {accommodations.map((accommodation, index) => {
            const isHovered = hoveredCard === accommodation.id;

            return (
              <div
                key={accommodation.id}
                onMouseEnter={() => setHoveredCard(accommodation.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Card */}
                <div
                  className={`relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-500 ${
                    isHovered ? "shadow-2xl -translate-y-2" : ""
                  }`}
                >
                  {/* Featured Badge */}
                  {accommodation.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-linear-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                        <Star size={12} fill="currentColor" />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={accommodation.image}
                      alt={accommodation.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        isHovered ? "scale-110" : "scale-100"
                      }`}
                    />
                    {/* linear Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Rating Badge */}
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                      <Star
                        size={14}
                        className="text-yellow-500"
                        fill="currentColor"
                      />
                      <span className="text-sm font-bold text-gray-900">
                        {accommodation.rating}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({accommodation.reviews})
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {accommodation.title}
                    </h3>

                    <div className="flex items-center gap-1 text-gray-600 mb-3">
                      <MapPin size={16} className="text-blue-600" />
                      <span className="text-sm">{accommodation.location}</span>
                    </div>

                    {/* Price */}
                    <div className="mb-4 pb-4 border-b border-gray-200">
                      <div className="flex items-end gap-1">
                        <span className="text-2xl font-bold text-blue-600">
                          {accommodation.price}
                        </span>
                        <span className="text-sm text-gray-500 mb-1">
                          / {accommodation.priceUnit}
                        </span>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {accommodation.amenities
                        .slice(0, 3)
                        .map((amenity, idx) => {
                          const Icon = amenityIcons[amenity] || Home;
                          return (
                            <span
                              key={idx}
                              className="flex items-center gap-1 text-xs font-medium bg-blue-50 text-blue-700 px-2.5 py-1.5 rounded-lg border border-blue-100"
                            >
                              <Icon size={12} />
                              {amenity}
                            </span>
                          );
                        })}
                    </div>

                    {/* View Details Button */}
                    <button className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                      View Details
                      <ArrowRight
                        size={16}
                        className={`transition-transform duration-300 ${
                          isHovered ? "translate-x-1" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-linear-to-t from-blue-600/0 to-purple-600/0 pointer-events-none transition-opacity duration-500 ${
                      isHovered ? "opacity-5" : "opacity-0"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Browse All Button */}
        <div
          className="text-center"
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}
        >
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <span>Browse All Accommodations</span>
            <ArrowRight
              size={24}
              className="group-hover:translate-x-2 transition-transform duration-300"
            />
          </button>

          <p className="text-gray-500 text-sm mt-4">
            Over <span className="font-bold text-blue-600">500+</span> verified
            listings available
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

export default FeaturedAccommodations;
