import {
  Home,
  Users,
  Wallet,
  Clock,
  PlusCircle,
  List,
  FileText,
  Wrench,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface PropertyStats {
  totalProperties: number;
  occupied: number;
  vacant: number;
  maintenance: number;
}

interface FinancialStats {
  totalRevenue: number;
  pendingPayments: number;
  thisMonth: number;
  lastMonth: number;
}

interface Booking {
  id: string;
  studentName: string;
  property: string;
  checkIn: string;
  status: "confirmed" | "pending" | "cancelled";
  amount: number;
}

interface MaintenanceRequest {
  id: string;
  property: string;
  issue: string;
  priority: "high" | "medium" | "low";
  status: "open" | "in-progress" | "resolved";
  date: string;
}

const Dashboard = () => {
  const propertyStats: PropertyStats = {
    totalProperties: 12,
    occupied: 8,
    vacant: 3,
    maintenance: 1,
  };

  const financialStats: FinancialStats = {
    totalRevenue: 2450000,
    pendingPayments: 450000,
    thisMonth: 650000,
    lastMonth: 580000,
  };

  const recentBookings: Booking[] = [
    {
      id: "BK001",
      studentName: "Chinedu Okoro",
      property: "Peace Lodge - Room 101",
      checkIn: "2024-02-15",
      status: "confirmed",
      amount: 150000,
    },
    {
      id: "BK002",
      studentName: "Amina Bello",
      property: "Comfort Apartments - Room 205",
      checkIn: "2024-02-20",
      status: "pending",
      amount: 180000,
    },
  ];

  const maintenanceRequests: MaintenanceRequest[] = [
    {
      id: "MT001",
      property: "Peace Lodge - Room 101",
      issue: "Water leakage in bathroom",
      priority: "high",
      status: "open",
      date: "2024-02-08",
    },
  ];

  const revenueData = [
    { name: "Jan", revenue: 450 },
    { name: "Feb", revenue: 580 },
    { name: "Mar", revenue: 720 },
    { name: "Apr", revenue: 800 },
    { name: "May", revenue: 750 },
    { name: "Jun", revenue: 900 },
  ];

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
      case "resolved":
        return "bg-green-100 text-green-700";
      case "pending":
      case "in-progress":
        return "bg-yellow-100 text-yellow-700";
      case "cancelled":
      case "open":
      case "high":
        return "bg-red-100 text-red-700";
      case "medium":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            title: "Total Properties",
            value: propertyStats.totalProperties,
            icon: Home,
            color: "text-blue-600 bg-blue-100",
          },
          {
            title: "Occupied",
            value: propertyStats.occupied,
            icon: Users,
            color: "text-green-600 bg-green-100",
          },
          {
            title: "Total Revenue",
            value: formatCurrency(financialStats.totalRevenue),
            icon: Wallet,
            color: "text-purple-600 bg-purple-100",
          },
          {
            title: "Pending Payments",
            value: formatCurrency(financialStats.pendingPayments),
            icon: Clock,
            color: "text-yellow-600 bg-yellow-100",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-between shadow-sm"
          >
            <div>
              <p className="text-sm text-gray-600">{stat.title}</p>
              <p className="text-2xl font-semibold text-gray-900">
                {stat.value}
              </p>
            </div>
            <div
              className={`p-3 rounded-lg ${stat.color} flex items-center justify-center`}
            >
              <stat.icon className="w-6 h-6" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Revenue Overview
            </h3>
            <select className="border border-gray-200 rounded-lg px-3 py-1 text-sm">
              <option>Last 6 months</option>
              <option>Last 12 months</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Quick Actions */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: PlusCircle, label: "Add Property" },
              { icon: List, label: "Manage Listings" },
              { icon: Wallet, label: "View Payments" },
              { icon: FileText, label: "Reports" },
            ].map((action, index) => (
              <button
                key={index}
                className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-all"
              >
                <action.icon className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-sm font-medium text-gray-700">
                  {action.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Bookings + Maintenance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Recent Bookings */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Bookings
            </h3>
            <button className="text-blue-600 hover:underline text-sm">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentBookings.map((b) => (
              <div
                key={b.id}
                className="flex items-center justify-between p-3 border border-gray-100 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900">{b.studentName}</p>
                  <p className="text-sm text-gray-600">{b.property}</p>
                  <p className="text-xs text-gray-500">Check-in: {b.checkIn}</p>
                </div>
                <div className="text-right">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      b.status
                    )}`}
                  >
                    {b.status}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 mt-1">
                    {formatCurrency(b.amount)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance Requests */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-red-600" />
              Maintenance Requests
            </h3>
            <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">
              {maintenanceRequests.length} Active
            </span>
          </div>
          <div className="space-y-3">
            {maintenanceRequests.map((m) => (
              <div
                key={m.id}
                className="p-3 border border-gray-100 rounded-lg flex justify-between items-start"
              >
                <div>
                  <p className="font-medium text-gray-900">{m.property}</p>
                  <p className="text-sm text-gray-600">{m.issue}</p>
                  <p className="text-xs text-gray-500 mt-1">{m.date}</p>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    m.status
                  )}`}
                >
                  {m.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
