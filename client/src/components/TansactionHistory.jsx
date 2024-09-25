import React, { useContext, useMemo } from "react";
import Store from "../context/Store/Store";
import { AlertCircle, ArrowUpCircle, ArrowDownCircle } from "lucide-react";

const TransactionHistory = () => {
  const { state } = useContext(Store);
  const transactions = state.transactions || [];

  const tableRow = useMemo(() => {
    return transactions.map((transaction, index) => {
      const isPositive = transaction.type.toLowerCase() === "buy";
      return (
        <tr className="border-b" key={transaction.id || index}>
          <td className="px-6 py-4">{transaction.date}</td>
          <td
            className={`px-6 py-4 ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {isPositive ? (
              <ArrowUpCircle className="inline mr-1" />
            ) : (
              <ArrowDownCircle className="inline mr-1" />
            )}
            {transaction.type}
          </td>
          <td className="px-6 py-4">{transaction.symbol}</td>
          <td className="px-6 py-4">{transaction.quantity}</td>
          <td className="px-6 py-4">₹{transaction.price}</td>
          <td className="px-6 py-4">
            ₹{(transaction.price * transaction.quantity).toFixed(2)}
          </td>
        </tr>
      );
    });
  }, [transactions]);

  if (!transactions || transactions.length === 0) {
    return (
      <section className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <div className="flex items-center justify-center space-x-4">
          <AlertCircle className="text-yellow-500 w-8 h-8" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              No Transactions Found
            </h2>
            <p className="text-gray-600 mt-2">
              You haven't made any transactions yet. Start by adding some buy or
              sell transactions to track your portfolio activity.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-8">
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
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
          <tbody>{tableRow}</tbody>
        </table>
      </div>
    </section>
  );
};

export default TransactionHistory;
