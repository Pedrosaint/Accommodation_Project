import React, { useState } from "react";
import {
  MapPin,
  Star,
  Wifi,
  Home,
  Bed,
  Bath,
  Car,
  Shield,
  Clock,
  Phone,
  Mail,
  CheckCircle2,
  CreditCard,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";


const ViewAccommodationPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);



  // Sample data - in real app, this would come from props/API
  const accommodation = {
    id: 1,
    title: "Modern Self-Con Studio",
    location: "Near University of Lagos, Akoka, Lagos",
    price: "₦150,000",
    priceUnit: "Semester",
    rating: 4.8,
    reviews: 124,
    featured: true,
    verified: true,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1502672260066-6bc35f0cc8a7?w=1200",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200",
    ],
    description:
      "A beautifully furnished self-contained studio apartment perfect for students. Located just 5 minutes walk from the university campus, this modern accommodation offers all the amenities you need for comfortable living during your studies.",
    amenities: [
      { icon: Wifi, label: "High-Speed Wi-Fi" },
      { icon: Home, label: "Self-Contained" },
      { icon: Bed, label: "Queen Size Bed" },
      { icon: Bath, label: "Private Bathroom" },
      { icon: Car, label: "Parking Space" },
      { icon: Shield, label: "24/7 Security" },
    ],
    features: [
      "Air Conditioning",
      "Kitchen with Appliances",
      "Study Desk & Chair",
      "Wardrobe",
      "24/7 Power Supply",
      "Water Supply",
      "Laundry Service",
      "Nearby Shopping",
    ],
    owner: {
      name: "Mr. Adebayo Johnson",
      verified: true,
      responseTime: "Within 2 hours",
      rating: 4.9,
      properties: 12,
    },
    rules: [
      "No smoking inside the property",
      "Visitors allowed between 8am - 10pm",
      "Keep noise levels low after 10pm",
      "Maintain cleanliness",
    ],
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % accommodation.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + accommodation.images.length) % accommodation.images.length
    );
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-22">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-96 bg-gray-900">
                <img
                  src={accommodation.images[currentImageIndex]}
                  alt={accommodation.title}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  {currentImageIndex + 1} / {accommodation.images.length}
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {accommodation.featured && (
                    <span className="px-3 py-1 bg-linear-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                      Featured
                    </span>
                  )}
                  {accommodation.verified && (
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                      <CheckCircle2 size={12} />
                      Verified
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 gap-2 p-4">
                {accommodation.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? "border-blue-600 scale-105"
                        : "border-gray-200 hover:border-blue-400"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Title & Location */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {accommodation.title}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={18} className="text-blue-600" />
                    <span>{accommodation.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">
                    {accommodation.price}
                  </div>
                  <div className="text-sm text-gray-500">
                    per {accommodation.priceUnit}
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-1">
                  <Star
                    size={20}
                    className="text-yellow-400"
                    fill="currentColor"
                  />
                  <span className="font-bold text-gray-900">
                    {accommodation.rating}
                  </span>
                  <span className="text-gray-500">
                    ({accommodation.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {accommodation.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Amenities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {accommodation.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100"
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      {React.createElement(amenity.icon, {
                        size: 20,
                        className: "text-white",
                      })}
                    </div>
                    <span className="font-medium text-gray-700">
                      {amenity.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Features & Highlights
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {accommodation.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* House Rules */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                House Rules
              </h2>
              <div className="space-y-3">
                {accommodation.rules.map((rule, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-gray-700">{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Booking Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-blue-100 sticky top-24">
              <div className="mb-6 pb-6 border-b border-gray-200 ">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {accommodation.price}
                </div>
                <div className="text-sm text-gray-500">
                  per {accommodation.priceUnit}
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <button className="w-full bg-linear-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                  <CreditCard size={20} />
                  Pay now
                </button>

                <button className="w-full bg-white border-2 border-blue-600 text-blue-600 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2">
                  <MessageCircle size={20} />
                  Contact Owner
                </button>
              </div>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-green-500" />
                  <span>Secure payment protected</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard size={16} className="text-blue-500" />
                  <span>Multiple payment options</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-purple-500" />
                  <span>Verified property listing</span>
                </div>
              </div>
            </div>

            {/* Owner Info Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">Property Owner</h3>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {accommodation.owner.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">
                      {accommodation.owner.name}
                    </span>
                    {accommodation.owner.verified && (
                      <CheckCircle2 size={16} className="text-blue-600" />
                    )}
                  </div>
                  <div className="text-sm text-gray-500">
                    {accommodation.owner.properties} properties
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Rating</span>
                  <div className="flex items-center gap-1">
                    <Star
                      size={14}
                      className="text-yellow-400"
                      fill="currentColor"
                    />
                    <span className="font-semibold">
                      {accommodation.owner.rating}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-semibold text-green-600">
                    {accommodation.owner.responseTime}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-1">
                  <Phone size={14} />
                  Call
                </button>
                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-1">
                  <Mail size={14} />
                  Email
                </button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-linear-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center gap-2 text-blue-600 mb-3">
                <Clock size={20} />
                <span className="font-semibold">Quick Response</span>
              </div>
              <p className="text-sm text-gray-600">
                This property owner typically responds within 2 hours. Get in
                touch now to secure your spot!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAccommodationPage;
