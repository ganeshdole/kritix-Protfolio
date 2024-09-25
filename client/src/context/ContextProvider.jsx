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
    setStocks((prevStocks) => [...prevStocks, newStock]);
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
