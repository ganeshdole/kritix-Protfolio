import BuySellForm from "../components/BuySellForm";
import CurrentHoldings from "../components/CurrentHoldings";
import PortfolioSummary from "../components/PortfolioSummary";
import TransactionHistory from "../components/TansactionHistory";

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Stock Portfolio</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Portfolio Summary</h2>
        <PortfolioSummary />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Current Holdings</h2>
          <CurrentHoldings />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Buy/Sell Stock</h2>
          <BuySellForm />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <h2 className="text-2xl font-semibold mb-4">Transaction History</h2>
        <TransactionHistory />
      </div>
    </div>
  );
}
