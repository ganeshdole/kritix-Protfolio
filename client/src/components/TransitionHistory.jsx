import React from "react";

const TransactionHistory = () => {
  return (
    <section className="mt-8">
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <h2 className="text-xl font-bold m-4">Transaction History</h2>
        <table className="w-full text-left text-sm text-gray-500 bg-white rounded-lg">
          <thead className="text-xs uppercase bg-gray-50 text-gray-700">
            <tr>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3">Symbol</th>
              <th className="px-6 py-3">Quantity</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-6 py-4">2023-09-24</td>
              <td className="px-6 py-4 text-green-600">BUY</td>
              <td className="px-6 py-4">AAPL</td>
              <td className="px-6 py-4">10</td>
              <td className="px-6 py-4">152.00</td>
              <td className="px-6 py-4">1520.00</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TransactionHistory;
