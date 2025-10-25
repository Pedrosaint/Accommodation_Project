import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Home, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Find Accommodations", path: "/accommodations" },
    { name: "Contact", path: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg"
          : "bg-white/80 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2">
            <div className="relative">
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative px-4 py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-3/4 transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative group">
              <div className="flex items-center bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-blue-300 rounded-xl px-4 py-2.5 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                <Search
                  size={18}
                  className="text-gray-400 group-focus-within:text-blue-600 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Search accommodations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent focus:outline-none px-3 text-sm w-48 text-gray-700 placeholder-gray-400"
                />
              </div>
            </form>

            {/* Auth Buttons */}
            <Link
              to="/auth/user_type"
              className="flex items-center gap-2 px-5 py-2.5 text-blue-600 border-2 border-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              <User className="w-4 h-4 " />
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <X size={26} className="text-gray-700" />
            ) : (
              <Menu size={26} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
              style={{ top: "72px" }}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white shadow-2xl border-t border-gray-100"
            >
              <div className="container mx-auto px-6 py-6 space-y-4">
                {/* Search Bar (Mobile) */}
                <form
                  onSubmit={handleSearch}
                  className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"
                >
                  <Search size={18} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search accommodations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent focus:outline-none px-3 text-sm w-full text-gray-700"
                  />
                </form>

                {/* Navigation Links */}
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMenuOpen(false)}
                        className="block px-4 py-3 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-300"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-4"></div>

                {/* Auth Buttons (Mobile) */}
                <div className="space-y-3">
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="block text-center px-5 py-3 text-blue-600 border-2 border-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMenuOpen(false)}
                    className="block text-center px-5 py-3 bg-linear-to-br from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
