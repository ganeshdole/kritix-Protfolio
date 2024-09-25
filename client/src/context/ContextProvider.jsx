import Store from "./Store/Store";
import { useState } from "react";
const ContextProvider = ({ children }) => {
  const [stocks, setStocks] = useState([]);
  const [transition, setTransition] = useState({});

  const state = {
    stocks,
  };

  const addStock = (newStock) => {
    setStocks((prevStocks) => [...prevStocks, newStock]);
  };

  return (
    <Store.Provider value={{ state, addStock }}>{children}</Store.Provider>
  );
};

export default ContextProvider;
