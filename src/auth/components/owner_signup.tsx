/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";

interface OwnerFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  companyName: string;
  businessType: string;
  businessRegistration: string;
  address: string;
  city: string;
  state: string;
  bankName: string;
  accountNumber: string;
  accountName: string;
  agreeToTerms: boolean;
}

interface OwnerErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  phone?: string;
  companyName?: string;
  businessType?: string;
  businessRegistration?: string;
  address?: string;
  city?: string;
  state?: string;
  bankName?: string;
  accountNumber?: string;
  accountName?: string;
  agreeToTerms?: string;
  submit?: string;
}

const OwnerSignup = () => {
  const [formData, setFormData] = useState<OwnerFormData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    companyName: "",
    businessType: "",
    businessRegistration: "",
    address: "",
    city: "",
    state: "",
    bankName: "",
    accountNumber: "",
    accountName: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<OwnerErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof OwnerErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: OwnerErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.companyName)
      newErrors.companyName = "Company name is required";
    if (!formData.businessType)
      newErrors.businessType = "Business type is required";
    if (!formData.address) newErrors.address = "Business address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.bankName) newErrors.bankName = "Bank name is required";
    if (!formData.accountNumber)
      newErrors.accountNumber = "Account number is required";
    if (!formData.accountName)
      newErrors.accountName = "Account name is required";
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = "You must agree to the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      console.log("Owner signup data:", formData);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Owner account created successfully!");
    } catch (error) {
      setErrors({ submit: "Failed to create account. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const nigerianStates = [
    "Lagos",
    "Abuja",
    "Rivers",
    "Delta",
    "Oyo",
    "Kano",
    "Kaduna",
    "Edo",
    "Plateau",
    "Ogun",
    "Ondo",
    "Enugu",
    "Anambra",
    "Imo",
    "Abia",
    "Cross River",
    "Akwa Ibom",
    "Bayelsa",
    "Benue",
    "Borno",
  ];

  const nigerianBanks = [
    "Access Bank",
    "First Bank",
    "Guaranty Trust Bank (GTB)",
    "United Bank for Africa (UBA)",
    "Zenith Bank",
    "First City Monument Bank (FCMB)",
    "Stanbic IBTC Bank",
    "Union Bank",
    "Sterling Bank",
    "Fidelity Bank",
    "Ecobank Nigeria",
    "Polaris Bank",
    "Wema Bank",
    "Keystone Bank",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🏠</div>
            <h1 className="text-lg md:text-3xl font-bold text-gray-800 mb-2">
              Lodge Owner Sign Up
            </h1>
            <p className="text-gray-600">
              Create your account to manage student accommodations
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                  errors.fullName
                    ? "border-red-300 focus:ring-red-200"
                    : "border-gray-300 focus:ring-purple-200"
                }`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                    errors.email
                      ? "border-red-300 focus:ring-red-200"
                      : "border-gray-300 focus:ring-purple-200"
                  }`}
                  placeholder="owner@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                    errors.phone
                      ? "border-red-300 focus:ring-red-200"
                      : "border-gray-300 focus:ring-purple-200"
                  }`}
                  placeholder="+234 800 000 0000"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Business Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Company Name *
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                    errors.companyName
                      ? "border-red-300 focus:ring-red-200"
                      : "border-gray-300 focus:ring-purple-200"
                  }`}
                  placeholder="Your company or business name"
                />
                {errors.companyName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.companyName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="businessType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Business Type *
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                    errors.businessType
                      ? "border-red-300 focus:ring-red-200"
                      : "border-gray-300 focus:ring-purple-200"
                  }`}
                >
                  <option value="">Select business type</option>
                  <option value="individual">Individual</option>
                  <option value="partnership">Partnership</option>
                  <option value="limited-liability">
                    Limited Liability Company
                  </option>
                  <option value="corporation">Corporation</option>
                </select>
                {errors.businessType && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.businessType}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="businessRegistration"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Business Registration Number
                </label>
                <input
                  id="businessRegistration"
                  name="businessRegistration"
                  type="text"
                  value={formData.businessRegistration}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all"
                  placeholder="RC 123456 (Optional)"
                />
              </div>
            </div>

            {/* Address Information */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Business Address *
              </label>
              <input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                  errors.address
                    ? "border-red-300 focus:ring-red-200"
                    : "border-gray-300 focus:ring-purple-200"
                }`}
                placeholder="Street address, P.O. Box, etc."
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-600">{errors.address}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  City *
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                    errors.city
                      ? "border-red-300 focus:ring-red-200"
                      : "border-gray-300 focus:ring-purple-200"
                  }`}
                  placeholder="City"
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  State *
                </label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                    errors.state
                      ? "border-red-300 focus:ring-red-200"
                      : "border-gray-300 focus:ring-purple-200"
                  }`}
                >
                  <option value="">Select state</option>
                  {nigerianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.state && (
                  <p className="mt-1 text-sm text-red-600">{errors.state}</p>
                )}
              </div>
            </div>

            {/* Bank Information */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Bank Account Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="bankName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Bank Name *
                  </label>
                  <select
                    id="bankName"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                      errors.bankName
                        ? "border-red-300 focus:ring-red-200"
                        : "border-gray-300 focus:ring-purple-200"
                    }`}
                  >
                    <option value="">Select your bank</option>
                    {nigerianBanks.map((bank) => (
                      <option key={bank} value={bank}>
                        {bank}
                      </option>
                    ))}
                  </select>
                  {errors.bankName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.bankName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="accountNumber"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Account Number *
                  </label>
                  <input
                    id="accountNumber"
                    name="accountNumber"
                    type="text"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                      errors.accountNumber
                        ? "border-red-300 focus:ring-red-200"
                        : "border-gray-300 focus:ring-purple-200"
                    }`}
                    placeholder="10-digit account number"
                  />
                  {errors.accountNumber && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.accountNumber}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="accountName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Account Name *
                </label>
                <input
                  id="accountName"
                  name="accountName"
                  type="text"
                  value={formData.accountName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                    errors.accountName
                      ? "border-red-300 focus:ring-red-200"
                      : "border-gray-300 focus:ring-purple-200"
                  }`}
                  placeholder="Name as it appears on bank account"
                />
                {errors.accountName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.accountName}
                  </p>
                )}
              </div>
            </div>

            {/* Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password *
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                    errors.password
                      ? "border-red-300 focus:ring-red-200"
                      : "border-gray-300 focus:ring-purple-200"
                  }`}
                  placeholder="At least 6 characters"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Confirm Password *
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                    errors.confirmPassword
                      ? "border-red-300 focus:ring-red-200"
                      : "border-gray-300 focus:ring-purple-200"
                  }`}
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded mt-1"
              />
              <label
                htmlFor="agreeToTerms"
                className="ml-2 block text-sm text-gray-700"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="text-purple-600 hover:text-purple-500 font-medium"
                >
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-purple-600 hover:text-purple-500 font-medium"
                >
                  Privacy Policy
                </a>
                *
              </label>
            </div>
            {errors.agreeToTerms && (
              <p className="text-sm text-red-600">{errors.agreeToTerms}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:ring-purple-500"
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Creating Account...
                </div>
              ) : (
                "Create Lodge Owner Account"
              )}
            </button>

            {errors.submit && (
              <div className="rounded-lg bg-red-50 p-4">
                <p className="text-sm text-red-800">{errors.submit}</p>
              </div>
            )}
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="font-semibold text-purple-600 hover:text-purple-500 hover:underline"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerSignup;
