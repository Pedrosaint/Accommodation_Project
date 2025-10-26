import { Menu, Bell } from "lucide-react";

interface HeaderProps {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OwnerHeader = ({ setSidebarOpen }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between bg-white shadow px-6 py-4">
      {/* Mobile menu button */}
      <button
        className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu size={22} />
      </button>

      {/* Title */}
      <h1 className="text-lg font-semibold text-gray-700">Owner Dashboard</h1>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <button className="relative text-gray-500 hover:text-blue-600">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium text-gray-700">John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default OwnerHeader;
