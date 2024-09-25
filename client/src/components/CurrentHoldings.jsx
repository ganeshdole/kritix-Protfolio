import React from "react";

const CurrentHoldings = () => {
  return (
    <section className="mt-8">
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 bg-white rounded-lg">
          <thead className="text-xs uppercase bg-gray-50 text-gray-700">
            <tr>
              <th className="px-6 py-3">Symbol</th>
              <th className="px-6 py-3">Quantity</th>
              <th className="px-6 py-3">Avg Price</th>
              <th className="px-6 py-3">Current Price</th>
              <th className="px-6 py-3">Total Value</th>
              <th className="px-6 py-3">Gain/Loss</th>
              <th className="px-6 py-3">% Gain/Loss</th>
              <th className="px-6 py-3">Sector</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-6 py-4">AAPL</td>
              <td className="px-6 py-4">10</td>
              <td className="px-6 py-4">152.00</td>
              <td className="px-6 py-4">
                <input
                  type="text"
                  defaultValue="156"
                  className="w-16 border border-gray-300 px-2 py-1 rounded-md focus:outline-none"
                />
                <button className="ml-2 text-gray-500 hover:text-black">
                  &#8635;
                </button>
              </td>
              <td className="px-6 py-4">1550.00</td>
              <td className="px-6 py-4 text-green-600 font-semibold">30.00</td>
              <td className="px-6 py-4 text-green-600 font-semibold">1.97%</td>
              <td className="px-6 py-4">Technology</td>
              <td className="px-6 py-4">
                <button className="text-gray-400 hover:text-red-600">
                  &#128465;
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CurrentHoldings;
