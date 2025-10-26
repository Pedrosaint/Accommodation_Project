import { useState } from "react";
import { Outlet } from "react-router-dom";
import OwnerHeader from "./owner_header";
import OwnerSidebar from "./owner_sidebar";

const OwnerLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <OwnerSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <OwnerHeader setSidebarOpen={setSidebarOpen} />

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <div className="min-h-full px-3 py-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerLayout;
