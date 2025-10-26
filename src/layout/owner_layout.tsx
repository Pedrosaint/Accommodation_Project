import { useState } from "react";
import { Outlet } from "react-router-dom";
import OwnerHeader from "./owner_header";
import OwnerSidebar from "./owner_sidebar";

const OwnerLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <OwnerSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <OwnerHeader setSidebarOpen={setSidebarOpen} />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet /> {/* nested route content */}
        </main>
      </div>
    </div>
  );
};

export default OwnerLayout;
