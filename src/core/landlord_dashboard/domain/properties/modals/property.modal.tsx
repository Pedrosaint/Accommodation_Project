/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Plus,
  Home,
  MapPin,
  Bed,
  DollarSign,
  Eye,
  Edit,
  AlertTriangle,
  Image,
} from "lucide-react";
import ImageUploader from "../components/image_uoloader";

const Backdrop = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClick}
    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
  >
    {children}
  </motion.div>
);

interface AddPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddPropertyModal: React.FC<AddPropertyModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    rooms: "",
    price: "",
    description: "",
    amenities: [] as string[],
  });

  const amenitiesList = [
    "Wi-Fi",
    "Parking",
    "Security",
    "Water Supply",
    "Power Supply",
    "Kitchen",
  ];

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    onClose();
  };

  const toggleAmenity = (amenity: string) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Backdrop onClick={onClose}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl z-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Plus size={20} className="text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Add New Property
                  </h2>
                  <p className="text-sm text-gray-500">
                    Fill in the property details
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Property Name <span className="text-red-700">*</span>
                </label>
                <div className="relative">
                  <Home
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g., Peace Lodge"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Location <span className="text-red-700">*</span>
                </label>
                <div className="relative">
                  <MapPin
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    placeholder="e.g., Lokoja, Kogi State"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Rooms <span className="text-red-700">*</span>
                  </label>
                  <div className="relative">
                    <Bed
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="number"
                      value={formData.rooms}
                      onChange={(e) =>
                        setFormData({ ...formData, rooms: e.target.value })
                      }
                      placeholder="24"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Price per Room <span className="text-red-700">*</span>
                  </label>
                  <div className="relative">
                    <DollarSign
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({ ...formData, price: e.target.value })
                      }
                      placeholder="₦150,000"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Describe the property..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Amenities
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {amenitiesList.map((amenity) => (
                    <label
                      key={amenity}
                      className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-500 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.amenities.includes(amenity)}
                        onChange={() => toggleAmenity(amenity)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Property Images
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                  <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600 mb-1">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                </div>
              </div> */}
              <ImageUploader />

              <div className="flex gap-3 pt-4">
                <button
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 px-6 py-3 whitespace-nowrap bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
                >
                  Add Property
                </button>
              </div>
            </div>
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

interface ViewPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: any;
}

export const ViewPropertyModal: React.FC<ViewPropertyModalProps> = ({
  isOpen,
  onClose,
  property,
}) => {
  if (!property) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Backdrop onClick={onClose}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Eye size={20} className="text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Property Details
                  </h2>
                  <p className="text-sm text-gray-500">
                    View property information
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <Image size={48} className="text-gray-400" />
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Property Name
                  </label>
                  <p className="text-lg font-bold text-gray-900 mt-1">
                    {property.name}
                  </p>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Location
                  </label>
                  <p className="text-gray-900 mt-1 flex items-center gap-2">
                    <MapPin size={16} className="text-gray-400" />
                    {property.location}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <label className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                      Total Rooms
                    </label>
                    <p className="text-2xl font-bold text-blue-900 mt-1">
                      {property.rooms}
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <label className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                      Occupied
                    </label>
                    <p className="text-2xl font-bold text-green-900 mt-1">
                      {property.occupied}
                    </p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Status
                  </label>
                  <p className="mt-1">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        property.status === "Available"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {property.status}
                    </span>
                  </p>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Occupancy Rate
                  </label>
                  <div className="mt-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">
                        {property.occupied} / {property.rooms} rooms
                      </span>
                      <span className="font-semibold text-blue-600">
                        {Math.round((property.occupied / property.rooms) * 100)}
                        %
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{
                          width: `${
                            (property.occupied / property.rooms) * 100
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

interface EditPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: any;
}

export const EditPropertyModal: React.FC<EditPropertyModalProps> = ({
  isOpen,
  onClose,
  property,
}) => {
  const [formData, setFormData] = useState(property || {});

  const handleSubmit = () => {
    console.log("Updated property:", formData);
    onClose();
  };

  if (!property) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Backdrop onClick={onClose}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Edit size={20} className="text-green-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Edit Property
                  </h2>
                  <p className="text-sm text-gray-500">
                    Update property details
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Property Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Total Rooms
                  </label>
                  <input
                    type="number"
                    value={formData.rooms}
                    onChange={(e) =>
                      setFormData({ ...formData, rooms: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Occupied Rooms
                  </label>
                  <input
                    type="number"
                    value={formData.occupied}
                    onChange={(e) =>
                      setFormData({ ...formData, occupied: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

interface DeletePropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  propertyName: string;
}

export const DeletePropertyModal: React.FC<DeletePropertyModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  propertyName,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Backdrop onClick={onClose}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full"
          >
            <div className="pt-8 pb-4 flex justify-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle size={32} className="text-red-600" />
              </div>
            </div>

            <div className="px-6 pb-6 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Delete Property?
              </h2>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete{" "}
                <span className="font-semibold text-gray-900">
                  {propertyName}
                </span>
                ? This action cannot be undone.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={onConfirm}
                  className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default function PropertyModalsDemo() {
  const [modals, setModals] = useState({
    add: false,
    view: false,
    edit: false,
    delete: false,
  });

  const sampleProperty = {
    id: 1,
    name: "Peace Lodge",
    location: "Lokoja, Kogi State",
    rooms: 24,
    occupied: 18,
    status: "Available",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Property Modals Demo
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setModals({ ...modals, add: true })}
            className="p-6 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold transition-colors"
          >
            Open Add Property Modal
          </button>
          <button
            onClick={() => setModals({ ...modals, view: true })}
            className="p-6 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold transition-colors"
          >
            Open View Property Modal
          </button>
          <button
            onClick={() => setModals({ ...modals, edit: true })}
            className="p-6 bg-green-600 text-white rounded-xl hover:bg-green-700 font-semibold transition-colors"
          >
            Open Edit Property Modal
          </button>
          <button
            onClick={() => setModals({ ...modals, delete: true })}
            className="p-6 bg-red-600 text-white rounded-xl hover:bg-red-700 font-semibold transition-colors"
          >
            Open Delete Modal
          </button>
        </div>
      </div>

      <AddPropertyModal
        isOpen={modals.add}
        onClose={() => setModals({ ...modals, add: false })}
      />
      <ViewPropertyModal
        isOpen={modals.view}
        onClose={() => setModals({ ...modals, view: false })}
        property={sampleProperty}
      />
      <EditPropertyModal
        isOpen={modals.edit}
        onClose={() => setModals({ ...modals, edit: false })}
        property={sampleProperty}
      />
      <DeletePropertyModal
        isOpen={modals.delete}
        onClose={() => setModals({ ...modals, delete: false })}
        onConfirm={() => {
          console.log("Property deleted");
          setModals({ ...modals, delete: false });
        }}
        propertyName={sampleProperty.name}
      />
    </div>
  );
}
