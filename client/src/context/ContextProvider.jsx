import Store from "./Store/Store";
import { useState } from "react";
const ContextProvider = ({ children }) => {
  const [stocks, setStocks] = useState([]);
  const [transactions, setTransaction] = useState([]);

  const state = {
    stocks,
    transactions,
  };

  const addStock = (newStock) => {
    console.log(newStock);
    const existingStock = stocks.find(
      (stock) => stock.symbol === newStock.symbol
    );

    if (existingStock) {
      const updatedStocks = stocks.map((stock) =>
        stock.symbol === newStock.symbol
          ? {
              ...stock,
              quantity: Number(stock.quantity) + Number(newStock.quantity),
              avgPrice: newStock.avgPrice,
              totalvalue:
                Number(stock.price) * Number(stock.quantity) +
                Number(newStock.price) * Number(newStock.quantity),
            }
          : stock
      );
      setStocks(updatedStocks);
    } else {
      // If stock doesn't exist, add new stock
      setStocks([
        ...stocks,
        {
          ...newStock,
          totalvalue: Number(newStock.price) * Number(newStock.quantity),
        },
      ]);
    }
  };

  const addTransaction = (newTransaction) => {
    setTransaction((prevTransaction) => [...prevTransaction, newTransaction]);
  };

  const storeFunction = {
    addStock,
    addTransaction,
  };

  return (
    <Store.Provider value={{ state, storeFunction }}>{children}</Store.Provider>
  );
};

export default ContextProvider;
