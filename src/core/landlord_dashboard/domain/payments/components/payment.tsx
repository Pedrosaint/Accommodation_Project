import {
  CreditCard,
  Eye,
  Download,
  Filter,
  Search,
  TrendingUp,
  Calendar,
} from "lucide-react";
import { useState } from "react";

const Payment = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const payments = [
    {
      id: "PMT001",
      tenant: "Chinedu Okoro",
      property: "Peace Lodge - Room 101",
      amount: 150000,
      date: "2025-02-15",
      status: "Paid",
      duration: "Semester",
      method: "Bank Transfer",
    },
    {
      id: "PMT002",
      tenant: "Amina Bello",
      property: "Comfort Apartments - Room 205",
      amount: 180000,
      date: "2025-02-20",
      status: "Pending",
      duration: "Full Session",
      method: "Online Payment",
    },
    {
      id: "PMT003",
      tenant: "John Adekunle",
      property: "Student Haven - Room 104",
      amount: 120000,
      date: "2025-02-10",
      status: "Failed",
      duration: "Semester",
      method: "Card Payment",
    },
    {
      id: "PMT004",
      tenant: "Grace Okafor",
      property: "Peace Lodge - Room 102",
      amount: 160000,
      date: "2025-02-18",
      status: "Paid",
      duration: "Full Session",
      method: "Bank Transfer",
    },
    {
      id: "PMT005",
      tenant: "Michael Johnson",
      property: "Comfort Apartments - Room 201",
      amount: 175000,
      date: "2025-02-22",
      status: "Pending",
      duration: "Semester",
      method: "Online Payment",
    },
  ];

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.tenant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || payment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: payments.reduce((sum, payment) => sum + payment.amount, 0),
    paid: payments
      .filter((p) => p.status === "Paid")
      .reduce((sum, payment) => sum + payment.amount, 0),
    pending: payments
      .filter((p) => p.status === "Pending")
      .reduce((sum, payment) => sum + payment.amount, 0),
    failed: payments.filter((p) => p.status === "Failed").length,
  };

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-50 text-green-700 border-green-200";
      case "Pending":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "Failed":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };


  return (
    <div className="">
      <div className="">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="mb-4 lg:mb-0">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-xl">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Payment Management
              </h1>
            </div>
            <p className="text-gray-600">
              Manage and track all payment transactions
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:border-gray-400 transition-colors">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Revenue
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(stats.total)}
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-xl">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-2 text-xs text-green-600 font-medium">
              ↑ 12% from last month
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Paid Amount</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(stats.paid)}
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-xl">
                <CreditCard className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-600">
              {payments.filter((p) => p.status === "Paid").length} successful
              payments
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(stats.pending)}
                </p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-xl">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-600">
              {payments.filter((p) => p.status === "Pending").length} awaiting
              confirmation
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Failed Payments
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.failed}
                </p>
              </div>
              <div className="p-3 bg-red-100 rounded-xl">
                <div className="w-6 h-6 text-red-600">❌</div>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-600">Requires attention</div>
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
                  placeholder="Search by tenant, property, or payment ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="all">All Status</option>
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Failed">Failed</option>
              </select>

              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:border-gray-400 transition-colors">
                <Filter className="w-4 h-4" />
                More Filters
              </button>
            </div>
          </div>
        </div>

        {/* Payment Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Payment Details
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Tenant & Property
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Date & Duration
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredPayments.map((payment) => (
                  <tr
                    key={payment.id}
                    className="hover:bg-gray-50/80 transition-colors group"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          <CreditCard className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {payment.id}
                          </p>
                          <p className="text-sm text-gray-500">
                            {payment.method}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="font-medium text-gray-900">
                        {payment.tenant}
                      </p>
                      <p className="text-sm text-gray-600">
                        {payment.property}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="font-bold text-gray-900 text-lg">
                        {formatCurrency(payment.amount)}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="text-gray-900">{payment.date}</p>
                      <p className="text-sm text-gray-500">
                        {payment.duration}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                            payment.status
                          )}`}
                        >
                          {payment.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Download Receipt"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredPayments.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">💳</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No payments found
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                {searchTerm || statusFilter !== "all"
                  ? "Try adjusting your search or filter criteria"
                  : "No payment records available yet"}
              </p>
            </div>
          )}

          {/* Table Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600">
              <div className="mb-2 sm:mb-0">
                Showing{" "}
                <span className="font-semibold">{filteredPayments.length}</span>{" "}
                of <span className="font-semibold">{payments.length}</span>{" "}
                payments
              </div>
              <div className="flex items-center gap-4">
                <button className="hover:text-gray-900 transition-colors">
                  Previous
                </button>
                <span className="px-2">Page 1 of 1</span>
                <button className="hover:text-gray-900 transition-colors">
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

export default Payment;
