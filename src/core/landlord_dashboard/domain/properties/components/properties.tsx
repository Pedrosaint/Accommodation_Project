/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Plus,
  Home,
  MapPin,
  Eye,
  Edit,
  Trash2,
  Search,
  Filter,
  Building2,
} from "lucide-react";
import {
  AddPropertyModal,
  ViewPropertyModal,
  EditPropertyModal,
  DeletePropertyModal,
} from "../modals/property.modal";

const Properties = () => {
  const [modals, setModals] = useState({
    add: false,
    edit: false,
    view: false,
    delete: false,
  });

  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const properties = [
    {
      id: 1,
      name: "Peace Lodge",
      location: "Lokoja, Kogi State",
      rooms: 24,
      occupied: 18,
      status: "Available",
      type: "Student Lodge",
      price: "₦150,000/year",
    },
    {
      id: 2,
      name: "Comfort Apartments",
      location: "Ankpa, Kogi State",
      rooms: 12,
      occupied: 12,
      status: "Fully Occupied",
      type: "Apartment",
      price: "₦200,000/year",
    },
    {
      id: 3,
      name: "Student Haven",
      location: "Anyigba, Kogi State",
      rooms: 30,
      occupied: 20,
      status: "Available",
      type: "Student Lodge",
      price: "₦120,000/year",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-700 border border-green-200";
      case "Fully Occupied":
        return "bg-yellow-100 text-yellow-700 border border-yellow-200";
      default:
        return "bg-gray-100 text-gray-700 border border-gray-200";
    }
  };

  const getOccupancyPercentage = (occupied: number, total: number) => {
    return Math.round((occupied / total) * 100);
  };

  const stats = [
    {
      label: "Total Properties",
      value: properties.length,
      icon: Building2,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      label: "Total Rooms",
      value: properties.reduce((acc, p) => acc + p.rooms, 0),
      icon: Home,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      label: "Occupied Rooms",
      value: properties.reduce((acc, p) => acc + p.occupied, 0),
      icon: Home,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
  ];

  return (
    <div className="">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center items-start space-y-2 justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-xl">
                <Home className="text-blue-600 w-7 h-7" />
              </div>
              Property Management
            </h1>
            <p className="text-gray-600">
              Manage all your properties and their details
            </p>
          </div>
          <button
            onClick={() => setModals({ ...modals, add: true })}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-1 md:py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border-2 border-blue-600"
          >
            <Plus size={20} />
            Add Property
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`bg-white border ${stat.borderColor} rounded-2xl p-6 hover:border-gray-300 transition-all duration-300`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-4 rounded-xl ${stat.bgColor} ${stat.color}`}>
                  <stat.icon className="w-7 h-7" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search properties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all font-medium text-gray-700">
            <Filter size={20} />
            Filter
          </button>
        </div>
      </div>

      {/* Properties Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-gray-300 transition-colors">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Property Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Rooms
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Occupancy
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {properties.map((property) => {
                const occupancyPercent = getOccupancyPercentage(
                  property.occupied,
                  property.rooms
                );

                return (
                  <tr
                    key={property.id}
                    className="hover:bg-blue-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Home className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {property.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {property.price}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPin size={16} className="text-gray-400" />
                        <span>{property.location}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-gray-700">{property.type}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-gray-900">
                        {property.rooms}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-gray-900">
                            {property.occupied}/{property.rooms}
                          </span>
                          <span className="text-xs text-gray-500">
                            ({occupancyPercent}%)
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-300 ${
                              occupancyPercent === 100
                                ? "bg-yellow-500"
                                : "bg-green-500"
                            }`}
                            style={{ width: `${occupancyPercent}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 rounded-lg text-xs font-semibold ${getStatusColor(
                          property.status
                        )}`}
                      >
                        {property.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        {/* View button */}
                        <button
                          onClick={() => {
                            setSelectedProperty(property);
                            setModals({ ...modals, view: true });
                          }}
                          className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-200"
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>

                        {/* Edit button */}
                        <button
                          onClick={() => {
                            setSelectedProperty(property);
                            setModals({ ...modals, edit: true });
                          }}
                          className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-all duration-200 border border-transparent hover:border-green-200"
                          title="Edit Property"
                        >
                          <Edit size={18} />
                        </button>

                        {/* Delete button */}
                        <button
                          onClick={() => {
                            setSelectedProperty(property);
                            setModals({ ...modals, delete: true });
                          }}
                          className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-all duration-200 border border-transparent hover:border-red-200"
                          title="Delete Property"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {properties.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No properties yet
            </h3>
            <p className="text-gray-600 mb-6">
              Get started by adding your first property
            </p>
            <button
              onClick={() => setModals({ ...modals, add: true })}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all"
            >
              <Plus size={20} />
              Add Your First Property
            </button>
          </div>
        )}
      </div>

      {/* Modals Section */}
      <AddPropertyModal
        isOpen={modals.add}
        onClose={() => setModals({ ...modals, add: false })}
      />

      <ViewPropertyModal
        isOpen={modals.view}
        onClose={() => setModals({ ...modals, view: false })}
        property={selectedProperty}
      />

      <EditPropertyModal
        isOpen={modals.edit}
        onClose={() => setModals({ ...modals, edit: false })}
        property={selectedProperty}
      />

      <DeletePropertyModal
        isOpen={modals.delete}
        onClose={() => setModals({ ...modals, delete: false })}
        onConfirm={() => {
          console.log("Deleted:", selectedProperty?.name);
          setModals({ ...modals, delete: false });
        }}
        propertyName={selectedProperty?.name || ""}
      />
    </div>
  );
};

export default Properties;
