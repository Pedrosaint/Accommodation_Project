import { useState } from "react";
import { Outlet } from "react-router-dom";
import OwnerHeader from "./student_header";
import OwnerSidebar from "./student_sidebar";

const StudentLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <OwnerSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <OwnerHeader setSidebarOpen={setSidebarOpen} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet /> {/* nested route content scrolls here */}
        </main>
      </div>
    </div>
  );
};

export default StudentLayout;
