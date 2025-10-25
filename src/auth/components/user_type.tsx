/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserType = () => {
  const [selectedType, setSelectedType] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (type: any) => {
    setSelectedType(type);
  };

  const handleContinue = () => {
    if (selectedType === "student") {
     navigate("/auth/student_signup");
    } else if (selectedType === "owner") {
     navigate("/auth/lodge_owner_signup");
      console.log(`Selected: ${selectedType}`);
      // You can use router.push() or context here
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-4xl shadow p-8 max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Join as a Student or Lodge Owner
          </h2>
          <p className="text-gray-600 text-lg">
            Select your account type to get started
          </p>
        </div>

        {/* User Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Student Option */}
          <div
            className={`relative border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
              selectedType === "student"
                ? "border-blue-500 bg-linear-to-br from-blue-50 to-indigo-50 transform -translate-y-2 shadow-lg"
                : "border-gray-200 bg-gray-50 hover:border-blue-300 hover:shadow-md"
            }`}
            onClick={() => handleSelect("student")}
          >
            {selectedType === "student" && (
              <div className="absolute top-4 right-4">
                <div className="bg-blue-500 text-white p-1 rounded-full">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            )}

            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Student
            </h3>
            <p className="text-gray-600 mb-4">
              Find and book perfect accommodations near your campus
            </p>
            <ul className="text-gray-600 space-y-2 text-left">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Search available rooms
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Book & pay securely
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Save favorite listings
              </li>
            </ul>
          </div>

          {/* Lodge Owner Option */}
          <div
            className={`relative border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
              selectedType === "owner"
                ? "border-purple-500 bg-linear-to-br from-purple-50 to-pink-50 transform -translate-y-2 shadow-lg"
                : "border-gray-200 bg-gray-50 hover:border-purple-300 hover:shadow-md"
            }`}
            onClick={() => handleSelect("owner")}
          >
            {selectedType === "owner" && (
              <div className="absolute top-4 right-4">
                <div className="bg-purple-500 text-white p-1 rounded-full">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            )}

            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Lodge Owner
            </h3>
            <p className="text-gray-600 mb-4">
              Manage your properties and reach more students
            </p>
            <ul className="text-gray-600 space-y-2 text-left">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                List your properties
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Manage bookings
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Receive payments
              </li>
            </ul>
          </div>
        </div>

        {/* Continue Button */}
        <button
          className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 cursor-pointer ${
            selectedType
              ? "bg-linear-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          onClick={handleContinue}
          disabled={!selectedType}
        >
          {selectedType
            ? `Continue as ${
                selectedType === "student" ? "Student" : "Lodge Owner"
              }`
            : "Select an account type to continue"}
        </button>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-600 font-semibold hover:text-blue-700 hover:underline"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserType;
