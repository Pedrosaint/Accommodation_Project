import {
  Home,
  Building,
  CreditCard,
  User,
  LogOut,
  X,
  ChevronRight,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const navLinks = [
  {
    name: "Dashboard",
    path: "/lodge_owner/dashboard",
    icon: Home,
  },
  {
    name: "Properties",
    path: "/lodge_owner/properties",
    icon: Building,
  },
  {
    name: "Payments",
    path: "/lodge_owner/payments",
    icon: CreditCard,
  },
  {
    name: "Tenants",
    path: "/lodge_owner/tenants",
    icon: User,
  },
];

export default function OwnerSidebar({
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-all duration-300 ease-in-out lg:translate-x-0 lg:static lg:shadow-xl ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header Section */}
          <div className="relative p-6 border-b border-gray-100">
            {/* Close button - Mobile only */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Logo */}
            <div
              className="group flex items-center gap-3"
            >
              <div className="relative">
                <div className="absolute inset-0 w-12 h-12 bg-blue-600 rounded-xl opacity-0 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">
                  Accommo<span className="text-blue-600">Hub</span>
                </span>
                <span className="text-xs text-gray-500">Owner Dashboard</span>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navLinks.map((link, index) => {
              const active = location.pathname === link.path;
              const Icon = link.icon;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 overflow-hidden ${
                    active
                      ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow shadow-blue-500/30"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Background shine effect for active */}
                  {active && (
                    <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                  )}

                  {/* Icon */}
                  <div
                    className={`relative z-10 shrink-0 ${
                      active
                        ? ""
                        : "group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Text */}
                  <span className="relative z-10 flex-1">{link.name}</span>

                  {/* Arrow indicator - shows on hover for inactive, always for active */}
                  <ChevronRight
                    className={`w-4 h-4 transition-all duration-300 ${
                      active
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}
                  />

                  {/* Active indicator line */}
                  {active && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"></div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Footer Section */}
          <div className="p-4 border-t border-gray-100">
            {/* User Info Card */}
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl p-4 mb-3 border border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">
                    John Doe
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    owner@accommohub.ng
                  </p>
                </div>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={() => {
                // Add logout logic here
                console.log("Logging out...");
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl font-medium transition-all duration-300 group border-2 border-transparent hover:border-red-200"
            >
              <LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
