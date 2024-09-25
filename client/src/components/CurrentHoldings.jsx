import React, { useState, useContext, useMemo } from "react";
import Store from "../context/Store/Store";

const CurrentHoldings = () => {
  const { state } = useContext(Store);
  const stocks = state.stocks;

  const tableRow = useMemo(() => {
    return stocks.map((stock, index) => (
      <tr className="border-b" key={index}>
        <td className="px-6 py-4">{stock.symbol}</td>
        <td className="px-6 py-4">{stock.quantity}</td>
        <td className="px-6 py-4">{stock.price}</td>
        <td className="px-6 py-4">
          {/* <input
            type="number"
            defaultValue={stock.price}
            className="w-16 border border-gray-300 px-2 py-1 rounded-md focus:outline-none"
          />
          <button className="ml-2 text-gray-500 hover:text-black">
            &#8635;
          </button> */}
          coming soon
        </td>
        <td className="px-6 py-4">
          {(stock.price * stock.quantity).toFixed(2)}
        </td>
        <td className="px-6 py-4 ">coming soon</td>
        <td className="px-6 py-4">{stock.sector}</td>
        <td className="px-6 py-4">
          <button className="text-gray-400 hover:text-red-600">
            &#128465;
          </button>
        </td>
      </tr>
    ));
  }, [stocks]);

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
              <th className="px-6 py-3">Gain/Loss(%)</th>
              <th className="px-6 py-3">Sector</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>{tableRow}</tbody>
        </table>
      </div>
    </section>
  );
};

export default CurrentHoldings;
