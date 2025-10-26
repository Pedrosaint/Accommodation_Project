import {
  Home,
  Users,
  Wallet,
  Clock,
  PlusCircle,
  Wrench,
  TrendingUp,
  ArrowRight,
  Calendar,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { AddPropertyModal } from "../../properties/modals/property.modal";

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
  const [modals, setModals] = useState({
    add: false,
    edit: false,
    view: false,
    delete: false,
  });
  const navigate = useNavigate();

  const handleAction = (label: string) => {
    if (label === "Add Property") {
      setModals({ ...modals, add: true });
    } else if (label === "View Payments") {
      navigate("/lodge_owner/payments");
    }
  };

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
    { name: "Jul", revenue: 650 },
    { name: "Aug", revenue: 750 },
    { name: "Sep", revenue: 850 },
    { name: "Oct", revenue: 950 },
    { name: "Nov", revenue: 1050 },
    { name: "Dec", revenue: 1150 },
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
        return "bg-green-100 text-green-700 border border-green-200";
      case "pending":
      case "in-progress":
        return "bg-yellow-100 text-yellow-700 border border-yellow-200";
      case "cancelled":
      case "open":
      case "high":
        return "bg-red-100 text-red-700 border border-red-200";
      case "medium":
        return "bg-orange-100 text-orange-700 border border-orange-200";
      default:
        return "bg-gray-100 text-gray-700 border border-gray-200";
    }
  };

  const statsCards = [
    {
      title: "Total Properties",
      value: propertyStats.totalProperties,
      icon: Home,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      change: "+2 this month",
      changePositive: true,
    },
    {
      title: "Occupied",
      value: propertyStats.occupied,
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      change: "66% occupancy",
      changePositive: true,
    },
    {
      title: "Total Revenue",
      value: formatCurrency(financialStats.totalRevenue),
      icon: Wallet,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      change: "+12% vs last month",
      changePositive: true,
    },
    {
      title: "Pending Payments",
      value: formatCurrency(financialStats.pendingPayments),
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      change: "3 overdue",
      changePositive: false,
    },
  ];

  return (
    <div className="">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Dashboard
        </h1>
        <p className="text-gray-600">
          Welcome back! Here's what's happening with your properties today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsCards.map((stat, i) => (
          <div
            key={i}
            className={`bg-white border ${stat.borderColor} rounded-2xl p-6 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1 group`}
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`p-3 rounded-xl ${stat.bgColor} ${stat.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="w-6 h-6" />
              </div>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  stat.changePositive
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-colors">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Revenue Overview
              </h3>
              <p className="text-sm text-gray-600">
                Monthly revenue for the last 12 months
              </p>
            </div>
            <select className="border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
              <option>Last 6 months</option>
              <option>Last 12 months</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="name"
                stroke="#9ca3af"
                style={{ fontSize: "12px" }}
              />
              <YAxis stroke="#9ca3af" style={{ fontSize: "12px" }} />
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                  fontSize: "14px",
                }}
              />
              <Bar dataKey="revenue" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Quick Actions */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-colors">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Quick Actions
          </h3>
          <div className="space-y-3">
            {[
              { icon: PlusCircle, label: "Add Property", color: "blue" },
              { icon: Wallet, label: "View Payments", color: "green" },
              { icon: TrendingUp, label: "View Analytics", color: "purple" },
              { icon: Calendar, label: "Manage Bookings", color: "orange" },
            ].map((action, index) => (
              <button
                key={index}
                onClick={() => handleAction(action.label)}
                className={`w-full flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-${action.color}-300 hover:bg-${action.color}-50 transition-all duration-300 group`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg bg-${action.color}-100 text-${action.color}-600 group-hover:scale-110 transition-transform`}
                  >
                    <action.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-gray-900">
                    {action.label}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Bookings + Maintenance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Bookings */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-colors">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Recent Payments
              </h3>
              <p className="text-sm text-gray-600">
                Latest transactions from tenants
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
              View All
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            {recentBookings.map((b) => (
              <div
                key={b.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                      {b.studentName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {b.studentName}
                      </p>
                      <p className="text-sm text-gray-600">{b.property}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 ml-12">
                    <Calendar className="w-3 h-3" />
                    <span>Check-in: {b.checkIn}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-semibold ${getStatusColor(
                      b.status
                    )}`}
                  >
                    {b.status}
                  </span>
                  <p className="text-sm font-bold text-gray-900 mt-2">
                    {formatCurrency(b.amount)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance Requests */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6  transition-colors">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <Wrench className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="md:text-xl font-bold text-gray-900">
                  Maintenance Requests
                </h3>
                <p className="text-sm text-gray-600">
                  Active issues requiring attention
                </p>
              </div>
            </div>
            <span className="bg-red-100 text-red-700 whitespace-nowrap text-sm font-bold px-3 py-1 rounded-lg border border-red-200">
              {maintenanceRequests.length} Active
            </span>
          </div>
          <div className="space-y-3">
            {maintenanceRequests.map((m) => (
              <div
                key={m.id}
                className="p-4 border-2 border-red-200 rounded-xl hover:border-red-300 hover:bg-red-50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <p className="font-semibold text-gray-900">
                        {m.property}
                      </p>
                    </div>
                    <p className="text-sm text-gray-700 ml-6">{m.issue}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-semibold ${getStatusColor(
                      m.status
                    )}`}
                  >
                    {m.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 ml-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{m.date}</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Take Action →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AddPropertyModal
        isOpen={modals.add}
        onClose={() => setModals({ ...modals, add: false })}
      />
    </div>
  );
};

export default Dashboard;
