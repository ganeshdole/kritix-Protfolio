import { lazy } from "react";

import BuySellForm from "../components/BuySellForm";
import CurrentHoldings from "../components/CurrentHoldings";
import PortfolioSummary from "../components/PortfolioSummary";
import TransactionHistory from "../components/TransitionHistory";

const Portfolio = () => {
  return (
    <div className="m-4 p-4">
      <section className=" border-gray-400 p-4 rounded-lg shadow-lg">
        <h1 className="font-bold text-2xl m-2">Your Stock Portfolio</h1>
        <PortfolioSummary />
      </section>
      <section className="mt-8 border-gray-400 p-4 rounded-lg shadow-lg">
        <h2 className="font-bold text-xl my-4">Buy/Sell Stock</h2>
        <BuySellForm />
      </section>
      <section className="mt-8">
        <CurrentHoldings />
      </section>
      <section className="mt-8">
        <TransactionHistory />
      </section>
    </div>
  );
};

export default Portfolio;
