 import { AlertCircle, CreditCard, Mail, MapPin, MessageSquare, Phone, ShieldAlert } from "lucide-react";
import { useState } from "react";

// Define TypeScript interfaces
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  userType: string;
}

interface ContactErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  userType?: string;
  submit?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    userType: "student",
  });

  const [errors, setErrors] = useState<ContactErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof ContactErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ContactErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Contact form submitted:", formData);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        userType: "student",
      });
    } catch (error) {
      console.error("Failed to submit form:", error);
      setErrors({ submit: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 py-22">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're here to help you find the perfect accommodation or manage your
            properties. Reach out to us with any questions or concerns.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Mail size={24} />,
                  title: "Email Us",
                  content: "support@studentlodgenigeria.com",
                  description: "Send us an email anytime",
                },
                {
                  icon: <Phone size={24} />,
                  title: "Call Us",
                  content: "+234 800 123 4567",
                  description: "Mon to Fri, 9am to 6pm",
                },
                {
                  icon: <MessageSquare size={24} />,
                  title: "Live Chat",
                  content: "Start Chat",
                  description: "Instant help available",
                },
                {
                  icon: <MapPin size={24} />,
                  title: "Office",
                  content: "Lagos, Nigeria",
                  description: "Visit our main office",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="text-3xl mb-4">{contact.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-gray-900 font-medium mb-1">
                    {contact.content}
                  </p>
                  <p className="text-gray-500 text-sm">{contact.description}</p>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {[
                  {
                    question: "How do I verify my student status?",
                    answer:
                      "You can verify using your school ID card or admission letter during registration.",
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer:
                      "We accept bank transfers, debit cards, and online payments through secure gateways.",
                  },
                  {
                    question: "How do I list my property?",
                    answer:
                      "Register as a lodge owner, complete your profile, and start listing your properties.",
                  },
                  {
                    question: "Is my payment secure?",
                    answer:
                      "Yes, we use industry-standard encryption and secure payment processors.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-4 last:border-b-0"
                  >
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <button className="mt-6 text-blue-600 hover:text-blue-700 font-medium text-sm">
                View all FAQs →
              </button>
            </div>

            {/* Support Hours */}
            <div className="bg-linear-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Support Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Emergency Support Only</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-white/20 rounded-lg">
                <p className="text-sm">
                  Emergency support available 24/7 for urgent accommodation
                  issues
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 self-start">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for contacting us. We'll get back to you within 24
                  hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Send us a Message
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and we'll respond promptly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* User Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      I am a *
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { value: "student", label: "Student" },
                        { value: "lodge-owner", label: "Lodge Owner" },
                        { value: "other", label: "Other" },
                      ].map((type) => (
                        <label key={type.value} className="flex items-center">
                          <input
                            type="radio"
                            name="userType"
                            value={type.value}
                            checked={formData.userType === type.value}
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            {type.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                          errors.name
                            ? "border-red-300 focus:ring-red-200"
                            : "border-gray-300 focus:ring-blue-200"
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

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
                            : "border-gray-300 focus:ring-blue-200"
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                        errors.subject
                          ? "border-red-300 focus:ring-red-200"
                          : "border-gray-300 focus:ring-blue-200"
                      }`}
                    >
                      <option value="">Select a subject</option>
                      <option value="accommodation-help">
                        Need help finding accommodation
                      </option>
                      <option value="property-listing">
                        Want to list my property
                      </option>
                      <option value="payment-issue">
                        Payment related issue
                      </option>
                      <option value="technical-support">
                        Technical support
                      </option>
                      <option value="partnership">Partnership inquiry</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all resize-none ${
                        errors.message
                          ? "border-red-300 focus:ring-red-200"
                          : "border-gray-300 focus:ring-blue-200"
                      }`}
                      placeholder="Please describe your inquiry in detail..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-linear-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500 shadow-lg hover:shadow-xl"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                        Sending Message...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                  {/* Submit Error */}
                  {errors.submit && (
                    <div className="rounded-lg bg-red-50 p-4 border border-red-200">
                      <p className="text-sm text-red-800">{errors.submit}</p>
                    </div>
                  )}
                </form>
              </>
            )}
          </div>
        </div>

        {/* Quick Help Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Need Immediate Help?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: <AlertCircle size={24} />,
                title: "Urgent Accommodation Issue",
                description:
                  "Contact emergency support for immediate assistance with critical accommodation problems",
                action: "Call Emergency Line",
                phone: "+234 800 911 1199",
              },
              {
                icon: <CreditCard size={24} />,
                title: "Payment Problems",
                description:
                  "Having issues with payments or refunds? Get quick resolution",
                action: "Payment Support",
                email: "payments@studentlodgenigeria.com",
              },
              {
                icon: <ShieldAlert size={24} />,
                title: "Account Security",
                description:
                  "Report security concerns or suspicious activities immediately",
                action: "Security Team",
                email: "security@studentlodgenigeria.com",
              },
            ].map((help, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <div className="text-4xl mb-4">{help.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{help.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{help.description}</p>
                <div className="space-y-2">
                  <div className="font-semibold text-blue-600">
                    {help.action}
                  </div>
                  <div className="text-sm text-gray-500">
                    {help.phone || help.email}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
