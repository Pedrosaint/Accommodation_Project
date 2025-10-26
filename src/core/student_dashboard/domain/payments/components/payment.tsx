import { CreditCard, Plus, Eye } from "lucide-react";

const Payment = () => {
  const payments = [
    {
      id: "PMT001",
      tenant: "Chinedu Okoro",
      property: "Peace Lodge - Room 101",
      amount: 150000,
      date: "2025-02-15",
      status: "Paid",
    },
    {
      id: "PMT002",
      tenant: "Amina Bello",
      property: "Comfort Apartments - Room 205",
      amount: 180000,
      date: "2025-02-20",
      status: "Pending",
    },
    {
      id: "PMT003",
      tenant: "John Adekunle",
      property: "Student Haven - Room 104",
      amount: 120000,
      date: "2025-02-10",
      status: "Failed",
    },
  ];

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Failed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <CreditCard className="text-blue-600" />
          Payments
        </h1>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transition">
          <Plus size={16} />
          Record Payment
        </button>
      </div>

      {/* Payment Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-semibold">
            <tr>
              <th className="px-6 py-3">Payment ID</th>
              <th className="px-6 py-3">Tenant</th>
              <th className="px-6 py-3">Property</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {payments.map((payment) => (
              <tr key={payment.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-gray-900">
                  {payment.id}
                </td>
                <td className="px-6 py-4 text-gray-700">{payment.tenant}</td>
                <td className="px-6 py-4 text-gray-700">{payment.property}</td>
                <td className="px-6 py-4 font-medium text-gray-900">
                  {formatCurrency(payment.amount)}
                </td>
                <td className="px-6 py-4 text-gray-600">{payment.date}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      payment.status
                    )}`}
                  >
                    {payment.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md">
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {payments.length === 0 && (
          <div className="p-6 text-center text-gray-500 text-sm">
            No payment records found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
