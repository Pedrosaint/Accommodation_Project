import { Home, Building, Calendar, CreditCard, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const navLinks = [
  { name: "Dashboard", path: "/owner/dashboard", icon: <Home size={18} /> },
  {
    name: "Properties",
    path: "/owner/properties",
    icon: <Building size={18} />,
  },
  { name: "Bookings", path: "/owner/bookings", icon: <Calendar size={18} /> },
  { name: "Payments", path: "/owner/payments", icon: <CreditCard size={18} /> },
  { name: "Profile", path: "/owner/profile", icon: <User size={18} /> },
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
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <div className="h-full flex flex-col p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              A
            </div>
            <h1 className="text-lg font-semibold text-gray-800">AccommoHub</h1>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all ${
                    active
                      ? "bg-blue-600 text-white shadow"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="mt-auto pt-6 border-t border-gray-200">
            <button className="text-sm text-gray-500 hover:text-red-600">
              Log Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
