import React, { useState } from "react";

const BuySellForm = () => {
  const [selected, setSelected] = useState("BUY");
  const buttons = ["BUY", "SELL"];

  const buttonClass = (btn) => `
    border-2 border-solid border-gray-400
    text-center py-2 rounded-md
    text-xl font-medium
    ${
      selected === btn
        ? "bg-black hover:bg-slate-900 text-white"
        : "text-black hover:bg-slate-100"
    }
  `;

  function addStock(e) {
    e.preventDefault();
    console.log("Add Stock");
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => setSelected(btn)}
            className={buttonClass(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <form className="flex flex-col" onSubmit={addStock}>
          <label htmlFor="stockSymbol" className="font-bold text-sm">
            Symbol
          </label>
          <input
            required
            type="text"
            id="stockSymbol"
            className="border-2 border-solid border-gray-400 rounded-md py-2 px-3 mt-1 mb-3 w-full"
          />

          <label htmlFor="stockQuantity" className="font-bold text-sm">
            Quantity
          </label>

          <input
            required
            type="number"
            id="stockQuantity"
            className="border-2 border-solid border-gray-400 rounded-md py-2 px-3 mt-1 mb-3 w-full"
          />

          <label htmlFor="stockPrice" className="font-bold text-sm">
            Price
          </label>
          <input
            required
            type="number"
            step="0.01"
            id="stockPrice"
            className="border-2 border-solid border-gray-400 rounded-md py-2 px-3 mt-1 mb-3 w-full"
          />
          <label htmlFor="stockSector" className="font-bold text-sm">
            Select Sector
          </label>
          <select
            className="border-2 border-solid border-gray-400 rounded-md py-2 px-3 mt-1 mb-3 w-full"
            id="stockSector"
            required
          >
            <option value="Technology">
              Technology: (IT services, software, and electronics)
            </option>
            <option value="Healthcare">
              Healthcare: ( Pharmaceuticals, biotechnology, medical devices,
              hospitals )
            </option>
            <option value="Finance">
              Finance: (Banks, insurance, asset management, financial services )
            </option>
            <option value="Consumer Goods">
              Consumer Goods: (FMCG (daily essentials), consumer durables
              (appliances), retail)
            </option>
            <option value="Energy">
              Energy: (Oil, gas, renewable energy, power generation)
            </option>
            <option value="Industrials">
              Industrials: (Manufacturing, capital goods, construction,
              infrastructure)
            </option>
            <option value="Materials">
              Materials:(Metals, mining, cement, chemicals)
            </option>
            <option value="Telecommunications">
              Telecommunications:(Telecom and internet service providers)
            </option>
            <option value="Utilities">
              Utilities: (Electricity, water, gas supply)
            </option>
            <option value="Real Estate">
              Real Estate: (Property development, real estate investment)
            </option>
            <option value="Other">Other</option>
          </select>

          <button
            type="submit"
            className={`
              border-2 border-solid border-gray-400
              text-center py-2 rounded-md text-xl 
              font-medium text-white hover:bg-slate-900 bg-black
          `}
          >
            {selected} Stock
          </button>
        </form>

        <div className="mt-4 flex gap-2">
          <span className="font-bold text-sm mt-2">
            Tax: ₹<span className="font-normal">0.00</span>
          </span>
          <span className="font-bold text-sm mt-2">
            Brokerage: ₹<span className="font-normal">0.00</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default BuySellForm;
