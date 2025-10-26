/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  MapPin,
  Star,
  Wifi,
  Home,
  Users,
  Bed,
  Car,
  ArrowRight,
//   Grid3x3,
//   List,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  verified?: boolean;
}

const ListOfAccommodation = () => {
  const navigate = useNavigate();
  const [viewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

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
      verified: true,
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
      verified: true,
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
      verified: true,
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
      featured: true,
      verified: true,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      title: "Budget-Friendly Room",
      location: "Near University of Nigeria",
      price: "₦60,000",
      priceUnit: "Semester",
      rating: 4.3,
      reviews: 92,
      amenities: ["Shared Kitchen", "Wi-Fi", "Security"],
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1502672260066-6bc35f0cc8a7?w=800",
      title: "Executive Studio Apartment",
      location: "Near University of Lagos",
      price: "₦180,000",
      priceUnit: "Semester",
      rating: 4.7,
      reviews: 78,
      amenities: ["Self-Con", "AC", "Kitchen"],
      verified: true,
    },
  ];

  const locations = [
    "all",
    "University of Lagos",
    "University of Ibadan",
    "University of Benin",
    "Covenant University",
    "University of Nigeria",
  ];
  const amenitiesList = [
    "Wi-Fi",
    "Self-Con",
    "Kitchen",
    "Parking",
    "Security",
    "AC",
    "Pool",
    "Gym",
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

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm pt-22">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Browse Accommodations
          </h1>

          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by location, university, or property name..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <SlidersHorizontal size={20} />
              Filters
              {(selectedAmenities.length > 0 || selectedLocation !== "all") && (
                <span className="ml-1 px-2 py-0.5 bg-white text-blue-600 text-xs font-bold rounded-full">
                  {selectedAmenities.length +
                    (selectedLocation !== "all" ? 1 : 0)}
                </span>
              )}
            </button>

            {/* View Toggle */}
            {/* <div className="flex bg-white border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-4 py-3 ${
                  viewMode === "grid"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-50"
                } transition-colors`}
              >
                <Grid3x3 size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`px-4 py-3 ${
                  viewMode === "list"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-50"
                } transition-colors`}
              >
                <List size={20} />
              </button>
            </div> */}
          </div>

          {/* Active Filters Display */}
          {(selectedAmenities.length > 0 || selectedLocation !== "all") && (
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedLocation !== "all" && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm">
                  <span>{selectedLocation}</span>
                  <button onClick={() => setSelectedLocation("all")}>
                    <X size={14} />
                  </button>
                </div>
              )}
              {selectedAmenities.map((amenity) => (
                <div
                  key={amenity}
                  className="flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  <span>{amenity}</span>
                  <button onClick={() => toggleAmenity(amenity)}>
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div
            className={`${
              showFilters ? "block" : "hidden"
            } lg:block w-80 shrink-0`}
          >
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 sticky top-32">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Filters</h2>
                <button
                  onClick={() => {
                    setSelectedLocation("all");
                    setSelectedAmenities([]);
                    setPriceRange([0, 500000]);
                  }}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear All
                </button>
              </div>

              {/* Location Filter */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Location</h3>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location === "all"
                        ? "All Locations"
                        : `Near ${location}`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Price Range
                </h3>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="500000"
                    step="10000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([0, parseInt(e.target.value)])
                    }
                    className="w-full"
                  />
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>₦0</span>
                    <span className="font-semibold text-blue-600">
                      ₦{priceRange[1].toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Amenities Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Amenities</h3>
                <div className="space-y-2">
                  {amenitiesList.map((amenity) => (
                    <label
                      key={amenity}
                      className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={selectedAmenities.includes(amenity)}
                        onChange={() => toggleAmenity(amenity)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col md:flex-row md:items-center space-y-2 justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {accommodations.length} Properties Found
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Showing verified student accommodations
                </p>
              </div>

              {/* Sort Dropdown */}
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: High to Low</option>
                <option>Most Reviewed</option>
              </select>
            </div>

            {/* Accommodations Grid/List */}
            <div
              className={
                viewMode === "grid"
                  ? "grid md:grid-cols-2 xl:grid-cols-3 gap-6"
                  : "space-y-6"
              }
            >
              {accommodations.map((accommodation) => (
                <div
                  key={accommodation.id}
                  className={`bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    viewMode === "list" ? "flex gap-4" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative ${
                      viewMode === "list" ? "w-64 shrink-0" : "h-56"
                    } overflow-hidden`}
                  >
                    <img
                      src={accommodation.image}
                      alt={accommodation.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      {accommodation.featured && (
                        <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full">
                          Featured
                        </span>
                      )}
                      {accommodation.verified && (
                        <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                          Verified
                        </span>
                      )}
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                      <Star
                        size={12}
                        className="text-yellow-500"
                        fill="currentColor"
                      />
                      <span className="text-xs font-bold text-gray-900">
                        {accommodation.rating}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({accommodation.reviews})
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                      {accommodation.title}
                    </h3>

                    <div className="flex items-center gap-1 text-gray-600 mb-3">
                      <MapPin size={14} className="text-blue-600" />
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
                              className="flex items-center gap-1 text-xs font-medium bg-blue-50 text-blue-700 px-2 py-1 rounded-lg border border-blue-100"
                            >
                              <Icon size={12} />
                              {amenity}
                            </span>
                          );
                        })}
                    </div>

                    {/* View Button */}
                    <button 
                    onClick={() => navigate(`/view_accommodation/${accommodation.id}`)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                      View Details
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOfAccommodation;
