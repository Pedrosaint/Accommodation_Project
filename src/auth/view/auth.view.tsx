import { Home } from "lucide-react";
import { Link, Outlet } from "react-router-dom"

const AuthView = () => {
  return (
    <div className="bg-linear-to-br from-blue-50 to-indigo-100">
      {/* Logo */}
      <Link to="/" className="group flex items-center gap-2">
        <div className="relative px-5 py-5">
          <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            <Home className="w-6 h-6 text-white" />
          </div>
          <div className="absolute inset-0 w-10 h-10 bg-blue-600 rounded-lg opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-blue-700">Accommo</span>
            <span className="text-transparent bg-clip-text bg-linear-to-br from-indigo-600 to-blue-600">
              Hub
            </span>
          </span>
          <span className="text-[10px] text-gray-500 -mt-1">
            Find Your Perfect Stay
          </span>
        </div>
      </Link>
      <Outlet />
    </div>
  );
}

export default AuthView
