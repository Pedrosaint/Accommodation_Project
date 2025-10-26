import {
  Users,
  Search,
  Filter,
  Phone,
  Mail,
  Eye,
  MoreVertical,
  Check,
  Clock,
  Home,
} from "lucide-react";
import { useState } from "react";

const Tenants = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const tenants = [
    {
      id: 1,
      name: "John Doe",
      room: "A1",
      rentStatus: "Paid",
      phone: "08123456789",
      email: "john.doe@student.edu.ng",
      moveInDate: "2024-01-15",
      duration: "Full Session",
      property: "Peace Lodge",
    },
    {
      id: 2,
      name: "Mary Johnson",
      room: "B2",
      rentStatus: "Pending",
      phone: "09012345678",
      email: "mary.j@student.edu.ng",
      moveInDate: "2024-02-01",
      duration: "Semester",
      property: "Comfort Apartments",
    },
    {
      id: 3,
      name: "Michael Smith",
      room: "C3",
      rentStatus: "Paid",
      phone: "07098765432",
      email: "michael.s@student.edu.ng",
      moveInDate: "2024-01-20",
      duration: "Full Session",
      property: "Student Haven",
    },
    {
      id: 4,
      name: "Sarah Williams",
      room: "A2",
      rentStatus: "Pending",
      phone: "08122223333",
      email: "sarah.w@student.edu.ng",
      moveInDate: "2024-02-10",
      duration: "Semester",
      property: "Peace Lodge",
    },
    {
      id: 5,
      name: "David Brown",
      room: "D4",
      rentStatus: "Paid",
      phone: "08033334444",
      email: "david.b@student.edu.ng",
      moveInDate: "2024-01-25",
      duration: "Full Session",
      property: "Comfort Apartments",
    },
  ];

  const filteredTenants = tenants.filter((tenant) => {
    const matchesSearch =
      tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.room.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.property.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || tenant.rentStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: tenants.length,
    paid: tenants.filter((t) => t.rentStatus === "Paid").length,
    pending: tenants.filter((t) => t.rentStatus === "Pending").length,
    occupiedRooms: [...new Set(tenants.map((t) => t.room))].length,
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-50 text-green-700 border-green-200";
      case "Pending":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "Overdue":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };



  return (
    <div className="">
      <div className="">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center items-start lg:justify-between mb-8">
          <div className="mb-4 lg:mb-0">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-100 rounded-xl">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Tenant Management
              </h1>
            </div>
            <p className="text-gray-600">
              Manage all your tenants and their rental information
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:border-gray-400 transition-colors">
              <Filter className="w-4 h-4" />
              Export List
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Tenants
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.total}
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-xl">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-600">
              Across all properties
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Rent Paid</p>
                <p className="text-2xl font-bold text-gray-900">{stats.paid}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-xl">
                <div className="w-6 h-6 text-green-600">
                  <Check className="" />
                </div>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-600">
              Up to date with payments
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Pending Rent
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.pending}
                </p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-xl">
                <div className="w-6 h-6 text-yellow-600">
                  <Clock className="" />
                </div>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-600">Awaiting payment</div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Occupied Rooms
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.occupiedRooms}
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-xl">
                <div className="w-6 h-6 text-purple-600">
                  <Home className="" />
                </div>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-600">Currently occupied</div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search by tenant name, room, or property..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              >
                <option value="all">All Status</option>
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Overdue">Overdue</option>
              </select>

              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:border-gray-400 transition-colors">
                <Filter className="w-4 h-4" />
                More Filters
              </button>
            </div>
          </div>
        </div>

        {/* Tenants Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Tenant
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Room & Property
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Move-in Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Rent Status
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredTenants.map((tenant) => (
                  <tr
                    key={tenant.id}
                    className="hover:bg-gray-50/80 transition-colors group"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-linear-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {tenant.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {tenant.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {tenant.duration}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-sm font-medium">
                          {tenant.room}
                        </span>
                        <div>
                          <p className="font-medium text-gray-900">
                            Room {tenant.room}
                          </p>
                          <p className="text-sm text-gray-600">
                            {tenant.property}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-900">{tenant.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-600 truncate max-w-[150px]">
                            {tenant.email}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="text-gray-900 font-medium">
                        {tenant.moveInDate}
                      </p>
                      <p className="text-sm text-gray-500">Since move-in</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                            tenant.rentStatus
                          )}`}
                        >
                          {tenant.rentStatus}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                          title="Contact Tenant"
                        >
                          <Phone className="w-4 h-4" />
                        </button>
                        <button
                          className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                          title="More Options"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredTenants.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No tenants found
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                {searchTerm || statusFilter !== "all"
                  ? "Try adjusting your search or filter criteria"
                  : "No tenant records available yet"}
              </p>
            </div>
          )}

          {/* Table Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600">
              <div className="mb-2 sm:mb-0">
                Showing{" "}
                <span className="font-semibold">{filteredTenants.length}</span>{" "}
                of <span className="font-semibold">{tenants.length}</span>{" "}
                tenants
              </div>
              <div className="flex items-center gap-4">
                <button
                  className="hover:text-gray-900 transition-colors disabled:opacity-50"
                  disabled
                >
                  Previous
                </button>
                <span className="px-2">Page 1 of 1</span>
                <button
                  className="hover:text-gray-900 transition-colors disabled:opacity-50"
                  disabled
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tenants;
